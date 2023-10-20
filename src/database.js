const mysql = require('mysql')

const config = {
    host:'localhost',
    user:'root',
    password:'',
    database:'session1'
}

const conn = mysql.createConnection(config,(err)=>{
    console.log(err)
})


function getConn(){
    return conn
}

function closeConn(){
    conn.end(function (err) {
        if (err) {
            console.log('Error al cerrar la conexión: ' + err.message);
        } else {
            console.log('Conexión cerrada correctamente.');
        }
    });
}

module.exports = { getConn , closeConn }


