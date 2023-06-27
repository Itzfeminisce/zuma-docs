const pkg = require("./zuma.config.js");
const express = require("express");
const path = require("path");
//const cookieParser = require("cookie-parser");
//const logger = require("morgan");

const indexRoute = require("./routes/index");
const startRoute = require("./routes/start");

const app = express();
//const PORT = process.env.PORT || 3000;

//app.use(logger("dev"));
app.set("view engine", "ejs");
//app.set("views", path.join(__dirname,'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(cookieParser());
app.use('/resources', express.static(path.join(__dirname, "public")));


   
app.use((req, res, next) => {
    req.metadata = req?.metadata || pkg;
    next()
})

 //  if (req.url.startsWith("/docs")) {
app.use("/getting-started", (req, res, next) => {
        const url = `/docs/v${req.metadata.version}${req.url.slice(
            "/docs".length
        )}`;
       return res.redirect(url)
});
    

app.use("/docs",startRoute)

app.use("/", indexRoute);

/*
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("404");
});
*/
app.listen(process.env.PORT || 3000,()=>console.log("Serving.."))
module.exports = app;
