const express = require('express');
const app = express()

app.get('/signup', function(req, res){
    res.send("HELLO WORLD")
})

app.listen(3000, () => {
    console.log('LISTENTING ON PORT 3000!!!!!')
})