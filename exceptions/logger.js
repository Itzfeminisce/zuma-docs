
class Logger extends Error {
    message = "Some error"
    constructor(message, ...args){
        console.log(args)
        super(message)
    }
}

function logger(message){
    return new Error(message)
}
module.export = logger("282772")