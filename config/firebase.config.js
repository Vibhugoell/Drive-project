const Firebase=require('firebase-admin');
const serviceAccount=require('../drive-86c37-firebase-adminsdk-fbsvc-30fff12e51')
const firebase=Firebase.initializeApp({
    credential:Firebase.credential.cert(serviceAccount),
    storageBucket:'drive-86c37-default-rtdb.firebaseio.com/'
});

module.exports=Firebase;