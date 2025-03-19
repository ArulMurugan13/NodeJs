const { MongoClient, ServerApiVersion } = require("mongodb");

const URI =
  "mongodb+srv://ArulMurugan:arulmurugan13@namastenodejs.93r9q.mongodb.net/";
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const db =  client.db("ArulNode");
    const collection =  db.collection("user");

    const data = [
      // { fname: "Arivu", lname: "selvan", age: 23, phoneNo: 987654567 },
      { fname: "Arul", lname: "Murugan", age: 24, phoneNo: 987732712 },
    ];

    //inserting a date
    // const insertedData = await collection.insertOne(data);
    // const insertedData = await collection.insertMany(data);
    // console.log("Data-",insertedData);

    //Updating data
    // await collection.updateOne({lname:"Murugan"},{$set:{lname:"Arul"}});
    await collection.updateOne({lname:"Arul"},{$set:{lname:"Murugan"}});

    //Deleting the data

    await collection.deleteOne({lname:"Murugan"});

    // Retrievng the data
    const dbData = await collection.find().toArray();
    console.log("DB Data -",dbData );


    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
