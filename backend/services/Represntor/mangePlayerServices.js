const util = require("util");
const { connection } = require("../../db/Connection.js");
class mangeplayer {
    static async addPlayer(data) {
        const query = util.promisify(connection.query).bind(connection);
        return await query("INSERT INTO players SET?", [data]);
    };
    static async getallPlayers(associationId) {
        const query = util.promisify(connection.query).bind(connection);
        return await query("select * from players inner join association on association.associationID=players.associationId where players.associationId =? ", [associationId]);
    };
    static async getSinglePlayer(id, associationId) {
        const query = util.promisify(connection.query).bind(connection);
        return await query("select * from players inner join association on association.associationID=players.associationId where players.associationId =? and players.id =?", [associationId, id]);
    };
    static async getPlayerDetails(id, associationId) {
        const query = util.promisify(connection.query).bind(connection);
        const queryString = `
            SELECT 
                players.id AS playerId,
                players.name,
                players.birthOfDate,
                players.gender,
                players.height,
                players.img,
                players.club,
                association.associationName,
                medals.MedalAchievementDate,
                medals.typeOfMedal,
                medals.year,
                championship.name,
                championship.weight,
                championship.age,
                championship.gender,
                championship.isYoungs,
                championship.typeOfChampionship 
            FROM 
                players 
            INNER JOIN 
                association ON association.associationID = players.associationId 
            INNER JOIN 
                medals ON medals.playerId = players.id 
            INNER JOIN 
                championship ON medals.championshipID = championship.id 
            WHERE 
                players.associationId = ? 
                AND 
                players.id = ?
        `;

        return await query(queryString, [associationId, id]);

    };
    static async editPlayer(data, id, associationId) {
        const query = util.promisify(connection.query).bind(connection);
        return await query("UPDATE players SET ? where id = ? and associationId =?", [data, id, associationId]);
    };
    static async deletePlayer(id, associationId) {
        const query = util.promisify(connection.query).bind(connection);
        return await query("delete from players where id =? and associationId =?", [id, associationId]);
    };
}
module.exports = mangeplayer;