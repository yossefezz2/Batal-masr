var express = require('express');
const {userMiddleware,isPlayer} = require("../../app/middelware/auth.middelware.js")
const requestPlayer=require('../../app/controlar/player/requestPlayer.js')
const router =express.Router()

router.get('/getPlayerDetails',userMiddleware,isPlayer, requestPlayer.getPlayerDetails)

router.get("/getSingelMadel/:id",userMiddleware,isPlayer, requestPlayer.getSingleMedal )

router.post("/requestToAddMadel",userMiddleware,isPlayer, requestPlayer.requestToAddMadel)

router.post("/reqEdit/:id",userMiddleware,isPlayer, requestPlayer.requestToEditMadel)

router.post("/requestPlayerInfo",userMiddleware,isPlayer, requestPlayer.requestPlayerInfo)



module.exports = router
