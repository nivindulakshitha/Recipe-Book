const mongoose = require('mongoose');
const Recipe = require('../models/recipe');
require('dotenv').config();

const connect = async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    return connection ? true : false;
}

const createRecipe = async (req, res) => { 
    const connection = await connect();

    if (!connection) { 
        console.log('Connection failed');
        res.status(500).json({message: 'Internal Server Error'});
    }

    const { name, ingredients, instructions, coockingTime } = req.body;
    const recipe = new Recipe({ name, ingredients, instructions, coockingTime });
    recipe.save().then(() => {
        res.status(201).json({message: 'Recipe created successfully'});
    }).catch((err) => {
        console.log(err);
        res.status(500).json({message: 'Internal Server Error'});
    });
}

module.exports = {createRecipe};