before(async () => {
    process.env.NODE_ENV = 'test'

    app = await require('../index')
})