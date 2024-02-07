const util = require("util");
const { connection } = require("../../db/Connection.js");
class mangeAssociation {
  static async getAssociationName(associationName) {
    const query = util.promisify(connection.query).bind(connection);
    return await query("SELECT * FROM association WHERE associationName = ?", [associationName]);
  };
}
module.exports =mangeAssociation;
