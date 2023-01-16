const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email:String,
    companyName:String,
    address:Object


});

const User = mongoose.model("User", UserSchema);


const uri = "mongodb+srv://admin:12345@cluster0.gpoqn.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection;
app.use(bodyParser.json());
app.use(cors());


app.post('/submit', (req, res) => {
    const { firstName, lastName } = req.body
    const user = new User({
        firstName,
        lastName
    })

    user.save().then(resp => console.log(resp))
})


app.listen(3000, () => {
    console.log("running on port 3000")
}
);