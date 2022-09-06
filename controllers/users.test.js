const request = require('supertest')
const app = require('../app')
const { faker } = require('@faker-js/faker')
// const { default: mongoose } = require('mongoose')

let existEmail = ''
describe('register', () => {
    afterEach(async () => {
        // await mongoose.connection.close()
    });

    it('should register new user', done => {
        const email = faker.internet.email().toLowerCase()
        const name = faker.name.fullName()

        request(app).post('/auth/register').send({
            email: email,
            password: '12345678',
            name: name,
            role_id: 1,
            avatar: faker.image.avatar()
        }).then(result => {
            // use to create case register but user already exist
            existEmail = email

            expect(result).toBeTruthy()
            expect(result.body.code).toBe(200)
            expect(result.body.message).toBe('Success create user')
            expect(result.body.data.email).toBe(email)
            expect(result.body.data.name).toBe(name)
    
            done()
        })
    })

    it('should choose wrong role', (done) => {
        const email = faker.internet.email().toLowerCase()
        const name = faker.name.fullName()

        request(app).post('/auth/register').send({
            email: email,
            password: '12345678',
            name: name,
            role_id: 4,
            avatar: faker.image.avatar()
        }).then(result => {
            expect(result).toBeTruthy()
            expect(result.statusCode).toBe(404)
            expect(result.body.message).toBe('Role not found')
        }).finally(() => {
            done()
        })
    })

    it('should return error bcs user already exist', (done) => {
        const name = faker.name.fullName()

        request(app).post('/auth/register').send({
            email: existEmail,
            password: '12345678',
            name: name,
            role_id: 1,
            avatar: faker.image.avatar()
        }).then(result => {
            expect(result).toBeTruthy()
            expect(result.statusCode).toBe(400)
            expect(result.body.message).toBe('Email already exist')
        }).finally(() => {
            done()
        })
    })
})