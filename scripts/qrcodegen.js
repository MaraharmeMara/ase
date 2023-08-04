NodeJS
Require the module qrcode

var QRCode = require('qrcode')

QRCode.toDataURL('I am a pony!', function (err, url) {
  console.log(url)
})
render a qrcode for the terminal

var QRCode = require('qrcode')

QRCode.toString('./AR-web/models',{type:'terminal'}, function (err, url) {
  console.log(url)
})