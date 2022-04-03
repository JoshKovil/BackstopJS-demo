# automation-backstopJS

BackstopJS is a visual regression tool that creates snapshot of rendered pages in an emulated browser(chrome). This is a simple setup repositry to implement on static websites.

## Pre-requisites

- Git
- NodeJS
- IDE 

## Installation - For Mac

1. Most versions of MacOS already have Git installed. you can check it by running the following command in your terminal, `cd git --version`:

    <img src="https://i.imgur.com/1tf1NVA.png" width=80% height=60%>
    
    If you don't have it installed, you can download the latest macOS git installer [here](https://sourceforge.net/projects/git-osx-installer/files/).

2. Once git has been installed, create a folder called, "**automation**" in your project's directory.

3. Using the terminal, enter into the "**automation**" folder you've just created with the `cd` command:

    <img src="https://i.imgur.com/0kSxS2P.png" width=80% height=60%>

4. Clone this repositry to the project folder you specified above using the following command, `git clone`:

    <img src="https://i.imgur.com/vVlTvug.png" width=80% height=60%>

5. Once completed, ensure that `node` and `nvm` are installed in your macOS using the following commands:

    <img src="https://i.imgur.com/PBdtcki.png" width=80% height=60%>

    if they are not installed, download and install the latest version of node [here](https://nodejs.org/en/) and restart your terminal.

6. After that, simply type `npm install -g backstopjs` to install backstopjs globally:

    <img src="https://i.imgur.com/psSIMVG.png" width=80% height=60%>

7. Then, buld your project by running `npm i` (Note: make sure you are in the **automation-backstopJS** folder, where the package.json file is located):

    <img src="https://i.imgur.com/PmYJa69.png" width=80% height=60%>
    
## Installation - For Windows

It is recommended to use powershell (in administrator mode) when running commands to initial this project, in this section.

1. Check that git is installed using `git --version`. If it is not, download the latest version of git [here](https://git-scm.com/downloads), install it and restart the powershell terminal.

2. Follow step 2 to 7 from the "installation - For Mac", there are both similar.

# Getting Started

Before running the visual regression test, do make sure that the you have set the correct URL paths for the projects.

Under the `constant.js` javascript file, scroll to the following section:

<img src="https://i.imgur.com/BRmz2z2.png">

make the necessary changes to the `mainURL`, `projectID` and `paths` variables according to the specifications of the project.

**Note:** Do not delete/edit the `/` from the `paths` array.

Scrolling down to the following section allows you to select the viewports for your project:

<img src="https://i.imgur.com/VFOsXYl.png">

**Note:** There has to be one viewport within the `viewports` array for backstopJS to run.

enter `npm run test:prod` into the terminal to run the visual regression test against all the configured `paths` you mentioned in the setup above, in all the configured `viewports`. This will generate bitmaps for comparison in the **backstop_data** folder. 

When running the test for the first time, the test is expected to fail as there is no bitmap to compare it with. You should see the following HTML report:

<img src="https://i.imgur.com/1xIQOTO.png" alt="BackstopJS html report - first time tests execution" style="max-width: 100%;">

Simply run `npm run lgtm:prod` to approve the current bitmap for reference with the newer bitmaps. Then, just re-run `npm run test:prod` the next time to see the test working as intended.