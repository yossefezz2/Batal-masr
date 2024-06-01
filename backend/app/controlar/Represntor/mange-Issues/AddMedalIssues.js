const helpers = require("../../../helper");
const AddMedalIssuesService = require("../../../../services/Represntor/mange-IssuesServices/AddMedalIssuesServices");
class AddMedalIssues{
    static async getSingleAddMedelIssue(req, res){
        let Medal
        try {
            const data = await AddMedalIssuesService.getSingleAddMedelIssue(req.user.association);
            if (data.length <= 0) {
                throw new Error("not issue found");
            }
            console.log(data);
            // Medal = await AddMedalIssuesService.checkIfNotAnyoneWinThisMadel(req.user.association, req.body.year, Number(req.body.championshipID),req.body.typeOfMedal);
            // if (Medal.length > 0) {
            //     throw new Error("medal already registered");
            // }
            helpers.resGenerator(res, 200, true, data, "all issues")
        }
        catch (error) {
            if (error.message == "not issue found") {
                helpers.resGenerator(res, 404, false, error.message, "not issues found")
            } else {
                helpers.resGenerator(res, 500, false, error.message, "can't get all issues")
            }
        }
    }
}
module.exports = AddMedalIssues