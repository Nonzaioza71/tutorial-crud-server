

const mysql = require('mysql')

// const connection = mysql.createConnection({
//     connectionimit: 100,
//     host: "database-rvscs.cdaloohdepaj.ap-southeast-1.rds.amazonaws.com",
//     user: "admin",
//     password: "eLi5nQla",
//     port: 3306,
//     database: 'revelsoft_erp_mtp',
//     multipleStatements: true,
// })


//----------------- VM Develop --------------------------//

const connection = mysql.createConnection({
    connectionLimit: 10,
    host: 'db4free.net',
    user: 'empdbsv',
    port: 3306,
    password: '25442548',
    database: 'emp_tutorials',
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