var dev_config = {
    port:4000,
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
var docker_config = {
    port:4000,
    databases_config:{
        host     : 'localhost',
        user     : 'sampadm',
        password : 'secret',
        database : 'express2react'
    }
};

    if (process.env.NODE_ENV === "production")
        module.exports = production_config;
    else if (process.env.NODE_ENV === "docker")
        module.exports = docker_config;
    else
        module.exports = dev_config;