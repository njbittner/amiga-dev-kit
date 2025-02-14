---
id: camera-settings
title: Camera Settings
---

:::info Basic Knowledge Requirements

Before diving into this code, here's a quick heads-up on what you'll need to be familiar with:

1. **Python Programming**: It's important to have a good grasp of Python, especially with concepts
like `functions`, `loops`, and `classes`, since the example utilizes these fundamentals.
2. **Asynchronous Programming with asyncio**: Familiarity with Python's asyncio for writing concurrent
code using the `async/await` syntax.
3. **Camera Configuration and Control**: Knowledge of camera settings and configurations
(possibly specific to the OAK-D camera) would be beneficial for understanding how the camera
settings are manipulated in the code.
4. **[farm-ng Oak Service Overview](/docs/concepts/oak_service/)**:
This overview provides a base understanding of the gRPC service the client you create will connect to.
:::

The [**Camera Settings**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/camera_settings/main.py)
 example operates as a standalone Python script,
in which an `EventClient` to an Oak camera service running on an Amiga brain is created.
The settings of an Oak camera camera are set,
and the returned result is printed in the terminal.

You can either run this example directly on a brain by `ssh`'ing in,
or use your local PC.
If using your local PC, it should be either connected to the same local network as the brain
or linked to it through tailscale.

Ensure that a [**farm-ng brain**](/docs/brain/) running Oak cameras is active.

### 1. Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

### 2. Setup

:::tip

It is recommended to also install these dependencies and run the
example in the brain ADK virtual environment.

:::

Create first a virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

```bash
# assuming you're already in the amiga-dev-kit/ directory
cd farm-ng-amiga/py/examples/camera_settings
```

### 3. Install the example's dependencies

```bash
pip3 install -r requirements.txt
```

### 4. Execute the Python script

```bash
python3 main.py --service-config service_config.json --camera-settings camera_settings.json
```

:::info
By default, the camera `host` is assumed to be `localhost` (service_config.json).
If running the example from your local PC, you should replace `localhost` with
your brain's IP address (e.g., 100.67.32.5) or your Amiga's name
(e.g., `element-vegetable` - only supported if connected via tailscale).
:::

### 5. Customize run

```bash
# usage: amiga-camera-settings [-h] --service-config SERVICE_CONFIG
#                              [--camera-settings CAMERA_SETTINGS] [--stream-name {rgb,mono}]
#
# optional arguments:
#   -h, --help            show this help message and exit
#   --service-config SERVICE_CONFIG
#                         The camera service config.
#   --camera-settings CAMERA_SETTINGS
#                         The camera control settings.
#   --stream-name {rgb,mono}
#                         The stream name to set the settings for.
```

### 6. Code overview

In this example we use the `EventClient` with the `request_reply` method to receive and
set the camera settings. The `request_reply` method is a coroutine that returns a `Future` object.
The `Future` object is used to retrieve the result of the request.

To get the settings, the path to the camera service is
`/camera_settings/<stream_name>` and the request message is `Empty`.
The reply message is `oak_pb2.CameraSettings` and contains the current camera settings.

To set the settings, the path to the camera service is `/camera_settings/<stream_name>`
and the request message is `oak_pb2.CameraSettings`.

You can explore the files `service_config.json` to customize the camera service configuration
and `camera_settings.json` to customize the camera settings.

```python
async def main(service_config_path: Path, settings_config_path: Path, stream_name: str) -> None:
    """Request the camera calibration from the camera service.

    Args:
        service_config_path (Path): The path to the camera service config.
        settings_config_path (Path): The path to the camera settings config.
        stream_name (str): The stream name to set the settings for.
    """
    # create a client to the camera service
    config: EventServiceConfig = proto_from_json_file(service_config_path, EventServiceConfig())

    # create camera setting from the json file
    camera_settings_request: oak_pb2.CameraSettings | Empty = Empty()
    if settings_config_path:
        camera_settings_request = proto_from_json_file(settings_config_path, oak_pb2.CameraSettings())

    # send a request to the camera service
    # the camera service will reply with the current camera settings
    # available settings are:
    #   - /camera_settings/rgb
    #   - /camera_settings/mono
    camera_settings: oak_pb2.CameraSettings = await EventClient(config).request_reply(
        f"/camera_settings/{stream_name}", camera_settings_request, decode=True
    )

    print(camera_settings)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog="amiga-camera-settings")
    parser.add_argument("--service-config", type=Path, required=True, help="The camera service config.")
    parser.add_argument("--camera-settings", type=Path, required=False, help="The camera control settings.")
    parser.add_argument(
        "--stream-name",
        type=str,
        choices=["rgb", "mono"],
        default="rgb",
        help="The stream name to set the settings for.",
    )
    args = parser.parse_args()

    asyncio.run(main(args.service_config, args.camera_settings, args.stream_name))
```

:::tip
We highly recommend to have some basic knowledge about
[**`asyncio`**](https://docs.python.org/3/library/asyncio.html).
:::
