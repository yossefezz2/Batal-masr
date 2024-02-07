const sharedService =require("../../services/shared.js");
const helpers = require('../helper.js');
const bcrypt = require("bcrypt");
class shared{
    static async login(req, res) {
        try {
            const findEmail =await sharedService.getEmail(req.body.email)
            if (findEmail[0]) {
                if (await bcrypt.compare(req.body.password, findEmail[0].password)) {
                    await sharedService.genToken(findEmail[0].id)
                    helpers.resGenerator(res, 200, true, findEmail[0], "success")
                } else {
                    throw new Error("Invalid password")
                }
            } else {
                throw new Error("Invalid email")
            }
            

        } catch (error) {
            console.log(error);
            helpers.resGenerator(res, 500, false, error.message, "can't login")
        }
    }

}
module.exports =shared;