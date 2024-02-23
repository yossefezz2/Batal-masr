const util = require("util");
const { connection } = require("../../db/Connection.js");
class mangeplayer {
    static async addPlayer(data) {
        const query = util.promisify(connection.query).bind(connection);
        return await query("INSERT INTO players SET?", [data]);
    };
    static async getallPlayers(associationId) {
        const query = util.promisify(connection.query).bind(connection);
        return await query("select * from players inner join association on association.associationID=players.associationId where players.associationId =? ",[associationId] );
    };
    static async getSinglePlayer(id,associationId) {
        const query = util.promisify(connection.query).bind(connection);
        return await query("select * from players inner join association on association.associationID=players.associationId where players.associationId =? and players.id =?",[associationId,id]);
    };
    static async editPlayer(data, id,associationId) {
        const query = util.promisify(connection.query).bind(connection);
        return await query("UPDATE players SET ? where id = ? and associationId =?", [data, id, associationId]);
    };
    static async deletePlayer(id, associationId) {
        const query = util.promisify(connection.query).bind(connection);
        return await query("delete from players where id =? and associationId =?", [id, associationId]);
    };
}
module.exports = mangeplayer;