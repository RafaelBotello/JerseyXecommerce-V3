const router = require("express").Router();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  port: port,
  user: "root",
  password: process.env.MYPASSWORD,
  database: "db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id" + connection.threadId);
});

//fetch all contacts
router.get("/contacts", (req, res) => {
  connection.query("SELECT * FROM contacts", function(err, data) {
    res.json(data);
  });
});

module.exports = router;

/////////////////////////////////////////////////////////////////////////////////////

import React from 'react';
import ProductFilter from './ProductFilter';

class example extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            productsList: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/products') //./data/products.json
            .then((res) => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        productsList: data
                    });
                })
            .catch(error => {
                this.setState({
                    isLoaded: true,
                    error
                })
            });
        }
        
    render() {
        const { error, productsList } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        return (
                <ProductFilter products={productsList} />
        );
    }
}

export default example;

/////////////////////////////////////////////////////////////////////////////////////

import React from 'react';

class Product extends React.Component {
    render() {
        const product = this.props.product;
        return (
            <div key="product.name" className="col-md-4 product-column">
                <img className="img-fluid" src={product.image} alt={product.name} />
                <p className="text-left">
                    <span className="product-title">{product.product_name}</span>
                    <span className="product-price">${product.pri}</span>
                    <span className="d-block item-description">{product.product_category}</span>
                </p>
            </div>
        )
    }
}

export default Product;
/////////////////////////////////////////////////////////////////////////////////////
require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
const cors = require('cors')

const productsAPI = require("./routes/productsAPI")
const contactsAPI = require('./routes/contactsAPI')
const products_idAPI = require('./routes/product_idAPI')


app.use(cors())
app.use("/api", productsAPI)
app.use('/api', contactsAPI)
app.use('/api', products_idAPI)



app.listen(PORT, function() {
    console.log(`Server listening on port ${PORT}`)
})

/////////////////////////////////////////////////////////////////////////////////////

const express = require ("express");
const app = express();
const cors = require ("cors");
const port = 4000

const productsAPI = require("./routes/productsAPI");
const contactsAPI = require("./routes/contactAPI");
const product_idAPI = require("./routes/product_idAPI")

app.use(cors("*"))

app.use("/api", productsAPI)
app.use("/api", contactsAPI)
app.use("/api", product_idAPI)


app.listen(port, () =>{
    console.log(`products server listening on port ${port}`)
})