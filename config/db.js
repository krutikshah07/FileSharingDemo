require('dotenv').config();
const mongoose =require('mongoose');



function connectDB(){
    
mongoose.connect(process.env.MONGO_CONNECTION_URL,{
    useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser: true,
    useFindAndModify: false,
});
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Connected")
}).catch(err=>{
    console.log("Connection Failed")
})

}

module.exports = connectDB;