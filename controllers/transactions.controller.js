const { Op } = require('sequelize')
const {Books, sequelize, Stocks, Transactions, TransactionItems} = require('../db/models')

const createTransaction = async(req, res, next) => {
    try {
        // cek bukunya ada semua ngga?
        const {books} = req.body

        const bookIds = books.map(book => {
            return book.book_id
        })

        const existBooks = await Books.findAll({
            where: {
                id: {
                    [Op.in]: bookIds
                }
            },
            include: [
                {
                    model: Stocks,
                    as: 'stock'
                }
            ]
        })

        if (existBooks.length !== books.length) {
            throw {
                code: 400,
                message: 'ada buku yang tidak ditemukan'
            }
        }

        await sequelize.transaction(async trx => {
            // create transaction dan 
            const transaction = await Transactions.create({
                user_id: req.user_id,
                transaction_date: new Date(),
                status: 'PINJAM'
            }, {
                transaction: trx
            })

            await Promise.all(
                existBooks.map(async book => {
                    const selectedPayload = books.find(val => val.book_id === book.id)
    
                    // deduct stok buku
                    await Stocks.update({
                        available_stock: book.stock.available_stock - selectedPayload.qty,
                        rent_stock: selectedPayload.qty
                    }, {
                        where: {
                            book_id: book.id
                        },
                        transaction: trx 
                    })
    
                    // create transaction item
                    await TransactionItems.create({
                        book_id: book.id,
                        transaction_id: transaction.id,
                        stock: selectedPayload.qty
                    }, {
                        transaction: trx
                    })
                })
            )
        })

        // send response
        return res.status(200).json({
            message: 'success pinjam buku'
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = {
    createTransaction
}