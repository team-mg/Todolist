import express from 'express'
import bodyParser from 'body-parser'
import mongodb from 'mongodb'
import assert from 'assert'

const app = express()
const PORT = 3001
const MongoClient = mongodb.MongoClient

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const url = 'mongodb+srv://team-mg:mg-team@cluster0-bftuh.mongodb.net/test?retryWrites=true'
const dbName = 'fwr-todolist'

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    assert.equal(null, err)
    console.log('Connected successfully to mongodb server')

    const db = client.db(dbName)
    const collection = db.collection('todolist')

    // Read
    app.get('/api', (req, res) => {
        collection.find({}).toArray((err, result) => {
            assert.equal(null, err)
            // console.log(result)
            res.json(result)
        })
    })

    // Create
    app.post('/api', (req, res) => {
        const { text } = req.body
        const insert = {
            text
        }

        collection.insertOne(insert, (err, result) => {
            assert.equal(null, err)
            // console.log(result)
            // console.log(result.ops[0])
            res.json(result.ops[0])
        })
    })

    // Delete
    app.delete('/api', (req, res) => {
        const { _id } = req.body
        const find = {
            _id: new mongodb.ObjectId(_id)
        }

        collection.findOneAndDelete(find, (err, result) => {
            assert.equal(null, err)
            assert.equal(1, result.ok)
            // console.log(result.ok)
            res.json()
        })
    })

    // Update
    app.put('/api', (req, res) => {
        const { _id, text } = req.body
        const find = {
            _id: new mongodb.ObjectId(_id)
        }
        const update = {
            $set: { text }
        }
        const updateOptions = {
            returnOriginal: false
        }

        collection.findOneAndUpdate(find, update, updateOptions, (err, result) => {
            assert.equal(null, err)
            console.log(result)
            console.log(result.value)
            res.json(result.value)
        })
    })
})

app.listen(PORT, () => {
    console.log(`Express server is running at http://localhost:${PORT}`)
})