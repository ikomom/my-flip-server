import express from 'express'

const app = express()

const getTime = () => new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();

app.get('/', function (req, res) {
  console.log(`[${getTime()}]header`, req.headers)
  res.setHeader('Use', 'ikkomon')
  res.setHeader('X-Accel', 'ikkomon X-Accel')
  res.send('Hello World')
})

app.listen(4000, () => {
  console.log('监听成功')
})
