const connection = require('./database')
const generateMaxCode = require('../Controllers/generateMaxCode')

const Task = function (task) {
    this.task = task.task
    this.status = task.status
    this.created_at = new Date()
}

Task.getProductsBy = function getProductsBy() {
    return new Promise(function (resolve) {
        var sql = `SELECT * FROM emp_tutorials.tb_products`
        connection.query(sql, function (err, res) {
            if (err) {
                resolve({ data: '', require: false, err: err })
            } else {
                resolve({ data: res, require: true })
            }
        })
    })
}

Task.getProductByCode = function getProductByCode(data) {
    return new Promise(function (resolve) {
        var sql = `SELECT * FROM emp_tutorials.tb_products WHERE product_no = ${connection.escape(data.product_no)}`
        console.log(sql);
        connection.query(sql, function (err, res) {
            if (err) {
                resolve({ data: '', require: false, err: err })
            } else {
                resolve({ data: res[0], require: true })
            }
        })
    })
}

Task.insertProductByCode = function insertProductByCode(data) {
    return new Promise(function (resolve) {
        const maxCode = generateMaxCode("P", connection.escape(data.product_name))
        var sql = `
            INSERT INTO emp_tutorials.tb_products (
                product_code, 
                product_no, 
                product_name, 
                product_detail, 
                product_price, 
                product_image
            ) VALUES (
                ${connection.escape(maxCode)}, 
                ${connection.escape(data.product_no)}, 
                ${connection.escape(data.product_name)}, 
                ${connection.escape(data.product_detail)}, 
                ${connection.escape(data.product_price)}, 
                ${connection.escape(data.product_image)}
            )
        `
        connection.query(sql, function (err, res) {
            if (err) {
                resolve({ data: [], require: false, err: err })
            } else {
                resolve({ data: res, require: true })
            }
        })
    })
}

Task.updateProductByCode = function updateProductByCode(data) {
    return new Promise(function (resolve) {
        var sql = `
            UPDATE emp_tutorials.tb_products SET
                product_no = ${connection.escape(data.product_no)},
                product_name = ${connection.escape(data.product_name)}, 
                product_detail = ${connection.escape(data.product_detail)}, 
                product_price = ${connection.escape(data.product_price)}, 
                product_image = ${connection.escape(data.product_image)}
            WHERE product_code = ${connection.escape(data.product_code)}
        `
        connection.query(sql, function (err, res) {
            if (err) {
                resolve({ data: [], require: false, err: err })
            } else {
                resolve({ data: res, require: true })
            }
        })
    })
}

Task.deleteProductByCode = function deleteProductByCode(data) {
    return new Promise(function (resolve) {
        var sql = `
            DELETE FROM emp_tutorials.tb_products
            WHERE product_code = ${connection.escape(data.product_code)}
        `
        connection.query(sql, function (err, res) {
            if (err) {
                resolve({ data: [], require: false, err: err })
            } else {
                resolve({ data: res, require: true })
            }
        })
    })
}

module.exports = Task