const config = {

    production: {
        PORT: 3000,
        //Change database location
        DB_URI: 'mongodb://127.0.0.1:27017/artGalery',
        SECRET: "MySecret"
    },
    
    development: {
        PORT: 5000,
          //Change database location
        DB_URI: 'mongodb://127.0.0.1:27017/artGalery',
        SECRET: "MySecret"
    }
}

module.exports = config[process.env.node_env || "development"];