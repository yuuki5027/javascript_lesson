// var x = 1;
// var y = 2;
// var z = x + y;
// alert(z);
// var x = ["りんご", "バナナ", "みかん"];
// alert(x[2]);
// x.push("スイカ");
// alert(x[3]);
// var k = "の値段は";
// var l = "円です";
// var x = { name: "ぶどう", price: "100"};
// alert(x.name + k + x.price + l);
// var x = ["りんご", "100"];
// alert(x[0] + k + x[1] + l); 
// var fruits = [
//   { name: "りんご", price: "100", area: "青森" },
//   { name: "バナナ", price: "200", area: "フィリピン" },
//   { name: "みかん", price: "150", area: "愛媛" }
// ];
// alert(fruits[0].area + "産の" + fruits[0].name + "の値段は" + fruits[0].price + "円です");
// alert(fruits[1].area + "産の" + fruits[1].name + "の値段は" + fruits[1].price + "円です");
// alert(fruits[2].area + "産の" + fruits[2].name + "の値段は" + fruits[2].price + "円です");
// var result = confirm("あなたはN高生ですか？");
// alert(result);
// if (result == true) {
//   alert("N高へようこそ！");
// } else {
//   window.location.href = "https://nnn.ed.jp/admission/";
// }
// var fruits = ["りんご", "バナナ", "スイカ", "ぶどう"];
// for (var i = 0; i < fruits.length; i++) {
//   alert(fruits[i]);
// }
// var test = "イチゴ";
// console.log(test);
var count = 0;
var quiz = [
  {
    question: "犬は英語で何と言うでしょう？",
    answer: "dog"
  },
  {
    question: "鳥は英語で何と言うでしょう？",
    answer: "bird"
  },
  {
    question: "クジラは英語で何と言うでしょう？",
    answer: "whale"
  }
];
for (var i = 0; i < quiz.length; i++) {
  var your_answer = prompt(quiz[i].question);
  if (your_answer == quiz[i].answer) {
    console.log("正解！");
    count++;
  } else {
    console.log("はずれ！");
  }
}
console.log(quiz.length + "問中、" + count + "問正解でした！");