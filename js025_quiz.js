/*
 문제1
 <프로그램 실행결과>
  주어진 배열에서 3의 배수의 개수=> 6
  주어진 배열에서 3의 배수의 합=> 108
  */

  let arr = [1, 3, 5, 8, 9, 11, 15, 19, 18, 20, 30, 33, 31];
  let chk = 0;
  let sum = 0;
  let a = 0;

  //주어진 arr배열에서 3의 배수를 구해서 리턴하는 함수 정의
  function process(arr) {
    for(i=0;i<=arr.length;i++) {
        if(arr[i]%3==0) {
        console.log(arr[i]);
       return count(arr[i]); }
       
    }
  }
  
  //주어진 arr배열에서 3의 배수의 갯수를 리턴하는  함수 정의
  function count(chk) {
    a = a  + 1;
    return arrPlus(chk);
  }
  
  //주어진 arr배열에서 3의 배수 합을 리턴하는 함수 정의
  function arrPlus(chk) {
    sum = sum + chk ;
    return sum;
  }

  console.log(`3의 배수의 개수는 ${a}`);
  console.log(`그 합은 ${sum}`);

  /*
  [문제2]
  [출력결과]
  javascript
  tpircsavaj
  javascript
  */
  
  let alpa = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't'];
  
  //alpa배열의 요소를  reverse한 후 리턴하는 함수 정의
  function reverse(alpa) {
    return null;
  }
  
  //data배열의 출력하는  함수 정의
  function display(data) {}