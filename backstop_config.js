const fs = require("fs");
const path = require("path");
const testsFolder = (__dirname + '/tests');
const arguements = require('minimist')(process.argv.slice(2));

let scenarios = [];
let tests = [];

//TODO: Add staging link for testing (don't need one for reference)
// The default host to test 
if (!arguements.testHost) {
    arguements.testHost = "https://elephant.is";
}

// The default host to reference
if (!arguements.referenceHost) {
    arguements.referenceHost = "https://elephant.is";
}

// Default Settings - used when there are no configuration set in the 'tests' folders.
const defaultTest = {
    "label": "",
    "url": arguements.testHost + '/',
    "referenceUrl": arguements.referenceHost + '/',
    "hideSelectors": [],
    "removeSelectors": [],
    "selectors": [],
    "readyEvent": null,
    "delay": 3000,
    "misMatchThreshold": 0.9,
    "onBeforeScript": "",
    "onReadyScript": "puppet/onReady.js",
    "cookiePath": ""
};

// Finds all the test cases needed to run (from both paths_config.js and scenarios_config.js)
// TODO: to return error when no test cases are found (current error returns undefined)
const testFiles = fs.readdirSync(testsFolder);
testFiles.forEach(entity => {
    const filePath = `${testsFolder}/${entity}`;
    if (path.extname(filePath) === '.js') {
        const testList = require(filePath).scenarios;
        testList.forEach((scenario) => {
            tests.push(scenario);
        });
    };
});

// if no file has been found, run the default configuration
if (tests.length == 0){
    tests = [
        {
            "label": "default"
        }
    ];
}

function cloneObject(testObj) {
    return (JSON.parse(JSON.stringify(testObj)));
} 

// For each test case, generate the scenario
tests.forEach(test => {
    let scenario = new Object();
    scenario = Object.assign((defaultTest), test);

    if (scenario.relativeUrl) {
        scenario.url = arguements.testHost + scenario.relativeUrl;
        scenario.referenceUrl = arguements.referenceHost + scenario.relativeUrl;
        delete scenario.relativeUrl;
    }
    scenarios.push(cloneObject(scenario));
});

console.log (scenarios);

module.exports = {
    "id": "prod_test",
    "viewports": [
        {
            "name": "desktop",
            "width": 1440,
            "height": 2560
        },
        {
            "name": "tablet",
            "width": 768,
            "height": 1024
        },
        {
            "name": "phone",
            "width": 360,
            "height": 780
        }
    ],
    "scenarios": scenarios,
    "paths": {
      "bitmaps_reference": "backstop_data/bitmaps_reference",
      "bitmaps_test": "backstop_data/bitmaps_test",
      "engine_scripts": "backstop_data/engine_scripts",
      "html_report": "backstop_data/html_report",
      "ci_report": "backstop_data/ci_report"
    },
    "report": ["browser"],
    "engine": "puppeteer",
    "engineOptions": {
      "args": ["--no-sandbox", "--disable-setuid-sandbox"],
      "ignoreHTTPSErrors": true
    },
    "asyncCaptureLimit": 9,
    "asyncCompareLimit": 50,
    "debug": false,
    "debugWindow": false
  };