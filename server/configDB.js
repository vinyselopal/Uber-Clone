const { MongoClient } = require('mongodb')

const db = 'uberClone'
const uri = `mongodb://localhost:27017/${db}`
const client = new MongoClient(uri)

const myDB = client.db('uberClone')
const rides = myDB.collection('rides')
const drivers = myDB.collection('drivers')

async function connect() {
  try {
    await client.connect()
    await client.db('admin').command({ ping: 1 })
    console.log('Connected successfully to server')
  } catch (err) {
    console.dir(err)
  }
}

module.exports = { connect, client, myDB, rides, drivers }
