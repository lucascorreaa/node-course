import http from 'node:http'

// request = req
// response = res

const server = http.createServer((req, res) => {
    return res.end('Hello Nodee')
})

server.listen(3333)

// localhost:3333