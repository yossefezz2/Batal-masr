
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
// const nanoid = require('nanoid');
// const nId1 = nanoid(10);
// console.log(nId1);


app.use(express.static(path.join(__dirname,"../public")))
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())

app.use("/",sharedRoutes)
app.use("/admin/agent",mangeAgentsOfMinistryRoutes)
app.use("/admin/representor",mangeRepresentorOfAssociation)
app.use("/admin/association",mangeAssociationRoutes)
app.all('*',(req,res)=>{
    res.send({
        massage:"not found"
    })
})

module.exports =app