require('dotenv').config()

const app = require("./app");
const logger = require('./helpers/winston.helper');

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    logger.info(`server running on port: ${PORT}`)
})