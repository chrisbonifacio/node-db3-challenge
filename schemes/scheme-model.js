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
  const steps = db("schemes")
    .join("steps", "schemes.id", "=", "steps.scheme_id")
    .select("schemes.scheme_name", "steps.step_number", "steps.instructions")
    .where({ scheme_id: id })
    .orderBy("step_number", "asc")

  console.log(steps)

  return steps
}

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .returning("*")
}

function update(changes, id) {
  return db("schemes")
    .update(changes)
    .where({ id })
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del()
}
