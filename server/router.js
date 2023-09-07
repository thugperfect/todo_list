const router = require('express').Router()


const controller = require('./controller')

router.post('/api',controller.post)

module.exports = router
