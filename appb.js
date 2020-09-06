const express = require('express')
const app = express();
const fs = require ('fs')
const path = require ('path')

const port= 4000

app.use(express.static(__dirname+"/public"))

// app.get('/nosotros', (req,res)=>{
//     res.send('Esta es mi pagina nosotros')
// })

app.get('/', (req,res)=>{
    res.send('Mi respuesta desde express v3.0')
})

app.get('/inicio',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','login.html'))
})

app.get('/registro',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'register.html' ))
})

app.get('/recuperar-contraseña',(req,res)=>{
    res.sendFile(path.join(__dirname, 'public', 'forgot-password.html' ))
})

app.get('/nosotros',(req,res)=>{
    res.send('Esta es mi pagina nosotros')
    fs.readFile('contador.txt',(error,datos) =>{
        let visitas = datos.tostring()
        let arreglosVisitas = visitas.split(':')
        visitas = Number(arregloVisitas[1])
        visitas++
        fs.writeFile('contador.txt', 'visitas:$(visitas)',(error)=>{
        })
    })
    // res.sendFile(path.join(__dirname, 'public', 'nosotros.html' ))
})

app.use((req, res, next)=>{
    res.status(404).sendFile(__dirname+"/public/404.html")
})

app.listen(port, ()=>{
    console.log('mi respuesta desde express ',port)
})