const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express(express.json());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Server is up and running!');
});

app.get('/api', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URI).then(() => { 
        console.log('Connected to MongoDB');
        if (connection) {
            res.send('API is working');
        } else {
            res.send('API is not working');
        }
    });
})

app.post('/api/c', async (req, res) => {
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

