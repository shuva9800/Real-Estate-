const express= require('express');
const app = express();
const {dbconnect} = require("./config/database");
const dotenv= require("dotenv");


dotenv.config();
const PORT = process.env.PORT || 4000 ;
app.listen(PORT, ()=>{
    console.log(`app running  port ${PORT}`);
});

app.use(express.json());
//database connection
dbconnect();

app.get("/", (req,res)=>{
    return res.status(200).json({
        success: true,
        message:" hello dashboard"
    })
})