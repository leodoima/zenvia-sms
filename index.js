/*
Zenvia - API para mensagens
*/

const totalvoice = require('totalvoice-node');
const client = new totalvoice("token");

var resposta_usuario = false;
var multi_sms = false;
var data_criacao = '';

client.sms.enviar("49999999", "Até logo, até mais ver, bon voyage, arrivederci.", resposta_usuario, multi_sms, data_criacao)
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });