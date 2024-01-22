const express = require("express");
const mysql = require ("mysql");
const ventas = express();
let conexion = mysql.createConnection ({
    host: "localhost",
    database: "mydb",
    user: "root",
    password: "",
    port: "8111"
   
});
conexion.connect();
    
//  analizar datos JSON y urlencoded
ventas.use(express.json());
ventas.use(express.urlencoded({ extended: false }));

// Configurar el tipo MIME para archivos JavaScript

  

// Ruta para servir la página del formulario
ventas.get('/Registro', (req, res) => {
  res.sendFile(__dirname + '/Registro.html');
});

// Ruta para procesar los datos del formulario
ventas.post('/procesar', (req, res) => {
  const datosFormulario = req.body;
  console.log(datosFormulario);
  	
    let VenNomProducto=datosFormulario.nombre;
    let VenCodReferencia_Id =datosFormulario.codigo;	
   	let VenCantidad=datosFormulario.cantidad;	
    let VenPrecio=datosFormulario.precio;	
    
    
	 let registrar = "INSERT INTO tblventa ( VenNomProducto,VenCodReferencia_Id, VenCantidad, VenPrecio) VALUES	('"+VenNomProducto+"','"+VenCodReferencia_Id+"','"+VenCantidad+"','"+VenPrecio+"')"
    conexion.query(registrar, function (err, result) {

        if (err){
            
            throw err;
        
        }
        else {
            console.log("datos registrados con exito");
        }

    });
  // guardarlos en una base de datos
  res.send('Datos recibidos con éxito');
});

// Iniciar el servidor en el puerto 4007
ventas.listen(4007, () => {
  console.log('Servidor escuchando en el puerto 4007');
});