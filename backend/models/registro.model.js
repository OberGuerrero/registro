const express = require('express');
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.post('/registro', (req, res) => {
  let { cli_nombre, cli_apellido, cli_correo, cli_RUT, cli_peticion, cli_desc_peticion } = req.body;
  const query = 'INSERT INTO clientes SET ?';
  connection.query(query, { cli_nombre, cli_apellido, cli_correo, cli_RUT, cli_peticion, cli_desc_peticion }, (error, results) => {
    if(error) throw error;
    res.status(201).send({id: results.insertId, ...req.body});
  });
});


const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
