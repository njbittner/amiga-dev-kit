---
id: file-reader-gps
title: File Reader GPS
---

# File Reader GPS Example

:::info Basic Knowledge Requirements

1. **Python Programming**: Understanding basic Python programming concepts such as functions, loops,
conditional statements, and type-checking.

2. **[farm-ng GPS Service Overview](/docs/concepts/gps_service/)**:
This overview provides a base understanding of the gRPC service the client you create will connect to.
:::

This [**File Reader GPS**](https://github.com/farm-ng/farm-ng-amiga/blob/main/py/examples/file_reader_gps/main.py)
example provides a utility for reading and parsing GPS messages from the event file.
It can process two types of GPS messages: `relposned` and `pvt`.
The user specifies the type of GPS message to parse, and the script reads the corresponding data,
unpacks it, and prints it to the console.

## Install the [farm-ng Brain ADK package](/docs/brain/brain-install)

## Download the example log file

Now you are going to download the log file that you will use in
this example.

[**Click here to download**](https://farm-ng-dev-auto-plot-mvp.s3.us-west-2.amazonaws.com/datasets/examples_log_file/2023_09_29_17_52_35_070804_dubnium-durian.0000.bin)

:::tip
If you want to use your own log file, the **[Recorder App Guide](/docs/apps/recorder_app/)** walks
you through how to record data directly on the Brain.
:::

## Setup

First, let's create a virtual environment:

```bash
python3 -m venv venv
source venv/bin/activate
```

## Install

Let's install the dependencies required to run this example:

```bash
cd py/examples/file_reader_gps
pip install -r requirements.txt
```

## Run example

Specify the file (download before)

```bash
python main.py --file-name <path-to-your-file>
```

:::info
You should replace &lt;path-to-your-file&gt; with the path to your events binary file (**.bin**).
:::
:::tip Tip
You can also specify a gps interface to read by adding the flag **--topic-name**
:::
For example:

```bash
python main.py --file-name <path-to-your-file> --topic-name relposned
python main.py --file-name <path-to-your-file> --topic-name pvt
```

If everything worked correctly you should now see a large stream
of text come up in your terminal!

The output should look something like this:

```bash
All available topics: ['/gps/pvt', '/gps/relposned']
Found 11 packets of gps/relposned

Message stamp: 92614.926564468
GPS time: 1695861128.4
Relative pose north: 2680.3909000000003
Relative pose east: -4297.41093
Relative pose down: -4.00042
Relative pose length: 506481.000063
Accuracy north: 0.0010000000474974513
Accuracy east: 0.0010000000474974513
Accuracy down: 0.0011399999493733048
Carrier solution: 2
GNSS fix ok: True
--------------------------------------------------
```

**Congrats you are done!**
