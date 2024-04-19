
const mangePlayerServices = require("../../../services/Represntor/mangePlayerServices.js")
const sharedService = require("../../../services/shared.js");
const helpers = require('../../helper.js');
const uploadHandler = require('../../middelware/upload.middleware.js')
const fs = require('fs');
class mangePlayer {
    static async addPlayer(req, res) {
        try {
            const { nanoid } = await import('nanoid');
            const nId1 = nanoid(10);
            console.log(req.file);
            let f = uploadHandler.filehendeler(req.file)
            let data = {
                id: nId1,
                name: req.body.name,
                birthOfDate: req.body.birthOfDate,
                gender: req.body.gender,
                height: req.body.height,
                weight: req.body.weight,
                associationId: req.user.association,
                club: req.body.club,
                img: "http://localhost:3000/" + f.replace(`public\\`, "")
            };
            await mangePlayerServices.addPlayer(data);
            helpers.resGenerator(res, 200, true, data, "add player")
        }
        catch (error) {
            helpers.resGenerator(res, 500, false, error.message, "can't add player")
        }
    }
    static async getallPlayers(req, res) {
        try {
            const data = await mangePlayerServices.getallPlayers(req.user.association);
            if (data.length <= 0) {
                throw new Error("not player found");
            }
            helpers.resGenerator(res, 200, true, data, "all players")
        }
        catch (error) {
            if (error.message == "not player found") {
                helpers.resGenerator(res, 404, false, error.message, "not players found")
            } else {
                helpers.resGenerator(res, 500, false, error.message, "can't get all players")
            }

        }
    }
    static async getSinglePlayer(req, res) {
        try {
            const data = await mangePlayerServices.getSinglePlayer(req.params.id, req.user.association);
            if (data.length <= 0) {
                throw new Error("not users found");
            }
            helpers.resGenerator(res, 200, true, data, "singer players")
        }
        catch (error) {
            if (error.message == "not users found") {
                helpers.resGenerator(res, 404, false, error.message, "can't get single player")
            } else {
                helpers.resGenerator(res, 500, false, error.message, "can't get single player")
            }
        }
    }
    static async editPlayer(req, res) {
        try {
            const singlePlayer = await mangePlayerServices.getSinglePlayer(req.params.id, req.user.association);
            if (singlePlayer.length <= 0) {
                throw new Error("not users found");
            }
            if (singlePlayer[0].gender != req.body.gender){
                await mangePlayerServices.deletePlayerMedal(req.params.id, req.user.association)
            }
            let imgEdit = singlePlayer[0].img
            if (req.file) {
                let img = singlePlayer[0].img.replace(`http://localhost:3000/`, "")
                fs.unlinkSync("./public/" + img);
                let f = uploadHandler.filehendeler(req.file)
                let img2 = "http://localhost:3000/" + f.replace(`public\\`, "")
                imgEdit = img2;
            }
            let data = {
                name: req.body.name,
                birthOfDate: req.body.birthOfDate,
                gender: req.body.gender,
                height: req.body.height,
                weight: req.body.weight,
                associationId: req.user.association,
                club: req.body.club,
                img: imgEdit
            };
            await mangePlayerServices.editPlayer(data, req.params.id,req.user.association);
            helpers.resGenerator(res, 200, true, data, "edit player")
        }
        catch (error) {
            if (error.message === "not users found") {
                helpers.resGenerator(res, 400, false, error.message, "player can't be edited");
            } else {
                helpers.resGenerator(res, 500, false, error.message, "player can't be edited");
            }
        }
    }
    static async deletePlayer(req, res) {
        try {
            const singlePlayer = await mangePlayerServices.getSinglePlayer(req.params.id, req.user.association);
            if (singlePlayer.length <= 0) {
                throw new Error("not users found");
            }
            await mangePlayerServices.deletePlayer(req.params.id, req.user.association);
            let img = singlePlayer[0].img.replace(`http://localhost:3000/`, "")
            fs.unlinkSync("./public/" + img);
            helpers.resGenerator(res, 200, true, singlePlayer, "delete player")
        }
        catch (error) {
            helpers.resGenerator(res, 400, false, error.message, "player can't be deleted")
        }
    }
    static async getPlayerDetails(req, res){
        let singlePlayer
        try {
            singlePlayer = await mangePlayerServices.getSinglePlayer(req.params.id, req.user.association);
            if (singlePlayer.length <= 0) {
                throw new Error("not users found");
            }
            const data = await mangePlayerServices.getPlayerDetails(req.params.id, req.user.association);
            if (data.length <= 0)  {
                throw new Error("not found");
            }
            helpers.resGenerator(res,200, true, data, "singer agent")
        }
        catch (error) {
            if (error.message === "not found") {
                helpers.resGenerator(res, 200, false, singlePlayer, "not found Details");
            } else {
                helpers.resGenerator(res, 500, false, error.message, "player can't be Details");
            }
        }
    }
}
module.exports = mangePlayer;