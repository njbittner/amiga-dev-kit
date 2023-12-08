/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
  "Documentation": {
    "Introduction": [
      "getting-started",
    ],
    "Getting Started": [
      "amiga_quick_start/amiga-quick-start",
      "ssh/ssh",
      "brain/brain-install",
      "brain/next-steps",
    ],


    "Amiga Rover": [
      {
        "items": [
        "dashboard/dashboard",
        "dashboard/dashboard-user-guide",
        "dashboard/control-states",
        "dashboard/dashboard-fw",
      ],
      "label": "Dashboard",
      "type": "category"
    },
    {
      "items": [
        "pendant/pendant"

      ],
      "label": "Pendant",
      "type": "category"
    },

    ],
    "Intelligence Kit": [
      "intelligence-kit/overview-intel",
{
        "items": [
          "brain/brain",
          "intelligence-kit/brain/brain-v2",
        ],
        "label": "Brain",
        "type": "category"

      },
{
  "items": [
    "release-notes/release-02",
    "release-notes/release-01",
  ],
  "label": "Release Notes",
  "type": "category"
},
    ],
    "Farm Tools":[
      {
        "items": [
          "farm-tools/three-point",
        ],
        "label": "Three Point",
        "type": "category"
      },
  ],
    "Development Tools": [
      {
        "items": [
            "debug_cable/debug-cable",
            "debug_cable/service-cable"
      ],
      "label": "Cables",
      "type": "category"
    },
    {
      "items": [
        "mcu_kit/microcontroller-kit",
      ],
      "label": "Microcontroller Kit",
      "type": "category"
    },
  ],

    "Resources/Support": [
      "hardware-tools/recommended-tools",
      "reference/faq",
      "support/support",
      "support/github-101",
    ],
  },
  "Concepts": [
    "concepts/concepts-index",
    {
      "Fundamental Concepts": [
        "concepts/system_overview/amiga-dev",
        "concepts/transforms_and_poses/transforms-and-poses",
        "concepts/tracks_and_waypoints/tracks-and-waypoints",
      ],
        "Service Overviews": [
        "concepts/canbus_service/canbus-overview",
        "concepts/oak_service/oak-overview",
        "concepts/gps_service/gps-overview",
        "concepts/recorder_service/recorder-overview",
        "concepts/filter_service/filter-overview",
        "concepts/track_follower_service/track-follower-overview",
      ],
      "App Overviews": [
        "apps/filter_app/filter-app",
        "apps/autoplot_app/autoplot-app",
        "apps/recorder_app/recorder-app",
        "apps/file_manager_app/file-manager-app",
      ],
    },
  ],
  "api": [
    "api/api-index",
    {
      "CircuitPython ADK": [
        require("./docs/reference/circuitpy/sidebar.json")
      ],
    },
    {
      "Brain ADK": [
        require("./docs/reference/brain/sidebar.json")
      ],
    }
  ],
  "examples": [
    "examples/examples-index",
    {
    "CircuitPython Examples" : [
        "examples/hello_main_loop/hello-world",
        "examples/cansniffer/cansniffer",
        "examples/FPV/fpv",
    ],
    "Brain Examples" : [
      {
        "items": [
            "examples/events_recorder/events-recorder",
        ],
        "label": "Data Recording Examples",
        "type": "category"
      },
      {
        "items": [
        "examples/file_reader/file-reader",
        "examples/file_converter/file-converter",
        "examples/file_reader_can/file-reader-can",
        "examples/file_reader_gps/file-reader-gps",
        ],
        "label": "Playback Examples",
        "type": "category"
      },
      {
        "items": [
          "examples/camera_client/camera-client",
          "examples/camera_settings/camera-settings",
          "examples/camera_calibration/camera-calibration",
          "examples/camera_aruco_detector/camera-aruco-detector",
          "examples/camera_pointcloud/camera-pointcloud",
        ],
        "label": "Camera Examples",
        "type": "category"
      },
      {
        "items": [
          "examples/motor_state/motor-state",
          "examples/vehicle_twist/vehicle-twist",
          "examples/file_reader_can/file-reader-can",
        ],
        "label": "CAN Bus Examples",
        "type": "category"
      },
      {
        "items": [
          "examples/gps_client/gps-client",
          "examples/file_reader_gps/file-reader-gps",
        ],
        "label": "GPS Examples",
        "type": "category"
      },
      {
        "items": [
          "examples/filter_client/filter-client",
        ],
        "label": "State Estimation Examples",
        "type": "category"
      },
      {
        "items": [
          "examples/track_recorder/track-recorder",
          "examples/track_plotter/track-plotter",
          "examples/track_follower/track-follower",
          "examples/square_track/square-track",
        ],
        "label": "Track Follower Examples",
        "type": "category"
      },
      {
        "items": [
            "examples/multi_client_subscriber/multi-client-subscriber",
            "examples/multi_client_geoimage/multi-client-geoimage",
        ],
      "label": "Multi Client Examples",
      "type": "category"
      },
      {
        "items": [
          "examples/service_client/service-client",
          "examples/service_counter/service-counter",
          "examples/service_propagation/service-propagation",
        ],
      "label": "Custom Service Examples",
      "type": "category"
      },
      {
      "items": [
        "examples/vnc_viewer/vnc-viewer",
        "examples/monitor_app/monitor-app",
      ],
      "label": "Miscellaneous Examples",
      "type": "category"
      },
    ],
    "Amiga Brain Development": [
      "brain/brain-apps",
      "brain/brain-apps-kivy",
      "brain/brain-apps-manifest",
      "brain/sdk-barley-migration",
      "brain/ros-bridge"
    ]
    }
  ],
  "contribute": [
    "contribute/contribute-website"
  ],

};

module.exports = sidebars
