const mysql = require("mysql");

// const db_config = {
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'bus_booking',
//   port: '3306',
// };


function handleDisconnect() {
    connection = mysql.createConnection({
      host: 'bfvmzo0vegcvtagpl21e-mysql.services.clever-cloud.com',
      user: 'uads6v4rtzq4ggvj',
      password: 'GV6o9sY2KKUWdLALhFXX',
      database: 'bfvmzo0vegcvtagpl21e',
      port: '3306',
    });
    connection.connect((err) => {
      if (err) throw err;
      console.log("DB CONNECTED");
    });
  
    connection.on("error", function (err) {
      console.log("db error", err);
      if (err.code === "PROTOCOL_CONNECTION_LOST") {
        handleDisconnect();
      } else {
        throw err;
      }
    });
  }
  
  handleDisconnect();
  module.exports = { connection };