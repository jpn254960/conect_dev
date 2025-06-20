const express= require('express');
const cors= require('cors')
const bodyParser= require('body-parser')
const db = require('./db')
const app = express()
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())
app.get('/',(req,res) =>{
    res.send('servidor rodando')
})
// aqui fica as apis 


// aqui inicia o server
app.listen(PORT,()=>{
    console.log('Servidor rodando em http://localhost:'+PORT)
})