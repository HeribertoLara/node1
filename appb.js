const express = require('express')
const app = express();
const fs = require ('fs')

const port= 3000

app.get('/', (req,res)=>{
    res.send('Mi respuesta desde express v2.0')
})

app.get('/servicios', (req,res)=>{
    res.send('Esta es la pagina de servicios')
})

app.use(express.static(__dirname+"/public"))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'login', 'login.html' ))
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'registro', 'register.html' ))
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'recuperarContraseña', 'forgot-password.html' ))
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, 'nosotros', 'nosotros.html' ))
})

app.get

app.listen(port, ()=>{
    console.log('mi respuesta desde express ',port)
})