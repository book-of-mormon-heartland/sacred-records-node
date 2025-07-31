npm install firebase
npm install firebase-admin
gcloud config set project trisummit-io
gcloud iam service-accounts add-iam-policy-binding firestore-sa@trisummit-io.iam.gserviceaccount.com \
        --member user:brian@trisummit.net \
        --role roles/datastore.user

npm install dotenv
export GOOGLE_APPLICATION_CREDENTIALS="/Users/briannettles/development/bookofmormonheartland/sacred-apps/sacredrecords/safefiles/trisummit-io-feea3939aa4d.json"

docker compose up --build

Environment Required to simulate you are in a particular GCP Project:
gcloud init

See if  gcloud init allows you to set the project id to trisummit-io
possibly try below if it does not:
gcloud auth application-default login
installation:
npm install @google-cloud/firestore
DEBUG=Sacred-Records-Node:* npm start
npm i react-native-feather