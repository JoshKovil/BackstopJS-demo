/* 
URL Configuration
  - mainURL: The prefix/base of the website you want to test. Do remember to remove the "/" at the end
  - projectID: can be specified as a number or a string to identify the website you'll be testing
  - paths: the multiple pages you want to run by backstopJS. Do not remove the "/" 
  - [WIP] Add Staging links for seperate testing
*/
const mainURL = "https://elephant.is";
const projectID = "elephant-revamp";
const paths = [
    "/",
    "/work/",
    "/news/",
    "/about",
];

/* 
Devices Configuration
  - You can select the devices/viewports you want to test by either adding or removing the ones listed at the in the array.
  - [WIP] Adding multple different devices (eg. Pixel 3, iPhone, etc.) for easier selection
*/
const viewports = [
    "mobile",
    "tablet",
    "desktop",
];

module.exports = {
    mainURL,
    projectID,
    paths,
    viewports,
};