const db = require('../../data/dbConfig')

function find() {
    return db('users')
}

async function add(user) {
    return await db('users').insert(user).then(([id]) => {
        return db('users').where('id', id).first()
    })
}

function findBy(filter) {
    return db('users').where(filter)
}

module.exports = {
    find,
    add,
    findBy
}

