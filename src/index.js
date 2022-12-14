/**
 * const, let　などの変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // varの再宣言
// var val1 = "再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);
// // 上書き可能
// val2 = "letを上書き";
// console.log(val2);
// // 再宣言は不可
// let val2 = "letを再宣言";

// const val3 = "const変数";
// console.log(val3);
// // constは上書き不可　再宣言も不可
// // val3 = "constを上書き";
// const val3 = "const変数の再定義";

// constで作成したオブジェクトのプロパティは変更可能
// const val4 = {
//   name: "Mike",
//   age: 29
// };
// console.log(val4.name);
// val4.name = "Tom";
// console.log(val4);

// const val5 = ["dog", "cat"];
// console.log(val5);
// val5[0] = "bird";
// console.log(val5);
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "Mike";
// const age = 29;

// // 従来の方法
// const msg1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(msg1);
// // テンプレート文字列を使用
// const msg2 = `私の名前は${name}です。年齢は${age}です。2`;
// console.log(msg2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

// const func22 = (str) => str;
// console.log(func22("func2-2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/*
 * 分割代入
 */
// const myProfile = {
//   name: "Mike",
//   age: 29
// };
// const msg1 = `名前は${myProfile.name}です。年齢は${myProfile.age}`;
// console.log(msg1);

// const { name, age } = myProfile;
// const msg2 = `名前は${name}です。年齢は${age}です。`;
// console.log(msg2);

// const myProfile = ["Mike", 29];
// const msg3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。３`;
// console.log(msg3);

// const [name, age] = myProfile;
// const msg4 = `名前は${name}です。年齢は${age}です。4`;
// console.log(msg4);

/*
 * デフォルト値、引数など
 */
// const sayHello = (name) => console.log(`こんにちは、${name}さん！`);
// sayHello("Mike");
// sayHello();

// const sayHello = (name = "Guest") => console.log(`こんにちは、${name}さん！`);
// sayHello("Mike");
// sayHello();

/*
 * スプレッド構文 "..."
 */

// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [n1, n2, ...arr3] = arr2;
// console.log(n1);
// console.log(n2);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/*
 * mapやfilterを使った配列の処理（forを使わない)
 */
const nameArr = ["Mike", "Tom", "Ben"];

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は、${nameArr[index]}です。`);
// }

// nameArr.map((name, index) =>
//   console.log(`${index + 1}番目は、${nameArr[index]}です。2`)
// );

// const newNameArr = nameArr.map((name) => {
//   if (name === "Ben") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(nameArr);
// console.log(newNameArr);

/*
 * 三項演算子
 */
// const val1 = 1 > 0 ? 'True!' : 'false';
// console.log(val1);

// // const num = 1300;
// const num = "1300";

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を設定してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100をこえました" : "許容範囲内です";
// };

// console.log(checkSum(50, 40));
// console.log(checkSum(50, 60));

/*
 * 論理演算子の本当の意味
 */
// const flg1 = true;
// const flg2 = false;

// if (flg1 || flg2) {
//   console.log("1か2はtrueです");
// }
// if (flg1 && flg2) {
//   console.log("1か2はtrueです");
// }

// \\ は、左側がfalseならば右側を返す
const num = 200;
const fee = num || "金額未設定です";
console.log(fee);

// && は、左側がtrueならば右側を返す
const num2 = 100;
const fee2 = num2 && "なにか設定されました";
console.log(fee2);
