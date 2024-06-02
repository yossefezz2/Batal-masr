const util = require("util");
const { connection } = require("../../../db/Connection");
class SharedIssuesService{
    static async getAllIssues(associationId) {
        const query = util.promisify(connection.query).bind(connection);
        const queryCode =`
        SELECT * FROM requestPlayerInfo where associationId=? and Status=?;
        SELECT * FROM requestMedal where associationId=? and Status=?;`
        return await query(queryCode, [associationId,"inProcess",associationId,"inProcess"]);
    };
}
module.exports = SharedIssuesService;