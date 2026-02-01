const { constants } = require('../constatnts')

const errorhandler = (err, req, res, next) => {
    // check if exist any status code if, we passed 400. but if no status code we return statuscode 500
    const statuscode = res.statuscode ? res.statescode : 500

    switch (statuscode) {
        case constants.VALIDATION_ERROR:
            res.json({ title: "Validation failed ", message: err.message, stackTrace: err.stack })
            break
        case constants.NOT_FOUND:
            res.json({ title: "Not Found", message: err.message, stackTrace: err.stack })
        case constants.UNAUTHORIZED:
            res.json({ title: "An authorized", message: err.message, stackTrace: err.stack })
        case constants.FORBIDDEN:
            res.json({ title: "Forbidden", message: err.message, stackTrace: err.stack })
        case constants.SERVER_ERROR:
            res.json({ title: "Server Error", message: err.message, stackTrace: err.stack })
        default:
            console.log("No errors ")
            break
    }
}

module.exports = errorhandler