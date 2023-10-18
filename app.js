//* 내장 모듈 가져오기
const http = require('http');

//* index.html 모듈 가져올 수 있게 file system Fs 변수 생성
const fs = require('fs');

const url = require('url');

const path = require('path');

const contentT = [
  {'Content-Type': 'text/html; charset= utf-8'},
  {'Content-Type': 'text/css; charset= utf-8'},
  {'Content-Type': 'image/jpeg; charset= utf-8'}
];

//* 서버 생성
const server = http.createServer((request, response) => {
  let pageURL = request.url;
  let pathname = url.parse(pageURL, true).pathname;
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
  } else if (request.method === 'GET' && request.url === '/e-mail') {
    fs.readFile('email.html', (err, data) => {
      if (err) {
        console.log('호출 에러');
      } else {
        response.writeHead(200, contentT[0]);
        response.end(data);
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