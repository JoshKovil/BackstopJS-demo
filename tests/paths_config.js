
// Testing general website content against different viewports
function generateScenarios() {

    let scenariosList = [];

    //add your relative paths of your main URLs in the array below.
    const relURL = [
        "/",
        "/work/",
        "/news/",
        "/about/"
    ];

    relURL.forEach( relURL => {
        scenariosList.push({
            "label": 'general_' + relURL,
            "relativeUrl": relURL,
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
            ]
        });
    });
    return scenariosList;
}

module.exports = {
    scenarios: generateScenarios()
};