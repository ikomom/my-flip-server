import path from 'path'
import * as http from 'http'
import fg from 'fast-glob'

export function testHttp() {
  const server = new http.Server()

  server.on('connect', (req) => {
    console.log('connect ')
  })

  server.on('connection', (req) => {
    console.log('connection')
  })

  server.on('request', (req, res) => {
    console.log('request', req.url)
    if (req.url === '/') {
      resolve().then(data => {
        res.writeHead(203, 'xxx')
        res.write(data.join('\n'))
        res.end('\nend')
      })
    }
  })
  server.on('close', () => {
    console.log('close')
  })
  const port = 4000
  server.listen(port)

  server.on('listening', () => {
    console.log(`连接成功 端口${port}`)
  })
}

async function resolve() {
  console.log('begin', path.resolve('../../'))
  const entries = await fg(['**/**.ts'], { cwd: 'src',  dot: true })
  return entries
}
