
// ↓sort()関数の使用例(関数定義を分離) リスト3
  // 金額の配列
var array_price = [1280,1980,1580,980,1680,1780];

  // 値が小さい順に並び替える比較関数
function desc_order(a,b) {
  if(a<b){return -1;} // aを持つ要素はbを持つ要素より手前
  if(a == b){return 1;} // aを持つ要素はbを持つ要素よりも後ろ
  return 0; // 順番は同じ
}

  // 安い順にソート
array_price.sort(desc_order);

  // 並び替えた結果を確認
console.log(array_price); // => [980,1280,1580,1780,1980]
// ↑sort()関数の使用例(関数定義を分離) リスト3


// ↓シンプルな比較関数 リスト4
function desc_order(a,b) {
  return a - b;
}
// ↑シンプルな比較関数 リスト4


// ↓シンプルな記述 リスト5
  // 金額の配列
var array_price = [1280,1980,1580,980,1680,1780];

  // 並び替え
array_price.sort(function(a,b){
  return a - b;
});

  // 並び替えた結果を確認
console.log(array_price); // => [980,1280,1580,1780,1980]
// ↑シンプルな記述 リスト5


// ↓オブジェクトの並び替え リスト6
  // 商品オブジェクトの配列
var products = [
  {ID:1, price: 1280},
  {ID:2, price: 1980},
  {ID:3, price: 1580},
  {ID:4, price: 980},
  {ID:5, price: 1680},
  {ID:6, price: 1780}
];

  // 安い順にソート
products.sort(function(a,b) {
  return a.price -  b.price
})

  // 並び替えた結果を確認
console.log(products);
// ↑オブジェクトの並び替え リスト6



