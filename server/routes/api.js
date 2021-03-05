const express = require('express')
const router = express.Router()
const User = require('../models/user')
const RobotMaster = require('../models/robotmasters')
const Stages = require('../models/stages')
const PlayedMatch = require('../models/playedmatch')
const Match = require('../models/matches')
const Counters = require('../models/counters')

const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const db = "mongodb+srv://Faris:Luigipoop1437yes@gamestatistics.j134f.mongodb.net/MM8BitDM?retryWrites=true&w=majority"


mongoose.set('useFindAndModify', false);

value = 0 

function getCurrentSequenceValue(){
    const filter = {name:"matchid"}
    const update = {$inc:{sequence_value:1}}
    try{
        Counters.findOne(filter,function(err,obj){
            value = obj.sequence_value
            return value});
    }catch(err){
        res.send('poop!')
    }
}
function getNextSequenceValue(){
    const filter = {name:"matchid"}
    const update = {$inc:{sequence_value:1}}
    try{
        Counters.findOneAndUpdate(filter,update,function(err,obj){
            value = obj.sequence_value
            return value});
    }catch(err){
        res.send('poop!')
    }
 }







router.post('/submitmatch',(req,res)=>{
    let matchData = req.body
    let match = new Match(matchData['match'])
    let players = matchData['players']




    if (players['player1']==undefined){
        res.send("Player1 does not exist.")
        return
    }
    if(match['stage']==undefined){
        res.send("No stage selected.")
        return
    }
    if(match['gametitle']==undefined){
        res.send("No title for gamemode!")
        return
    }
    if(match['gamemode']==undefined){
        res.send("No gamemode set.")
        return
    }






    getNextSequenceValue()
    id = value

    match['matchid'] = id
    match.save((error,match)=>{
        if(error){
            console.log(error)
        }
    })

    for (let player in players) {
        if(players[player]["name"]!=undefined){

            if(match['gamemode']=="Duels" || match['gamemode'] == "TLMS"){
                if(players[player]['wins']==undefined || players[player]['loss']==undefined ){continue}
              }
          
            if(match['gamemode']=="DM" || match['gamemode'] == "TDM"){
                if(players[player]['frags']==undefined || players[player]['placement']==undefined ){continue}
            }



            let playedmatch = new PlayedMatch(players[player])
            playedmatch["matchid"] = id
            playedmatch.save((error,player)=>{
                if(error){
                    console.log(error)
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
        getCurrentSequenceValue()
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



router.get('/matches',async(req,res)=>{

    try{
        const matches = await Match.find()
        res.json(matches)
    }catch(err){
        res.send('poop!')
    }
})

router.get('/matches/:matchid',async(req,res)=>{
    let matchid = req.params.matchid
    const filter = {matchid:matchid}
    try{
        const match = await Match.findOne(filter)
        res.json(match)

    }catch(err){
        res.send('poop!')
    }
})

router.get('/stages/:stage',async(req,res)=>{
    let stage = req.params.stage
    const filter = {name:stage}
    try{
        const stage = await Stages.findOne(filter)
        res.json(stage)

    }catch(err){
        res.send('poop!')
    }
})

router.get('/playedmatch/:matchid',async(req,res)=>{
    let matchid = req.params.matchid
    const filter = {matchid:matchid}
    try{
        const playedmatch = await PlayedMatch.find(filter)
        res.json(playedmatch)

    }catch(err){
        res.send('poop!')
    }
})

router.get('/recentmatches/:playername',async(req,res)=>{})
router.get('/players/:playername/playedwith',async(req,res)=>{})
router.get('/players/:playername/heroesplayed',async(req,res)=>{})










module.exports = router 