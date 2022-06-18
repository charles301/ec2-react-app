const express = require('express')
const app = express()
const PORT = 80
const path = require('path')

// app.get('/', (req, res) =>{
//     res.send("server")
// })

app.use(express.static(path.join(__dirname, 'client', 'build')))

app.listen(PORT, ()=>{
   console.log(`Server listening on port ${PORT}`) 
})