import net from 'node:net'

export function testClient(port: number) {

  const client = net.connect({port: port}, function () {
    console.log('[client] 连接到服务器')
  })

  client.on('data', function (data) {
    console.log('[client] net data', data.toString())
    client.end()
  })

  client.on('end', function () {
    console.log('[client] net end')
  })


}