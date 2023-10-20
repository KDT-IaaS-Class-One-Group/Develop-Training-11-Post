function idCheck(object) {
  //* id의 문자열을 글자별로 잘라서 배열에 담는다.
  let idString = object.split('');
  //* id의 문자열의 원소를 찾은 후 찾은 원소가 대문자와 같은면 리턴 해준다.
  let idUp = idString.find((element) => {
    return element === element.toUpperCase();
  });
  //* id의 문자열의 원소를 찾은 후 찾은 원소가 소문자와 같은면 리턴 해준다.
  let idLower = idString.find((element) => {
    return element === element.toLowerCase();
  });
  //* id의 문자열에 소문자와 대문자가 안들어가면 undefined가 뜨고 들어가면 true의 값을 리턴 해준다.
  if( idUp !== undefined && idLower !== undefined) {
    return true
  }
}

//* 소문자 대문자 체크 하는 콘솔
console.log(idCheck('aA'))
console.log(idCheck('a'))
console.log(idCheck('A'))

module.exports = idCheck