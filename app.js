const pkg = require("./zuma.config");
const createError = require("http-errors");
const express = require("express");
const path = require("path");
//const useToken = require("express-bearer-token")


//const cookieParser = require("cookie-parser");
//const logger = require("morgan");
const indexRoute = require("./routes/index");
const docsRoute = require("./routes/docs/index");
const devRoute = require("./routes/dev/index");
const apiRoute = require("./routes/api/route");

/*
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const apiRoute = require("./routes/api");
*/
const app = express();
//const PORT = process.env.PORT || 3000;

//app.use(logger("dev"));
app.set("view engine", "ejs");
//app.set("views", path.join(__dirname,'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(useToken());


//app.use(cookieParser());
app.use("/resources", express.static(path.join(__dirname, "public")));
app.use("/db", express.static(path.join(__dirname, "db.json")));

app.use((req, res, next) => {
    req.metadata = req?.metadata || pkg;
    if (req.url.startsWith("/docs")) {
        const url = `/v${req.metadata.version}/docs${req.url.slice(
            "/docs".length
        )}`;
        return res.redirect(url);
    }
    //console.log(req.url)
    return next();
});

/*
app.use("/api/:version/?",apiRoute)
app.use("/dashboard/?",userRoute)
app.use("/auth/?",authRoute)
*/
app.use("/api", apiRoute);
app.use("/dev", devRoute);
app.use("/:version/docs", docsRoute);

app.use("/", indexRoute);


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

module.exports = app;
