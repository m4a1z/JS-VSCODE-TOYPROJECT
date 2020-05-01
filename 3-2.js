'use script'

//#1 객체 생성 Object 생성자 함수 이용
var foo  = new Object();

foo.name = "삼팔식스맨";

foo.age = "32";

foo.gender = "male";

// console.log(foo);

// console.log(typeof foo);

//#2 객체 리터럴 방식

var foo2  = {
    "name" : "탐쓰"
 ,  "age" : "8"
 ,  "gender" : "man"
};

// console.log(foo2);

//#3 객체 프로퍼티 읽기 / 쓰기 / 갱신


var foo3  = {
    "name" : "탐쓰"
 ,  "age" : "8"
 ,  "gender" : "man"
};

// console.log(foo3.name);

//#4 for in 문

for(Map in foo3)
{
    console.log(Map, foo3[Map]);
}

//#4 객체 삭제 delete 변수 객체 내 프로퍼티만 삭제 가능;

delete foo3.age;
console.log(foo3);

//#5 기본 5가지를 제외한 모든 (숫자,문자열,boolean, null , undefinded) 제외 모든 값은 객체!
//배열 , 함수 포함 모두다 객체

//#6 
var a = 100;
var b = 100;

var objA = { val : 100};
var objB = { val : 100};
var objC = objB;

console.log(objA == objB);
console.log(objA.val == objB.val);
console.log(objC == objB);

//#6 프로토타입 