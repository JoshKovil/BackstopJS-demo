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