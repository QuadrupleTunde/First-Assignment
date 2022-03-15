http = require('http')
console.log(http)

const server= http.createServer(function(req, res){
    res.write("<h1 style='color: blue;'>Hello FSD!</h1>")
    res.end()
})

server.listen(3000, function(){
console.log('It is fantabulous')


})