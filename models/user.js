const db = require('../util/database');

module.exports = class User {
    constructor(id,item) {
        this.id = id;
        this.item = item;
    }

    static userRegister(req) {
        return db.execute('INSERT INTO users (user_first_name,user_last_name,user_email_id,user_created_date) VALUES (req.body.user_first_name,req.body.user_last_name,req.body.user_email_id,req.body.user_created_date)');
    }

    static userDetailsRegister(req) {
        return db.execute('INSERT INTO usersdetails (user_address, user_city, user_country) VALUES (req.body.user_address,req.body.user_city,req.body.user_country)');
    }

    static userPassword(req) {
        return db.execute('INSERT INTO users_password (user_password) VALUES (req.body.user_password)');
    }
}