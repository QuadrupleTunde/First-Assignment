// require needed module
const express = require('express')

// initiallizing the app object
const app = express()

require('dotenv').config()


// homepage route
// Declare routes that people can visit on the application.
app.get('/', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: white;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1>White Page</h1>
        </body>
    `)
})

// Teal Page
app.get('/teal', function (req, res) {
    res.send(`
        <body style="margin: 0;">
            <div style="border: 1px solid black; height: 10vh; background-color: teal;">
                <h2 style="text-align: center;">NAV BAR</h2>
            </div>
            <h1 style="color: teal;">Teal Page</h1>
        </body>
    `)
})



// Crimson Page
// Color Page
// app.get('/:color', function (req, res) {
//     let myColor = req.params.color
//     res.send(`
//         <body style="margin: 0;">
//             <div style="border: 1px solid black; height: 10vh; background-color: ${myColor};">
//                 <h2 style="text-align: center;">NAV BAR</h2>
//             </div>
//             <h1 text-transform: "normal" style="color: ${myColor};">${myColor.charAt(0).toUpperCase() + myColor.slice(1)}  Page</h1>
          
//         </body>
//     `)
// })
app.use('/controllers', require('./controllers/controllerpractice.js'))

app.post('/methodpost', function (req, res) {
    
    res.send("Post is to get request")
}) 

    app.listen(process.env.PORT, function(){

        console.log("im listening at 3000")
    })