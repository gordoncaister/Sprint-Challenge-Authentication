const request = require('supertest')

const server = require("./api/auth-router")

const db = require("../database/dbConfig")

beforeEach(()=>{
    return db.migrate.rollback()
        .then(() => db.migrate.latest)
})

describe("Post",()=>{
    it("Should return 201", async() => {
        const add = await request(authRouter).post
    })
})
