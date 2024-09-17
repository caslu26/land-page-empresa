const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const path = require('path');
const saltRounds = 10;

const app = express();
const port = 8005;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurações de conexão MySQL
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'usuario',
    port: 3306
});

// conectando com banco 

db.connect((err) => {
    if (err) {
        console.log("Erro ao conectar ao banco de dados",err);
    }else {
        console.log("Conectado ao banco de dados com sucesso");
    }
});

//Rota para o envio do formulario

app.post('/cadastro', (req,res) => {
    const {primeiro_nome, ultimo_nome, email, telefone} = req.body;

    //validação dos dados
    if(!primeiro_nome || !ultimo_nome || !email || !telefone) {
        return res.status(400).send('Todos os campos são obrigatorios')
    }

    //Inserindo dados no banco de dados

    const query = `INSERT INTO orcamento (primeiro_nome, ultimo_nome, email, telefone) VALUES (?, ?, ?, ?)`;
    db.query(query, [primeiro_nome, ultimo_nome, email, telefone], (err,result) => {
        if(err){
            console.error('Erro ao inserir os dados no banco');
            return res.status(500).send('Erro ao inserir os dados no banco');
        }
        res.status(200).send('dados enviado com sucesso')
    });
});

// Endpoint para verificar o status do servidor
app.get("/", (req, res) => {
    res.send(`Servidor rodando em http://localhost:${port}`);
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
