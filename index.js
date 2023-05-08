const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());



app.get('/coffees' , (req,res)=>{
    res.send("This is Coffee server");
})
app.listen(port, ()=>{
    console.log(`This port is listening at port ${port}`);
})

