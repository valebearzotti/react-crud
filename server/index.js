const express = require('express');
const app = express();
const mysql = require('mysql2');
const db = require('./models');

app.listen(3001, ()=> {
    console.log('app running!');
});