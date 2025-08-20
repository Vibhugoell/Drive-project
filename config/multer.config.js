const multer=require('multer')
const firebaseStorage=require('multer-firebase-storage');
const firebase=require('./firebase.config');
const serviceAccount=require('../drive-86c37-firebase-adminsdk-fbsvc-30fff12e51.json');

const storage=firebaseStorage({
    credentials:firebase.credential.cert(serviceAccount),
    bucketName:'drive-86c37-default-rtdb.firebaseio.com/'
});

const upload=multer({
    storage:storage,
})
module.exports=upload;