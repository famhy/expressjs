const express = require('express')
path = require('path');
const app = express()
const port = 3000
// app.use('__dir','/public')
app.use(function (req, res, next) {
    console.log('Time: %d', new Date().getHours())
    if(new Date().getHours()>12){
        res.send("sorry BRO !")
    }
    next()
  })
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/home', (req, res) => res.sendFile(path.join(__dirname, './public', 'home.html')))
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, './public', 'contact.html')))
app.get('/ourservices', (req, res) => res.sendFile(path.join(__dirname, './public', 'ourservices.html')))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))