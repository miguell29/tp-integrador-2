require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT =process.env.PORT || 3000;
app.use(cors());

app.listen(PORT ,()=>{
    console.log(`tu app esta lista por http://loaclhost:${PORT}`);
})
