const date = new Date().getTime()

module.exports = (type = "", name = "") =>{
    let _firstChar = type[0].toLowerCase()
    let _secChar = name[0].toLowerCase()
    let newNum = date.toString().substring((date.toString().length - 3), date.toString().length)
    let randomLastNum = (Math.random()*100).toFixed(0)

    return _firstChar+_secChar+newNum+randomLastNum
}