const message = require('./../models/Message');
const express = require('express');
const app = express();



exports.messages = async (req,res)=>{
    res.status(200).json({estado:"conectado"})
}
