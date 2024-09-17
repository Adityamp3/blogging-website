import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';

//Schemas
import User from './Schema/User.js';

const server = express();
let PORT = 3000;

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

server.use(express.json());

mongoose.connect(process.env.DB_LOCATION, {
    autoIndex: true
});





const generateUsername = async (email)=>{
    let username = email.split("@")[0];

    let usernameExists = await User.exists({ "personal_info.username": username }).then((result) => result)

    usernameExists ? username += nanoid().substring(0, 5): "";

    return username;
}

server.post("/signup", (req, res) => {
    
    let { fullname, email, password } = req. body;

    //validating the data from frontend
    if(fullname.length < 3){
        return res.status(403).json({ "error": "Fullname must be at least 3 letters long" })
    }
    if(!email.length){
        return res.status(403).json({ "error": "Enter Email" });
    }
    if(!emailRegex.test(email)){
        return res.status(403).json({ "error" : "Email is invalid" })
    }
    if(!passwordRegex.test(password)){
        return res.status(403).json({ "error" : "Password must contain at least one number, one uppercase letter, one lowercase letter, and at least 6 characters" })
    }

    bcrypt.hash(password, 10, async (err, hashed_password)=> {

        let username = await generateUsername(email);

        let user = new User({
            personal_info: { fullname, email, password: hashed_password, username }
        })

        user.save().then((u)=>{

            return res.status(200).json({ user: u })
        })
        .catch(err =>{

            if(err.code == 11000){
                return res.status(500).json({ "error": "Email already exists"})
            }

            return res.status(500).json({ "error": err.message })
        })
    })

    // return res.status(200).json({ "status": "okay" })


});

server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});