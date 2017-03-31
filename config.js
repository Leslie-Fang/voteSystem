var dev_config = {
    port:3000,
    databases_config:{
        host     : 'localhost',
        user     : 'sampadm',
        password : 'secret',
        database : 'express2react'
    }
};
var production_config = {
    port:4000,
    databases_config:{
        host     : 'localhost',
        user     : 'sampadm',
        password : 'secret',
        database : 'express2react'
    }
};
module.exports = process.env.NODE_ENV === "production" ? production_config:dev_config;