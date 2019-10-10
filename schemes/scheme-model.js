const knex = require("knex")
const knexConfig = require("../knexfile")

const db = knex(knexConfig.development)

module.exports = { find, findById, findSteps, add, update, remove }

function find() {
  return db("schemes")
}

function findById(id) {
  return db("schemes")
    .select("*")
    .where({ id })
}

function findSteps(id) {
  return db("steps")
    .select("*")
    .where({ id })
}

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .returning("*")
}

function update(id, changes) {
  return db("schemes")
    .update(changes)
    .where({ id })
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del()
}
