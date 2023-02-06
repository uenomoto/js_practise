// ↓これはこのファイル内だけの変数になるグローバル変数汚染防止
(()=>{
// ここに命令を書く
const orange = 120;
const apple = 120;

if(orange < apple){
  alert("みかんの値段はりんごより安い");
} else if(orange == apple){
  alert("みかんとりんごが同じ値段");
} else{
  alert("みかんの値段がりんごより高い");
}

// 水温を入力する
const water = -1;
// 水温が0度以下かどうかを判定する
  if(water<=0){
// 0度以下の場合、"freeze"を出力する
    alert("freeze");
    console.log("凍ってます");
  } else{
// 0度より大きい場合、水温を出力する
   alert(water);
   console.log("凍ってません");
  }

})();

