

const mysql = require('mysql')


const connection = mysql.createConnection({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root1234',
    database: 'tutorials',
    charset: 'utf8mb4',
    acquireTimeout: 3000,
    multipleStatements: true,
})


connection.escape_check_null = (data) => {
  if (data !== undefined) {
      return connection.escape(data)
  } else {
      return connection.escape('')
  }
}

connection.connect()


module.exports = connection