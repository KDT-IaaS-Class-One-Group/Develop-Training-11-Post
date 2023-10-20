const userInfo = (a) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>${a}님! 접속을 환영해요!</h1>
    </body>
    </html>`
}

module.exports = userInfo;