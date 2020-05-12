const express = require('express')
const app = express()

function handleListening() {
    console.log('listening')
}

app.listen(4000,handleListening)