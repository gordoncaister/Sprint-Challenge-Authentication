const request = require('supertest')

const server = require("./server")

const db = require("../database/dbConfig")

beforeEach(()=> {
    return db.migrate.rollback()
        .then(()=> db.migrate.latest())
        .then(()=> db.seed.run())
})

describe("Post register",()=>{
    it("Should return 201", async() => {
        const add = await request(server)
        .post("/api/auth/register")
        .send({username:"gordilocks",password:"gord"})
        expect(add.status).toEqual(201)
        expect(add.body).toHaveProperty("id")
    })
    it("Should return 201", async() => {
        const add = await request(server)
        .post("/api/auth/register")
        .send({username:"gordilocks",password:"gord"})
        expect(add.body).toHaveProperty("id")
    })
    
})
let token;
describe("Post Login",()=> {
    it("Should return 200, should have token", async() => {
        const find = await request(server)
        .post("/api/auth/login")
        .send({username:"gord",password:"gord"})
        expect(find.status).toEqual(200)
        expect(find.body).toHaveProperty("token")
    })
    it("should have token", async() => {
        const find = await request(server)
        .post("/api/auth/login")
        .send({username:"gord",password:"gord"})
        expect(find.body).toHaveProperty("token")
        token = find.body.token
    })
})

describe("get jokes", () => {
    it("should return 200.", async() => {
        const jokes = await request(server)
        .get("/api/jokes")
        .set({authorization: token})
        expect(jokes.status).toEqual(200)
        expect(jokes.body[2]).toMatchObject({"joke": "Why didn’t the skeleton cross the road? Because he had no guts."})
        
    })
    it("should have a specific jokes.", async () => {
        const jokes = await request(server)
        .get("/api/jokes")
        .set({authorization: token})
        expect(jokes.body[2]).toMatchObject({"joke": "Why didn’t the skeleton cross the road? Because he had no guts."})
        
    })
})