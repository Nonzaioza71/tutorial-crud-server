const products_model = require('../Models/ProductsModel')

module.exports = (app) => {
    app.post('/products/getProductsBy', async (req, res)=>{
        const result = await products_model.getProductsBy()
        res.send(result)
    })
    app.post('/products/getProductByCode', async (req, res)=>{
        const result = await products_model.getProductByCode(req.body)
        res.send(result)
    })

    app.post('/products/insertProductByCode', async (req, res)=>{
        const result = await products_model.insertProductByCode(req.body)
        res.send(result)
    })

    app.post('/products/updateProductByCode', async (req, res)=>{
        const result = await products_model.updateProductByCode(req.body)
        res.send(result)
    })

    app.post('/products/deleteProductByCode', async (req, res)=>{
        const result = await products_model.deleteProductByCode(req.body)
        res.send(result)
    })
}