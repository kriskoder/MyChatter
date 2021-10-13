# MyChatter

MyChatter is a mobile app used for chatting.

App is created in [React Native](https://reactnative.dev/) and runs on [Expo](https://expo.dev/). Project uses [React Navigation](https://reactnavigation.org/) and has mock user database.

## Installation

Use Node.js and npm to install all packages required by MyChatter. 

Install expo-cli globally 

```bash
npm i -g expo-cli
```
Go to MyChatter root directory and install npm packages.

```bash
npm install
```
## Usage

### Mobile Device 
To run MyChatter directly on mobile device, first install Expo Go from AppStore or Expo from Google Play and then:

1. From the MyChatter root directory run:
```bash   
# runs expo in tunnel mode and app is available to all mobile devices with network connection
npm run tunnel
```
2. Scan generated QR code with Expo app on your device.

### Emulators on local machine

1. Run mobile device emulator on local machine. 

2. From the MyChatter root directory run:
```bash   
# runs expo on localhost and opens MyChatter on Android
npm run android
# runs expo on localhost and opens MyChatter on iOS
npm run ios
```
2. Scan generated QR code with Expo app on your device.
