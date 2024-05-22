import { pool as db } from "../database/database.js";

class User {
    constructor(id, email, password) {
        this.id = id;
        this.email = email;
        this.password = password;
    }

    save() {
        return db.promise().execute(
            'INSERT INTO users (email, password) VALUES (?, ?)',
            [this.email, this.password]
        );
    }

    edit() {
        return db.promise().execute(
            'UPDATE users SET email = ?, password = ? WHERE id = ?',
            [this.email, this.password, this.id]
        );
    }

    delete() {
        return db.promise().execute(
            'DELETE FROM users WHERE id = ?',
            [this.id]
        );
    }

    static fetchAll() {
        return db.promise().execute('SELECT * FROM users');
    }

    static findById(id) {
        return db.promise().execute('SELECT * FROM users WHERE id = ?', [id]);
    }
}

export { User };

// CREATE TABLE users (
//     id int NOT NULL AUTO_INCREMENT,
//     email varchar(255) NOT NULL,
//     password varchar(255) NOT NULL,
//     PRIMARY KEY (id)
// );