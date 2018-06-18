// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,


  // Initialize Firebase
  firebaseConfig: {
    apiKey: "AIzaSyC2nfaV2T64SjvBntVW_-LkZaxQkkIOFOA",
    authDomain: "awesome-7893d.firebaseapp.com",
    databaseURL: "https://awesome-7893d.firebaseio.com",
    projectId: "awesome-7893d",
    storageBucket: "awesome-7893d.appspot.com",
    messagingSenderId: "532033546349"
  }

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
