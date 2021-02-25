const express = require('express')
const router = express.Router()
const User = require('../models/user')
const RobotMaster = require('../models/robotmasters')
const Stages = require('../models/stages')
const PlayedMatch = require('../models/playedmatch')
const Match = require('../models/matches')


const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const db = "mongodb+srv://Faris:Luigipoop1437yes@gamestatistics.j134f.mongodb.net/MM8BitDM?retryWrites=true&w=majority"




function getNextSequenceValue(sequenceName){
    var sequenceDocument = db.counters.findAndModify({
       query:{_id: sequenceName },
       update: {$inc:{sequence_value:1}},
       new:true
    });
    return sequenceDocument.sequence_value;
 }


router.post('/submitmatch',(req,res)=>{
    let matchData = req.body

    let match = new Match(matchData['match'])
    let players = matchData['players']

    match.save((error,match)=>{
        if(error){
            console.log(error)
        }
        else{
            res.status(200).send(match)
        }
    })



    for (let player in players) {
        if(players[player]!={}){
            let playedmatch = new PlayedMatch(players[player])
            playedmatch.save((error,player)=>{
                if(error){
                    console.log(error)
                }
                else{
                    res.status(200).send(player)
                }
            })
          }
        }
})





mongoose.connect(db, err=>{
    if (err){
        console.error('Error')
    }
    else{
        console.log('Connected to mongodb')
    }
})

function verifyToken(req,res,next){
    if(!req.headers.authorization){
        return res.status(401).send("Unauthorized request")
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token == 'null'){
        return res.status(401).send("Unauthorized request")
    }
    let payload = jwt.verify(token,'secretKey')
    if(!payload){
        return res.status(401).send('Unauthorized request')
    }
    req.userId = payload.subject
    next()
}


router.get('/',(req,res)=>{
    res.send('From API route')
})

router.post('/register',(req,res)=>{
    let userData = req.body
    let user = new User(userData)
    user.save((error,registeredUser)=>{
        if(error){
            console.log(error)
        }else{
            let payload = {subject: registeredUser._id}
            let token = jwt.sign(payload,'secretKey')

            res.status(200).send({token})
        }
    })
})

router.post('/login',(req,res)=>{
    let userData = req.body
    User.findOne({email: userData.email},(error,user)=>{
        if(error){console.log(error)}
        else{
            if(!user){
            res.status(401).send('Invalid Email')
            }
            else{
                if(user.password!==userData.password){
                    res.status(401).send('Invalid password')
                }
                else{
                    let payload = {subject:user._id}
                    let token = jwt.sign(payload,'secretKey')
                    res.status(200).send({token})
                }
            }
    }
    })
})


router.get('/events',(req,res)=>{
    let events = [
        {
            "_id":"1",
            "name":"poopy1",
            "description":"you like to poop?",
            "date":"lmao!"
        },
        {
            "_id":"2",
            "name":"poopy2",
            "description":"aaa?",
            "date":"lmao!"
        }
    ]
    res.send(RobotMaster)
})


router.get('/robotmasters',async(req,res)=>{

    try{
        const robotmasters = await RobotMaster.find()
        res.json(robotmasters)
    }catch(err){
        res.send('poop!')
    }
})

router.get('/stages',async(req,res)=>{

    try{
        const stages = await Stages.find()
        res.json(stages)
    }catch(err){
        res.send('poop!')
    }
})


module.exports = router 