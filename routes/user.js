const express = require("express");
const fs = require("node:fs/promises");
const path = require("node:path");
const router = express.Router();

/* GET home page. */
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

module.exports = router;
