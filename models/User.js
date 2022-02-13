const mongoose = require('mongoose');

const GeoSchema = new mongoose.Schema({
    lat: {
        type: Number,
        required: true
    },
    lng: {
        type: Number,
        required: true
    }
}) 

const AddressSchema = new mongoose.Schema({
    street : {
        type: String, 
        required: true
    }, 
    suite: {
        type: String, 
        required: true
    }, 
    city: {
        type: String, 
        required: true,
        match: [/^[a-zA-Z ]*$/, "Enter only alphabetical and space"]
    },
    zipcode: {
        type: String, 
        required: true,
        match: [/[0-9]{5}-[0-9]{4}$/, "Use correct Syntax of DDDDD-DDDD"]
    },
    geo: GeoSchema
}) 

const CompanySchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    }, 
    catchPhrase: {
        type: String, 
        required: true
    },
    bs: {
        type: String, 
        required: true
    }
}) 

const UserSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        trim: true,
        lowercase: true
    },
    username: {
        type: String, 
        required: true,
        minlength: 4
    },
    email: {
        type: String, 
        required: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    address: {
        type: AddressSchema, 
        required: true
    },
    phone: {
        type: String, 
        required: true,
        match: [/[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/, "Use correct Syntax of D-DDD-DDD-DDDD"]
    },
    website: {
        type: String, 
        required: true,
        match: [/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi, "Enter a correct URL"]
    },
    company: {
        type: CompanySchema, 
        required: true
    },
}) 


const User = mongoose.model("User", UserSchema);
module.exports = User;