/*
Zenvia - API para mensagens
*/

const totalvoice = require('totalvoice-node');
const client = new totalvoice("84f1d2eb31f60dd2733d18c15ee151d8");

var resposta_usuario = false;
var multi_sms = false;
var data_criacao = '';

client.sms.enviar("49999954487", "Até logo, até mais ver, bon voyage, arrivederci.", resposta_usuario, multi_sms, data_criacao)
    .then(function (data) {
        console.log(data)
    })
    .catch(function (error) {
        console.error('Erro: ', error)
    });