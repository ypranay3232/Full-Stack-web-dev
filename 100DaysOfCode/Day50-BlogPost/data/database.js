const { MongoClient } = require('mongodb');

const { info, error } = console;

module.exports = {
    _uri: "mongodb://localhost:27017/",
    connect: async function () {
        info("Connecting to database...");
        try {
            const client = await MongoClient.connect(this._uri);
            if (client) {
                info("The connection to the database is successful. Retrieving the schema...");
                this._schema = client.db("blog");
                this._schema ? info("The schema has been retrieved.") : error("The schema has not been retrieved.");
            } else {
                error("The connection to the database has failed: Client is null.");
            }
        } catch (err) {
            error("The connection to the database has failed with error:");
            error(err);
            process.exit(1); // Exit if we can't connect, as the app is useless without DB
        }
    },
    get schema() {
        if (!this._schema) {
            throw { message: "The connection to the database has not been established." }
        }
        return this._schema;
    }
}