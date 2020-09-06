const express = require('express')
const app = express();
const fs = require ('fs')
const path = require ('path')

const port= 4000

app.use(express.static(__dirname+"/public"))


app.get('/nosotros', (req,res)=>{
    res.send('Esta es mi pagina nosotros')
})

app.get('/', (req,res)=>{
    res.send('Mi respuesta desde express v3.0')
})

app.get('/inicio',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','login'))
})

app.get('/registro',(req,res)=>{
    res.sendFile(path.join(__dirname, 'registro', 'register.html' ))
})

app.get('/recuperar-contraseña',(req,res)=>{
    res.sendFile(path.join(__dirname, 'recuperarContraseña', 'forgot-password.html' ))
})

app.get('/nosotros',(req,res)=>{
    res.sendFile(path.join(__dirname, 'nosotros', 'nosotros.html' ))
})

// app.use((req, res, next)=>{
//     res.status(404).sendFile(__dirname+"/public/404.html")
// })

app.listen(port, ()=>{
    console.log('mi respuesta desde express ',port)
})