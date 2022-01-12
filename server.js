const express = require('express');
// const res = require('express/lib/response');
const app = express();

const port = 3000;

//parse json - middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res)=> {
    res.send('Home Page')
})

app.get('/restaurant', (req, res) => {    
    console.log(req.body);
    res.send('These are all the restaurants');
})

app.listen(port, () => {
    console.log(`Server is listening at //localhost:${port}`)
}) 
