//* 내장 모듈 가져오기
const http = require('http');
const querystring = require('querystring');
//* index.html 모듈 가져올 수 있게 file system Fs 변수 생성
const fs = require('fs');
const url = require('url');
const idCheck = require('./static/js/idCheck.js');
const pwCheck = require('./static/js/pwCheck.js');
const emailPage = require('./static/js/email-page.js');
const signUpAsset = require('./static/js/signUpAsset.js');

const contentT = [
  { 'Content-Type': 'text/html; charset= utf-8' },
  { 'Content-Type': 'text/css; charset= utf-8' },
  { 'Content-Type': 'image/jpeg; charset= utf-8' },
  { 'Content-Type': 'Application/javascript; charset= utf-8' },
];

//* 서버 생성
const server = http.createServer((request, response) => {
  let pageURL = request.url;
  let parsedUrl = url.parse(pageURL, true);
  //* 메인 페이지 조건문
  if (request.method === 'GET' && request.url === '/') {
    fs.readFile('signUp.html', (err, data) => {
      if (err) {
        console.log('호출 에러');
      } else {
        response.writeHead(200, contentT[0]);
        response.end(data);
      }
    });
    //* 기능 페이지 제작
  } else if (request.method === 'POST' && request.url === '/login') {
    let body = '';

    request.on('data', (chunk) => {
      body += chunk.toString();
    });

    // 콘솔 출력용
    request.on('end', () => {
      const parseBody = querystring.parse(body);
      Object.assign(signUpAsset, parseBody);
      if (idCheck(signUpAsset.id)) {
      } else if (pwCheck(signUpAsset.password, signUpAsset.samePassword)) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(emailPage(signUpAsset.id));
      }
    });
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html; charset= utf-8' });
    response.end('<h1>요청 페이지를 찾을 수 없습니다</h1>');
  }
});

server.listen(8080, () => {
  console.log('서버 가동중 http://localhost:8080');
});
