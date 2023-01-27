let client = express = require("../dbConnect");
let projectCollection;

setTimeout(() => {
    projectCollection = client.db().collection("Projects");
},2000)

//install collection
const insertProjects = (project,callback) => {
    projectCollection.insert(project,callback);
}
// get project...
const getProjects = (callback) => {
    projectCollection.find({}).toArray(callback);
    }

module.exports = {
    insertProjects, getProjects
}
        