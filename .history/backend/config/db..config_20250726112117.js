const mysql=require('mysql2/promise');
//prepare connection parametere we use to connect to the database
const dbconfig={
    connectionLimit:10,
    socketPath:process.env.DB_SOCKET_PATH,

}