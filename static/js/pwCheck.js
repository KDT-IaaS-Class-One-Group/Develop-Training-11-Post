//* 패스워드와 확인하는 패스워드의 값이 같을 때 리턴이 트루 값으로 나오게 한다.
function pwCheck(pw1, pw2) {
  if (pw1 === pw2) {
    return true;
  }
}

module.exports = pwCheck;
