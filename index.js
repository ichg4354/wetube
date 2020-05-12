const express = require('express')
const app = express()
const PORTS = 4000

function handleListening() {
    console.log(`listening to http://localhost:${PORTS}`)
}
function handleHome(req,res) {
    // console.log(req)
    res.send('hi from home')
}

function handleProfile(req, res) {
    // console.log(req)
    res.send('hi from profile')
}

app.get('/', handleHome)

app.get('/profile',handleProfile)

app.listen(PORTS, handleListening)

