const path = require('node:path')
const {readFile, appendFile, writeFile}= require('node:fs')
const model = new Map()
const log = console.log.bind(console)
const FILE_DIR = process.cwd()+"/db.json";


readFile(FILE_DIR,'utf8',(err, file)=>{
    file = JSON.parse(file)
    writeFile(FILE_DIR, file,(err)=>{
        log("Write: ",err)
    })
})

const write = async (data)=>{
    try{
        let db = (await DB).data
log(db)
db.data = data;
return await writeFile(FILE_DIR,JSON.stringify(db))
    }catch(e){
        console.log("DB ERROR: ",e)
    }
}

 
 
