const express = require('express');
const userModel = require('../models/User');


const app = express();

app.post('/', async (req, res) => {
    const user = new userModel(req.body)

    try {
        await user.save((err) => {
            if (err) {
                res.status(500).send({error: err.toString()})
            } else {
                res.send(user)
            }
        })
    } catch (err) {
        res.status(500).send({error: err.toString()})
    }
})

module.exports = app