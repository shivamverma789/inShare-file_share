const express =require("express");
const path =require("path");

const app =express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'))

app.use(express.json());

const connectDb = require("./config/db");
connectDb();

//template engine 
app.set("views",path.join(__dirname,"/views"));
app.set ('view engine', 'ejs');

//routes
app.use('/api/files', require("./routes/files"));
app.use('/files',require('./routes/show'));
app.use('/files/download', require("./routes/download"));






app.listen( PORT , ()=>{
    console.log(`Listening on the port ${PORT}`);
})