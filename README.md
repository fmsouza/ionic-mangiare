# Mangiare

Mangiare is an app made to match people which wants to eat something with other people wanting to eat the same thing or wanting to cook that thing.
It was inpired in a joke published in Twitter by a brazilian user asking for an app like this.

This project is based on Ionic 2 with TypeScript + Karma + Protractor.

## Table of Contents
 - [Screenshots](#screenshots)
 - [Getting Started](#getting-started)
 - [Run in browser](#run-in-browser)
 - [Run in Android](#run-in-android)
 - [Run in iOS](#run-in-ios)
 - [Run Unit Tests](#run-unit-tests)
 - [Run E2E](#run-e2e)
 - [Contribute](#contribute)

## Screenshots

<p align="center">
    <img src="screenshots/cards.png" alt="Cards view" />
    <img src="screenshots/cards-swing.png" alt="Cards swinging" />
    <img src="screenshots/chats.png" alt="Chats" />
    <br/><br/>
    <img src="screenshots/chatview.png" alt="Chat view" />
    <img src="screenshots/settings.png" alt="Settings pane" />
</p>

## Getting Started

* Clone this repository.
* Install the ionic CLI and Cordova CLI (`npm install -g ionic cordova`)
* Run `npm install` from the project root.
* Run `npm start` in a terminal from the project root.
* Profit.

**Note:** Is your build slow? Update `npm` to 3.x: `npm install -g npm`.

## Run in browser
```bash
npm start         # deploys the the browser
```

## Run in Android
```bash
# make sure the Android device is connected and available to ADB

npm run android   # deploys the app to an Android device
```

## Run in iOS
```bash
# make sure the iOS device is connected

npm run ios       # deploys the app to an iOS device
```

## Run Unit Tests
```bash
npm test          # run unit tests
```

## Run E2E
```bash
# e2e (aka. end-to-end, integration) - In two different shell windows
# Make sure you don't have a global instance of Protractor

npm start
npm run e2e
```

## Contribute
Issues and PRs are welcome, see the [issues list](https://github.com/fmsouza/mangiare/issues).

To send a PR:
    - Fork the project
    - Checkout to the branch `dev`
    - Create a new branch referring to the issue you will solve
    - Push your new branch to your Fork
    - Send the Pull Request
