const express = require("express");
const path = require("node:path");
const router = express.Router({mergeParams:true});

const dashboardRoute= require("./dashboard");
const authRoute= require("./auth");
/* GET home page. */
router.use("/", dashboardRoute);
router.use("/auth", authRoute);


/*
router.get("/", async function (req, res, next) {
    const page = req.query?.path || "api-keys";
    const dir = path.resolve(path.join(__dirname, "../views", "partials", `${page}.ejs`));
   try{ 
    const exists = await fs.access(dir,
        fs.constants.F_OK
    );
    return res.render(`dashboard`, { metadata: req.metadata, path:page });
   }catch(e){
       next(Error("404 Page Not Found"))
   }
});
*/
module.exports = router;
