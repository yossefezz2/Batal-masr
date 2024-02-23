
require("../db/Connection")
const path =require("path")
const express =require("express")
const app =express()
const cors =require("cors")
var bodyParser = require('body-parser')
const sharedRoutes = require('../routes/sharedRoutes')
const mangeAgentsOfMinistryRoutes = require('../routes/admin/mangeAgentsOfMinistryRoutes')
const mangeRepresentorOfAssociation = require('../routes/admin/mangeRepresentorOfAssociationRouts')
const mangeAssociationRoutes = require('../routes/admin/mangeAssociationRouts')
const mangePlayerRoutes = require('../routes/Represntor/mangePlayerRouts')


app.use(express.static(path.join(__dirname,"../public")))
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())

// admin routes 
app.use("/",sharedRoutes)
app.use("/admin/agent",mangeAgentsOfMinistryRoutes)
app.use("/admin/representor",mangeRepresentorOfAssociation)
app.use("/admin/association",mangeAssociationRoutes)

// representor routes
app.use("/representor/player",mangePlayerRoutes)


app.all('*',(req,res)=>{
    res.send({
        massage:"not found"
    })
})

module.exports =app