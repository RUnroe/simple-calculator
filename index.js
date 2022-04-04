const express = require("express");
const path = require("path");


const app = express();

app.use(express.static(path.join(__dirname+"/public")));


app.get("/", (req, res) => {
    res.sendFile('index.html');

});


app.listen(3000);




/*

    
    Be sure the description for each 'test' command makes it clear what is being tested 
    
    Create an e2e test simulating someone using the calculator and testing each key at least once and solving five math problems
    The test should have slowMo set to 80
    All tests should pass
    Only use Jest, Puppeteer, and the modules we have used in class.



*/