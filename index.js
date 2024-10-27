
// Import the Express framework and create an instance of the Express application
// Set the port to the value from environment variable PORT, or default to 3000 if not set
// Import the Mongoose library to interact with MongoDB
// Import the Product model from the 'product.model.js' file

import express from 'express';
const app = express();
const testPort = process.env.PORT || 3000;
import mongoose from 'mongoose';
import Product from './models/product.model.js';
import productRoute from './routes/product.route.js';
import router from './routes/product.route.js';



// Use Express middleware to parse incoming JSON request bodies
// Use Express middleware to parse URL-encoded data from forms (extended: false means no nested objects)

app.use(express.json());
app.use(express.urlencoded({extended: false}));


//routes
// Use the 'productRoute' router for all routes starting with '/api/products'
app.use('/api/products', productRoute);



// Define a GET route for the root URL ('/') that sends a plain text response "Hello from Node API"

app.get('/', (req, res) => {
    res.send("Hello from Node API")
});



// Attempt to connect to the database; if successful, log a connection message and start the server on port 3000; 
// if the connection fails, log an error message

const dbConnect01 = mongoose.connect('mongodb+srv://root:EAw5qhjR0bGuWDoW@backenddb01.lqaio.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB01')
  dbConnect01.then(() => {
    console.log('Connected! to the Database');
app.listen(3000, () => {
    console.log(`Server is running on port ${testPort}`)
});
  })
  .catch(() => {
    console.log('Connection Failed')
  });



// Define a GET route at '/api/products' to retrieve all products from the database, handling errors asynchronously



// Define a GET route at '/api/products/:id' to retrieve a product by its ID, handling errors asynchronously



// Define a POST route at '/api/products' to handle product creation, using async for handling asynchronous code
// Try to create a new product with the data from the request body and send a 200 status with the created product as a JSON response
// Set HTTP status to 500 (Internal Server Error) and send the error message as a JSON response 




// update a porduct based on Id


//to delete a product 
// Define a DELETE route at '/api/product/:id' to delete a product by its ID, handling errors asynchronously









