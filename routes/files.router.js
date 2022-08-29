const { uploadFile } = require('../controllers/files.controller')
const upload = require('../helpers/upload-file.helper')

const router = require('express').Router()

router.post('/upload', upload.single('avatar'), uploadFile)

module.exports = router