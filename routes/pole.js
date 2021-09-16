const express = require('express')
const mysql = require('../config/db')
const router = express.Router()

router.get('/', (req, res) => {
  //