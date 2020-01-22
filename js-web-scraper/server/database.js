const typeorm = require('typeorm');

class Creator {
    constructor(id, name, img, ytURL) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.ytURL = ytURL;
    }    
}

const EntitySchema = require("typeorm").EntitySchema; 

module.exports = {
    getAllCreators,
    insertCreator
}