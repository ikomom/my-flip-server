import net from "node:net";

export const testServer = (port: number) => {
  const server = net.createServer(function(connection) {
    console.log('[server] client connected');
    connection.on('end', function() {
      console.log('[server] 客户端关闭连接');
    });
    connection.write('Hello World!\r\n');
    connection.pipe(connection);
  });
  
  server.on('connection', () => {
    console.log('[server] connection')
  })

  server.listen(port, function() {
    console.log('[server] is listening');
  });

}

