const util = require("util");
const { connection } = require("../../../db/Connection");
class SharedIssuesService{
    static async getAllIssues(associationId) {
        const query = util.promisify(connection.query).bind(connection);
        const queryCode =`
        SELECT * FROM requestPlayerInfo where associationId=?;
        SELECT * FROM requestMedal where associationId=? `
        return await query(queryCode, [associationId,associationId]);
    };
}
module.exports = SharedIssuesService;