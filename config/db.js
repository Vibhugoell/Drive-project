const mongoose=require('mongoose');
function connectToDB(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log("Connected to DB");
    }) // MONGO_URI value conmes here from the .env
}
module.exports=connectToDB;