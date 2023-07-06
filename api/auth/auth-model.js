const db = require('../../data/dbConfig')

function find() {
    return db('users')
}

function add(user) {
    return db('users').insert(user)
}

module.exports = {
    find,
    add
}

