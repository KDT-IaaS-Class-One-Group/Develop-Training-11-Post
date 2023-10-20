function emailCheck(object) {
  //* 이메일의 문자열을 글자별로 잘라서 배열에 담아준다.
  let emailStr = object.split('');
  //* 이메일의 문자열에서 '@' 위치를 찾아준다.
  let atIndex = emailStr.indexOf('@');
  //* 이메일의 문자열에서 '@' 유무를 확인해준다.
  let emailAtEx = emailStr.includes('@');
  //* 이메일의 '@' 뒤에 '.'이 있는지 확인해준다.
  let atDotEx = emailStr.includes('.', atIndex);
  //* 이메일에 '@'와 '@' 뒤에 '.'이 있다면 리턴을 한다.
  if (emailAtEx === true && atDotEx === true) {
    return true;
  }
}

module.exports = emailCheck;
