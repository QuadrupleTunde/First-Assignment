const express = require('express')
const router = express.Router()

// console.log(router)
router.get('/', (req, res) =>{

    res.send("i am the router")
})
router.get('/version1', (req, res) =>{

    res.send("VERSION1")
})
router.get('/version2', (req, res) =>{

    res.send("VERSION2")
})
router.get('/*', (req, res) =>{
    console.log("dont give up")
    res.send("i cant find that shit")

})

module.exports = router