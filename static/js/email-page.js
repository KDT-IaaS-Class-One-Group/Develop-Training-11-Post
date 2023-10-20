const emailPage = (body) => {
    return `<!DOCTYPE html>
    <html lang="ko">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <link rel="stylesheet" href="./static/css/mailStyle.css" />
      </head>
      <body>
        <div id="root">
          <div>
            <h1>
              <pre>
    ${body}님! 반갑습니다.
    저에게 편지를 보내주세요!
          </pre
              >
            </h1>
          </div>
          <form action="/send" method="POST">
            <div>
              <label for="title">title</label>
              <input type="text" id="title" name="title" placeholder="제목" />
            </div>
            <div>
              <label for="content">Text</label>
              <input type="text" id="content" name="textSend" placeholder="내용" />
            </div>
            <div>
              <input type="submit" name="submit" value="send" />
            </div>
          </form>
        </div>
      </body>
    </html>`
} 

module.exports = emailPage; 