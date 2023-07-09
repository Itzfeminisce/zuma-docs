const express = require("express");
const path = require("path");
const createError = require("http-errors");
//const model = require(process.cwd()+"/model/model.js");

const router = express.Router({ mergeParams: true });
const log = console.log.bind(console);
//const db = require(path.resolve(process.cwd(),"models","connect.js"));

/* GET home page. */
router.use((req, res, next) => {
    let token = req.get("authorization");
    if (!token) {
        next(createError(401));
        return;
    }
    req.token = token?.toLowerCase()?.replace("bearer ", "");
    next();
});

const messages = [
    { name: "John", age:50, isActive:true },
    { name: "Doe", age:24, isActive:false },
];

router
    .route("/messages")
    .get((req, res) => {
        
        res.json(messages);
    })
    .post(async (req, res) => {
        const data = req.body;
        res.status(200).json({});
    })
    .put((req, res) => {})
    .delete((req, res) => {});

router.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    // res.status(err.status || 500);
    res.status(err.status || 500).json(err);
});

module.exports = router;
