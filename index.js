const express = require('express');

const app = express();
const PORT = 3000;

app.get('/test', (req,res) => {
    console.log("Test Succfull");
    res.status(200).send("Test successfull");
});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})