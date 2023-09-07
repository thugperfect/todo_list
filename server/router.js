const router = require('express').Router()


const controller = require('./controller')

router.post('/api',controller.post)
router.get('/api',controller.get)

router.delete('/api',controller.delete)
module.exports = router
