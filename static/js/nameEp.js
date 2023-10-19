const nameEp = (body) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <h1>${body}님! 접속을 환영함 ㅋ</h1>
    </body>
    </html>`
} 

module.exports = nameEp; 