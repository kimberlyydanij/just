/*
[문제1]
[데이터]
http://www.daum.net
ftp://ftp.microsoft.com

[출력결과]
protocal: http, domain: www.daum.net
protocal: ftp, domain: ftp.microsoft.com
*/

//[출력결과]를 참고하여 separator함수를 구현하세요.


console.log('\n//문제1//');
let a = 0;
let txt = ''; //풀 주소 저장
let txt1 = ''; // 프로토콜 앞
let txt2 = ''; // 프로토콜 뒤

separator('http://www.daum.net');
separator('ftp://ftp.microsoft.com');

function separator(data) { {
    txt = data;
    for(i=0;i<data.length;i++) {
      if (data[i] == ":") 
      a = i; } 
      print1(a)
      print2(a)
    }  
    console.log('protocal: '+txt1+', domain: '+txt2);
    txt1='';
    txt2=''; }
function print1(a) {
     for(i=0;i<a;i++) {
     txt1 = txt1 + txt[i]; }
    } 
    function print2() {
      for(i=a+3;i<txt.length;i++) {
      txt2 = txt2 + txt[i]; }
     } 
    

/*
[문제2]
[데이터]
let person1 = { name: '홍길동', phone: '010-1234-5678' };
let person2 = { name: '진여구', phone: '010-253-2253' };
[출력결과]
이름: 홍길동
연락처: 010-****-5678
이름: 진여구
연락처: 010-***-2253
*/
//출력결과를 참고하여 display()함수를 구현하세요
console.log('\n//문제2//');
let person1 = {name: '홍길동', phone: '010-1234-5678'};
let person2 = {name: '진여구', phone: '010-253-2253'};
let person3 = {name: '정다운', phone: '010-8264-6896'};
let pnum='';
function display(customer) {
  console.log(`이름 : ${customer.name}`);
  pnum='연락처 : 010-';
  let cnt = customer.phone.indexOf('-');
  let cnt1 = customer.phone.indexOf('-', cnt +1);
  for(i=cnt;i<cnt1-1;i++){
    pnum = pnum + "*";
  }
  pnum = pnum +'-';
  for(i=cnt1+1;i<customer.phone.length;i++){
    pnum = pnum + customer.phone[i];
  }
  console.log(pnum);
  pnum="";
}
display(person1);
display(person2);  
display(person3); 

