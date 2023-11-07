/**
 * @param {DOM element string} tagName
 * @param {object} styleObject
 * @returns DOM element
 * 
 * ? Object.keys()는
 * ? 객체의 key값들을 배열로 반환한다.
 * ? forEach()는
 * ? 배열의 각 요소에 대해 제공된 함수를 차례대로 한번씩 실행한다.
 * * for()문을 '배열에서' 사용하게끔 추상화된 javascript 문법이다.
 */

export default function(tagName, styleObject) {
  // DOM API 태그 요소를 아래의 element로 생성한다.
  const element = document.createElement(tagName);
  // Javascript에서 지원하는 keys() 메서드를 활용해, 간편하게 배열로 가공한다.
  let styleObjectKeyArray = Object.keys(styleObject);

}