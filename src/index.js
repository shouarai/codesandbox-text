/**
 * 変数
 */
//var 上書き　再定義可能
//let 上書き可能　再定義不可能
//const 上書き、再定義不可能

//constで定義してオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "じゃけぇ",
//   age: 28
// };
// val4.name = "jaka";
// val4.address = "hiroshima";
// val4.age = 33;

// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "dd";
// console.log(val5);

//テンプレート構文
// const name = "じゃけぇ";
// const age = 38;

// console.log(`おれは${name}、年齢は${age}だ`);

/**
 * アロー関数
 */

//従来の関数
// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));
//アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("func2です"));

/**
 * 分割代入
 */
//オブジェクト
// const myprofile = {
//   name: "じゃけぇ",
//   age: 28
// };

// const { name, age } = myprofile;
// const message2 = `名前${name}です。年齢は${age}です。`;
// console.log(message2);

//配列
// const myprofile = ["じゃけぇ", 28];
// const [name, age] = myprofile;
// const message3 = `名前${name}です。年齢は${age}です。`;
// console.log(message3);

/**
 * デフォルト値、引数など
 * name = "ゲスト"で初期値を設定できる
 * sayHello();に引数がある場合は初期値は入らない
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello();

/**
 * スプレッド構文
 * 要素の展開　[1,2]が1,2で展開される
 */
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

/**
 * まとまめる　分割代入で残りをまとめて代入する時にスプレッド構文が使用できる
 */
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

/**
 *  配列のコピー、結合
 */
//コピー
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4];
console.log(arr6);

//結合
const arr7 = [...arr4, ...arr5];
console.log(arr7);

/**
 * 結合をconst arr7=arr4でやってしまうと
 * arr7[0]=100とやるとarr4の値も変わってしまう
 */
