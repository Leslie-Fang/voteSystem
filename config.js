var dev_config = {
    port:4000,
    databases_config:{
        host     : 'localhost',
        user     : 'sampadm',
        password : 'secret',
        database : 'express2react',
        port: 3306
    }
};
var production_config = {
    port:4000,
    databases_config:{
        host     : 'localhost',
        user     : 'sampadm',
        password : 'secret',
        database : 'express2react',
        port: 3306
    }
};
var docker_config = {
    port:4000,
    databases_config:{
        host     : '150.95.148.104',
        user     : 'sampadm',
        password : 'secret',
        database : 'express2react',
        port: 3388
    }
};

    if (process.env.NODE_ENV === "production")
        module.exports = production_config;
    else if (process.env.NODE_ENV === "docker")
        module.exports = docker_config;
    else
        module.exports = dev_config;