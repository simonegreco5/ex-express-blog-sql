const serverError = (err, req, res, next) => {
    console.log(err.stack)
    res.status(500).json({ error: true, message: "500 internal server error"})
}

module.exports = serverError