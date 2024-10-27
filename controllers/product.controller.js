import Product from "../models/product.model.js";

// Define an asynchronous function to get all products
// Fetch all products from the database
// Send a 200 status with the products as a JSON response
// If an error occurs, send a 500 status with the error message

const getProducts = async (req, res) => {

    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getProduct = async (req, res) => {

    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



// Define an asynchronous function to get a single product by its ID
// Extract the product ID from the request parameters
// Find the product in the database by ID
// Send a 200 status with the product data as a JSON response
// If an error occurs, send a 500 status with the error message

const createProduct = async (req, res) => {

    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


// Define an asynchronous function to update a product by its ID
// Extract the product ID from the request parameters
// Update the product in the database with new data from request body
// Check if the product was found and updated
// If not found, send a 404 status with an error message
// Fetch the updated product details
// Send a 200 status with the updated product data as a JSON response
// If an error occurs, send a 500 status with the error message

const updateProduct = async (req, res) => {

    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct)

    } catch (error) {
        res.status(500).json({message: error.message});
    }
}



// Asynchronously handles product deletion
// Extracts the product ID from the request parameters
// Attempts to find and delete the product by its ID
// Checks if the product was found; if not, sends a 404 error response
// Sends a success response if the product was deleted
// Catches and handles any errors, sending a 500 error response with the error message

const deleteProduct = async (req, res) => {

    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({message: "Product not found"});
        }
        res.status(200).json(`Successfully deleted ${product}`)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export  {getProducts, getProduct, createProduct,updateProduct, deleteProduct};