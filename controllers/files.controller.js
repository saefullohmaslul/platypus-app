const imagekit = require("../helpers/imagekit.helper")

exports.uploadFile = async (req, res, next) => {
    try {
        const resp = await imagekit.upload({
            file: req.file.buffer,
            fileName: `avatar-${Date.now()}-${req.file.originalname}`,
            tags: ["avatar"],
        })

        return res.status(200).json({
            message: 'success upload file',
            data: resp.url
        })
    } catch (error) {
        next(error)
    }
}