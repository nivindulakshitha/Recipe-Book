const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express(express.json());
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Server is up and running!');
});
 
app.get('/api', async (req, res) => {
    const connection = await mongoose.createConnection(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    if (connection) {
        res.send('API is working');
    } else { 
        res.send('API is not working');
    }
})
 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 
