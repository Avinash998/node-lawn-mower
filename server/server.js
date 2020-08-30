const express = require('express');
require('dotenv').config();

const app = express();
const PORT = 3000;

app.get('/test', (req,res) => {
    console.log("Test Successfull");
    res.status(200).send("Test successfull");
});


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
    console.log(process.env.DB);
})