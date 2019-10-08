const express = require('express');
const app = express()
const path = require('path')

app.get('*/', function(req, res){
    res.sendFile(path.join(__dirname, '../app/index.html'))
})

app.listen(3000, () => {
    console.log('LISTENTING ON PORT 3000!!!!!')
})