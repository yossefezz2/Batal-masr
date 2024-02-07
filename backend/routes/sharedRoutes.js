var express = require('express');
// const {userMiddleware,isAdmin} = require("../../app/middelware/auth.middelware")
const shared = require('../app/controlar/shared.js')
const router =express.Router()
router.post("/login", shared.login)
module.exports = router