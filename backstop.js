const constants = require("./constants.js");
const scenarios = [];
const viewports = [];

const milliSeconds = 3000; // adds delay for the screenshots

constants.viewports.map(viewport => {
    if (viewport === "mobile") {
        selectViewports(viewport, 320, 480);
      }
      if (viewport === "tablet") {
        selectViewports(viewport, 1024, 768);
      }
      if (viewport === "desktop") {
        selectViewports(viewport, 1280, 1024);
    }
});

function selectViewports (viewport, width, height) {
    viewports.push({
        label: viewport,
        width,
        height,
    });
}

constants.paths.map(paths => {
    selectScenarios(paths);
});

function selectScenarios (paths) {
    scenarios.push ({
        label: paths,
        cookiePath: "backstop_data/engine_scripts/cookies.json",
        url: `${constants.mainURL}${paths}`,
        referenceUrl: "",
        readyEvent: "",
        readySelector: "",
        delay: milliSeconds,
        hideSelectors: [],
        removeSelectors: [],
        hoverSelector: "",
        clickSelector: "",
        postInteractionWait: 0,
        selectors: [],
        selectorExpansion: true,
        expect: 0,
        misMatchThreshold: 0.1,
        requireSameDimensions: true,
    });
}

function selectViewports (viewport, width, height) {
    viewports.push({
        label: viewport,
        width,
        height,
    });
}

module.exports = {
    id: constants.projectID,
    viewports,
    onBeforeScript: "puppet/onBefore.js",
    onReadyScript: "puppet/onReady.js",
    scenarios,
    paths: {
      bitmaps_reference: "backstop_data/bitmaps_reference",
      bitmaps_test: "backstop_data/bitmaps_test",
      engine_scripts: "backstop_data/engine_scripts",
      html_report: "backstop_data/html_report",
      ci_report: "backstop_data/ci_report"
    },
    report: ["browser"],
    engine: "puppeteer",
    engineOptions: {
      args: ["--no-sandbox"]
    },
    asyncCaptureLimit: 5,
    asyncCompareLimit: 50,
    debug: false,
    debugWindow: false
  };
  