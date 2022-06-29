const mysql = require('mysql');


const config = {
    host : 'localhost',
    user : 'root',
    database: 'bd_hbcl',
    password: '1234',
};

const conn = mysql.createConnection(config);


conn.connect(function(err) {
    if (err) throw err;
    console.log('La conexion de la base de datos a sido exitosa!!');
});
module.exports = conn;