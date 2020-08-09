const http = require('http')

http.createServer((request, response) => {
  let body = []
  request.on('error', (err => console.error(err)))
    .on('data', (chunk => {
      body.push(chunk)
    })).on('end', () => {
    body = Buffer.concat(body).toString()
    console.log('body: ', body)
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end(`
    <html>
    <head>
    <style>
    .container {
    display: flex;
    flex: 1;
    }
    .box {
   width: 200px;
   height: 200px;
    }
</style>
</head>
    <body>
    <div class="container">
        <div class="box">hello world</div>
</div>
</body>
</html>
    `)
  })
}).listen(8080)


