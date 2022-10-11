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
  "docs": {
    "Introduction": [
      "getting-started",
    ],
    "Dashboard": [
      "dashboard/dashboard",
      "dashboard/dashboard-fw",
    ],
    "Debug Cable": [
      "debug_cable/debug-cable",
    ],
    "Microcontroller Kit": [
      "mcu_kit/microcontroller-kit",
    ],
    "Brain": [
      "brain/brain",
      "brain/brain-apps",
      "brain/brain-install"
    ],
    // "Pendant": [
    //   "pendant/pendant",
    // ],
  },
  "api": [
    "api",
    {
      "Circuit Python": [
        require("./docs/reference/circuitpy/sidebar.json")
      ],
    },
    {
      "Brain ADK": [
        "brain/brain-install",
        require("./docs/reference/brain/sidebar.json")
      ],
    }
  ],
  "examples": [
    "examples/examples-index",
    "examples/hello_main_loop/hello-world",
    "examples/cansniffer/cansniffer",
    "examples/FPV/fpv",
    "examples/camera_client/camera-client",
    "examples/camera_client_gui/camera-client-gui",
  ],
  "contribute": [
    "contribute/contribute-website"
  ]
};

module.exports = sidebars;
