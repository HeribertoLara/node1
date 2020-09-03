const http = require ('http')
const server = http.createServer((req,res)=>{
    res.end(' estoy respondiendo  la solicitud v2.0')
})
const puerto = 3000;
server.listen(puerto,()=>{
    console.log('escuchando solicitudes v.2.1')

})
// const {frutas, dinero} = require('./frutas')
// var cowsay = require("cowsay");

// console.log(cowsay.say({
// 	text : "Hola soy un proyecto",
// 	e : "oO",
// 	T : "U "
// }));
// frutas.forEach(item=>{
//     console.count(item)
// })
// console.log(dinero)