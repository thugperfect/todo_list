const router = require('express').Router()


const controller = require('./controller')

router.post('/api',controller.post)
router.get('/api',controller.get)
module.exports = router
