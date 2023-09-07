// alert("hellow");

var x;
let y;
const z = 15; // (ค่าไม่เปลี่ยนทีหลัง ถ้าเปลี่ยนจะแสดงไม่ได้)
x = 10;
y = 5;
console.log(x, y, z);
x = 20;
console.log(x);

var name = "john";
var lastname = "Dow";
var a = "20"; // เป็นตัวแปรที่ชื่อ20
var b = "10";
console.log(a + b); // เป็นการนำชื่อมาต่อกันจะเป็น 2010
console.log(parseInt(a) + parseInt(b)); //+ - * / ได้หมดเป็นการแปรงตัวแปรที่ป็นตัวเลขให้เป็น Int ก่อนจึงนำมา+ ทำให้ค่าเป็นตัวเลข
console.log(name + "    " + lastname); // สามารถนำมา+กันได้ โดยถ้าอยากให้เว้นก้ใส่แบบตรงกลาง
//x-- x++ x+=x(2x) สามารถใช้ได้ปกติ รวมทั้ง x%(x ม็อด คือหารเอาเศษ) ค่าต่างๆด้วย

var xx = 123;
var yy = "Hollow";
var zz = true; // เอาไว้เทียบtrue false ได้
var ar = ["re", "ev", "sea", xx]; // ใส้ได้ทั้งค่าและตัวแปลเป็นarray
console.log(typeof xx); // เอาไว้บอกtype
console.log(typeof yy);
console.log(typeof zz);
console.log(typeof ar);
console.log(ar);
console.log(ar[3]);
console.log(ar.length);
ar.push("black"); // เป็นdynamicคือค่าเปลี่ยนเลยตั้งแต่ต้น ซึ่ง push จะเติมหลังสุด

var obj = {
  name: "jooj",
  lastname: "dooa"
};
console.log(obj);
console.log(typeof obj);
console.log(obj.name);
// console.log(obj["name"]); ใช้ได้2แบบ
console.log(obj.lastname);
// console.log(obj["lastname"]);ใช้ได้2แบบ
obj.age = 20; // เป็นdynamicคือค่าเปลี่ยนเลยตั้งแต่ต้น
console.log(obj);

var un = undefined;
var nu = null;
console.log(typeof un);
console.log(typeof nu);
console.log(un == nu); // เป็นการตรวจtrue false เหมือนกันเพราะnullกับundefined ต่างกันที่type
console.log(un === nu); // แต่ถ้าเช็ค === จะตรวจสอบtypeและจะรู้ว่าไม่เท่ากัน

function plus(x, y) {
  return x + y;
}
var r = plus(10, 11);
console.log("result =", r);

function log(data) {
  console.log(data);
  return;
}

function plus2(x, y) {
  return plus(x, y);
}

log(plus2(3, 5));

function area(w, h, t) {
  if (t === "square") return w * h;
  if (t === "circle") return Math.PI * (x ^ 2);
  if (t === "tri") return (w * h) / 2;
  else return "บอกtypeด้วย";
}
log(area(10, 10, "tri"));
log(area(10));

var myarray = ["string", 1, 2, { text: "teras" }, ["test1"], true];

var myarray2 = new Array("str", 23, { teas: "test" }, ["tser"], false);
log(myarray); // จริงๆคือconsole.log แต่มีfunctionอยู่แล้วจึงสามารถใช้แบบนี้ได้
log(myarray2); //ใช้งานได้2แบบแต่แบบแรกดีกว่าไม่เหลืองและไม่ยุ่งยาก

log(myarray2[1]);
for (let i = 0; i < myarray.length; i++) {
  console.log("index:" + i, myarray[i]);
}
myarray[6] = "tsts"; //ถ้าใส่เลขที่มีอยู่แล้วมันจะไปแทนที่ตัวเดิมก่อนไม่ได้ขยับ
myarray.push("ttttt67"); //จะทำงานเลยแต่ถ้าถูกเขียนทับก้จะหายไปเลย
myarray.pop(); //ลบตัวท้าย

myarray.unshift("new zero 0"); //นำมาขึ้นต้นแต่ไม่ได้แทนที่เพราะตัวอื่นๆจะถูกขยับออกไปเอง

myarray.shift(); //ลบตัวแรกสุดออกซึ่งจะขยับเอง
log(myarray);

myarray.map((myVal, index) => {
  //myVal คือค่าในarrayที่ตำแน่งต่างๆ indexคือเลขของarrayที่เริ่มจาก0จนตัวสุดท้าย
  console.log("Index" + index, " = ", myVal);
});

var myarray3 = [
  { name: "tea 1" },
  { name: "tea 2" },
  { name: "tea 3" },
  { name: "tea 4" },
  { name: "tea 5" },
  { name: "tea 6" }
];

var mynew3 = myarray3.map(function (val, index) {
  return val.name;
});
log(mynew3);

myarray3.forEach((val, index) => {
  console.log(index, "=", val);
});

var myobj = {};
var myobj2 = new Object();
console.log(typeof myobj);
console.log(typeof myobj2);

myobj.name = "gg";
myobj.lastname = "google";
myobj.Age = 30;

console.log(myobj);
console.log(myobj.name); //ได้2แบบ
console.log(myobj["lastname"]); //ได้2แบบ

myobj.nameLength = function () {
  //ทำให้ตัวแปรแบบข้างบนเช่น.name เป็นfunction ของความยาวชื่อ
  return this.name.length;
};
console.log(myobj.nameLength()); //ความยาวของช่องนั้นๆ และใส่()เพราะเป็นfunction

delete myobj.lastname; // .xx จะสามารใช้ ["xx"] ได้เหมือนกัน )(การลบจะเกิดผลทั้งหมด)
console.log(myobj);

////
////
//// if else
////

var tests = [
  { x: 13, Y: 14 },
  { x: 11, Y: 4 },
  { x: 3, Y: 21 },
  { x: 5, Y: 17 },
  { x: 14, Y: 9 }
];

tests.forEach((val) => {
  if (val.x >= 11) console.log("x = ", val.x);
  else if (val.x === 5) console.log("x = ", val.x);
  else console.log("y = ", val.Y);
});

if (tests[0].Y > 0) console.log("teet=  ", tests[0].x);

///////////
///////////switch
///////////
///////////

var mySwitch = "two";
switch (mySwitch) {
  case "one":
    console.log("my = 1");
    break;
  case "two":
    console.log("my = 2");
    break;
  case "three":
    console.log("my = 3");
    break;
}

////
////
////loop
////

for (let x = 1; x <= 20; x++) {
  console.log("x = ", x);
}

let aaa = 0;
while (aaa <= 3) {
  console.log("a = ", aaa);
  aaa++;
}

////
////dom = doc obj model
////
////

var myDiv = document.getElementById("myDiv");
myDiv.style.width = "200px "; // pxต้องติดกับเลขเท่านั้น
myDiv.style.height = "200px "; // pxต้องติดกับเลขเท่านั้น
myDiv.style.backgroundColor = "red";
myDiv.innerHTML = " <h1> Hellow </h1>";

var myClasss = document.getElementsByClassName("myClasss");
myClasss[0].innerHTML = " <h1> clsss sss </h1>"; //clss เป็นarrayต้องชี้ก่อนเนื้องจากอาจมีได้หลายตัว

for (let e = 1; e < myClasss.length; e++) {
  //เริ่มที่0จะทำให้ข้างบนโดนทำงานทับ อยากโชว์อันบนเลยเริ่มที่ 1
  myClasss[e].innerHTML = " clsss sss " + e;
}
var myBody = document.getElementsByTagName("body");
var myh1 = document.createElement("h1");
var textnode = document.createTextNode("Body is ");
myh1.appendChild(textnode);
myBody[0].appendChild(myh1);
