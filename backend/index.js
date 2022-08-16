const { MongoClient } = require('mongodb');
const express = require('express')
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;


const app = express()
const port = process.env.PORT || 5000;

require("dotenv").config();


// middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.PASS_USER}@cluster0.fjj4l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db('carDealer');
        const productsCollection = database.collection('products');
        const ordersCollection = database.collection('orders');
        const reviewsCollection = database.collection('reviews');
        const usersCollection = database.collection('users');


        // Add Products
        app.post("/addProducts", async (req, res) => {
            const product = req.body;
            const result = await productsCollection.insertOne(product);
            res.json(result);
        })

        // Get All Products
        app.get("/allProducts", async (req, res) => {
            const result = await productsCollection.find({}).toArray()
            res.json(result);
        })

        // Get Single service Details
        app.get("/singleProduct/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const products = await productsCollection.findOne(query);
            res.json(products);
        })

        // Insert a oder 
        app.post("/addOrders", async (req, res) => {
            const product = req.body;
            const result = await ordersCollection.insertOne(product);
            res.json(result);

        });

        // Get my orders

        app.get("/myOrders/:email", async (req, res) => {
            const result = await ordersCollection
                .find({ email: req.params.email })
                .toArray();
            res.send(result);
        });

        // Insert a review
        app.post("/addReview", async (req, res) => {
            const result = await reviewsCollection.insertOne(req.body);
            res.send(result);
        });

        // Get All Reviews
        app.get("/allReviews", async (req, res) => {
            const result = await reviewsCollection.find({}).toArray()
            res.json(result);
        });

        // User Data Collection
        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await usersCollection.insertOne(user);
            res.json(result)
        });

        app.put('/users', async (req, res) => {
            const user = req.body;
            const filter = { email: user.email };
            const options = { upsert: true };
            const updateDoc = { $set: user }
            const result = await usersCollection.updateOne(filter, updateDoc, options);
            res.json(result);
        })

        //  make admin

        app.put("/makeAdmin", async (req, res) => {
            const filter = { email: req.body.email };
            const result = await usersCollection.find(filter).toArray();
            if (result) {
                const documents = await usersCollection.updateOne(filter, {
                    $set: { role: "admin" },
                });
               
            }
        });

        // Check admin or not
        app.get("/checkAdmin/:email", async (req, res) => {
            const result = await usersCollection
                .find({ email: req.params.email })
                .toArray();
            res.send(result);
        });

        /// Get Manage All Orders
        app.get("/allOrders", async (req, res) => {
            const result = await ordersCollection.find({}).toArray();
            res.send(result);
        });



        // status update
        app.put("/statusUpdate/:id", async (req, res) => {
            const filter = { _id: ObjectId(req.params.id) };
            const result = await ordersCollection.updateOne(filter, {
                $set: {
                    status: req.body.status,
                },
            });
            res.send(result);
            
        });

        /// delete order

        app.delete("/deleteOrder/:id", async (req, res) => {
            const result = await ordersCollection.deleteOne({
                _id: ObjectId(req.params.id),
            });
            res.send(result);
        });

        /// delete Products

        app.delete("/deleteProduct/:id", async (req, res) => {
            const result = await productsCollection.deleteOne({
                _id: ObjectId(req.params.id),
            });
            res.send(result);
        });




    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Running Car Dealer-server')
})

app.listen(port, () => {
    console.log(`Example app listening at${port}`)
})