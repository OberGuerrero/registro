const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'abogados'
});

connection.connect(error => {
  if (error) throw error;
  console.log('Conexión exitosa con la base de datos');
});
