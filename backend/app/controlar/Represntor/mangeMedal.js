const mangeMedalServices = require("../../../services/Represntor/mangeMedalServices.js")
const helpers = require('../../helper.js');
class mangeMedal {
    static async addMedal(req, res) {
        let Medal
        try{
            Medal = await mangeMedalServices.checkIfHeWinInThisChampionship(req.body.playerId,req.user.association,req.body.year,Number(req.body.championshipID));
            if (Medal.length > 0) {
                throw new Error("medal already registered");
            }
            const { nanoid } = await import('nanoid');
            const nId1 = nanoid(10);
            let data = {
                id: nId1,
                MedalAchievementDate: req.body.MedalAchievementDate,
                typeOfMedal : req.body.typeOfMedal,
                playerId: req.body.playerId,
                championshipID: Number(req.body.championshipID),
                year: req.body.year,
                isWin:(req.body.isWin == "true" || req.body.isWin == "1") ? "yes" : req.body.playerId,
                associationId:req.user.association
            };
            await mangeMedalServices.addMedal(data);
            helpers.resGenerator(res, 200, true, data, "add medal")
        }
        catch (error) {
            if (error.message =="medal already registered") {
                // const Medal = await mangeMedalServices.checkIfHeWinInThisChampionship(req.body.playerId,req.user.association);
                helpers.resGenerator(res, 400, false, Medal,error.message)
            } else {
                helpers.resGenerator(res, 500, false, error.message, "can't add medal")
            }
        }
    }
    static async getallMedal(req, res) {
        try {
            const data = await mangeMedalServices.getallMedal(req.user.association);
            if (data.length <= 0) {
                throw new Error("not medal found");
            }
            helpers.resGenerator(res, 200, true, data, "all medal")
        }
        catch (error) {
            if (error.message == "not medal found") {
                helpers.resGenerator(res, 404, false, error.message, "not medal found")
            } else {
                helpers.resGenerator(res, 500, false, error.message, "can't get all medal")
            }

        }
    }
    static async getSingleMedal(req, res) {
        try {
            const data = await mangeMedalServices.getSingleMedal(req.params.id, req.user.association);
            if (data.length <= 0) {
                throw new Error("not medal found");
            }
            helpers.resGenerator(res, 200, true, data, "singer medal")
        }
        catch (error) {
            if (error.message == "not medal found") {
                helpers.resGenerator(res, 404, false, error.message, "can't get single medal")
            } else {
                helpers.resGenerator(res, 500, false, error.message, "can't get single medal")
            }
        }
    }
    static async editMedal(req, res) {
        try {
            const singlePlayer = await mangeMedalServices.getSingleMedal(req.params.id, req.user.association);
            if (singlePlayer.length <= 0) {
                throw new Error("not users found");
            }
            let data = {
                MedalAchievementDate: req.body.MedalAchievementDate,
                typeOfMedal : req.body.typeOfMedal,
                championshipID: req.body.championshipID,
                year: req.body.year,
                isWin:(req.body.isWin == "true" || req.body.isWin == "1") ? "yes" : req.body.playerId,
            };
            await mangeMedalServices.editMedal(data, req.params.id,req.user.association);
            helpers.resGenerator(res, 200, true, data, "edit medal")
        }
        catch (error) {
            if (error.message === "not users found") {
                helpers.resGenerator(res, 400, false, error.message, "medal can't be edited");
            } else {
                helpers.resGenerator(res, 500, false, error.message, "medal can't be edited");
            }
        }
    }
    static async deleteMedal(req, res) {
        try {
            const singlePlayer = await mangeMedalServices.getSingleMedal(req.params.id, req.user.association);
            if (singlePlayer.length <= 0) {
                throw new Error("not championship found");
            }
            await mangeMedalServices.deleteMedal(req.params.id, req.user.association);
            helpers.resGenerator(res, 200, true, singlePlayer, "delete medal ")
        }
        catch (error) {
            helpers.resGenerator(res, 400, false, error.message, "player can't be medal")
        }
    }
}
module.exports = mangeMedal;