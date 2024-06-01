const util = require("util");
const { connection } = require("../../../db/Connection");
class AddMedalIssuesService {
    static async checkIfHeWinInThisChampionship(playerId,associationID,year,championshipId) {
        const query = util.promisify(connection.query).bind(connection);
        return await query("select * from medals where associationId =? and year =? and playerId =? and championshipID = ?",[associationID,year,playerId,Number(championshipId)]);
    };
    static async asyncgetSingleAddMedelIssue(){
        const query = util.promisify(connection.query).bind(connection);
        return await query("select * from medals where associationId =? and year =? and playerId =? and championshipID = ?",[associationID,year,playerId,Number(championshipId)]);
    };
}
module.exports = AddMedalIssuesService;