const {sequelize, Books, Categories, Stocks} = require('../db/models')

const createBook = async (req, res, next) => {    
    try {
        const {category_id, stock, ...createBook} = req.body
        const isCategoryExist = await Categories.findOne({
            where: {
                id: category_id
            },
            attributes: ['id']
        })

        if (!isCategoryExist) {
            throw {
                code: 404,
                message: 'category not found'
            }
        }

        await sequelize.transaction(async trx => {
            const book = await Books.create({...createBook, category_id}, {transaction: trx})

            await Stocks.create({
                book_id: book.id,
                available_stock: stock,
                total_stock: stock,
                rent_stock: 0,
                broken_stock: 0
            }, {
                transaction: trx
            })
        })

        return res.status(201).json({
            message: 'success create book'
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createBook
}