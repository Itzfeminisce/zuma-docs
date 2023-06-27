const {name, version, description} = require("./package.json")
let appName =name.replace(/[\-\_\.]/g, " ")?.split(' ').map(it=>it.charAt(0)?.toUpperCase()+it?.slice(1))?.join(" ")
module.exports = {
    appName:  appName || "Zuma UI",
    version: version,
    description: description || `Responding to user's FAQs and Enquiries just got much easier You can boost your client connectivity 100x faster than it used to be without writing much <codes />`,
    navigations:[
        {url:"/docs/customizable",icon:"wrench.svg",title:"Customizable", description:"Built with end-user's customizations in mind"},
        {url:"/docs/configurable",icon:"gears.svg",title:"Configurable", description:"Write your own conversation file. We will deliver them neatly"},
        {url:"/docs/downtime",icon:"watch.svg",title:"Zero Downtime", description:"Send and receive messages within milliseconds. No delay"},
        ]
}