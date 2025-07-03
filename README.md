npm install firebase
npm install firebase-admin
gcloud config set project trisummit-io
gcloud iam service-accounts add-iam-policy-binding firestore-sa@trisummit-io.iam.gserviceaccount.com \
        --member user:brian@trisummit.net \
        --role roles/datastore.user

npm install dotenv
export GOOGLE_APPLICATION_CREDENTIALS="/Users/briannettles/Desktop/research-and-development/development/bookofmormonheartland/sacredrecords/node/keys/trisummit-io-feea3939aa4d.json"









Environment Required to simulate you are in a particular GCP Project:
gcloud init

See if  gcloud init allows you to set the project id to trisummit-io
possibly try below if it does not:
gcloud auth application-default login



installation:
npm install @google-cloud/firestore







DEBUG=Sacred-Records-Node:* npm start


**AndroidManifest.xml** 
Location:
In a standard React Native project (not using Expo managed workflow without ejecting), you will find the AndroidManifest.xml file(s) within the android directory of your project, typically at:
android/app/src/main/AndroidManifest.xml (for your main application configuration)
android/app/src/debug/AndroidManifest.xml (for debug-specific settings that override or add to the main manifest during development)

Expo Managed Workflow:
If you are using Expo's managed workflow, you typically do not directly interact with the AndroidManifest.xml file. Expo handles the native configurations, including the manifest, based on settings defined in your app.json or app.config.js file. If you need to customize native module settings, you might use Expo config plugins or eject your project to gain direct access to the native android folder.


**Info.plist**
Location:
Bare React Native Projects:
.
The Info.plist file is typically found at YOUR_APP_DIR/ios/YOUR_APP_NAME/Info.plist.
Expo Managed Projects:
.
In Expo managed workflows, Expo handles the Info.plist and other native configuration files internally. You won't directly access or modify this file unless you "eject" from Expo using npx expo prebuild, which generates the native iOS and Android project folders.

