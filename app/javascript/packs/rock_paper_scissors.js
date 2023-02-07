(()=>{

  // メイン部分
  let alertString;

  // 作成した関数を呼び出し、変数へ格納
  alertString = addString("こんにちは！！！");

  //変数の中身をアラートで表示する
  alert(alertString);

  function addString(str){
    alertString = `やあ！${str}`

    return alertString
  }



    // じゃんけんの手を入力してもらうプロンプト欄を生成
  const user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
  // グー、チョキ、パー以外の文字かつ空欄でOK押すとこのアラートが出る
  while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
  }


  // じゃんけんの手をランダムに作成する関数を呼び出す
  const js_hand = getJShand();

  // ユーザの手とJavaScriptのじゃんけんの手を比べる関数を呼び出し、結果をjudgeに入れる
  const judge = winLose(user_hand, js_hand);


  // 結果を表示する（キャンセルを押すとまたチャレンジとアラートが出る）
  if(user_hand == null){
    alert("またチャレンジしてね！");
  }else{
    alert(`あなたの選んだ手は${user_hand}です。\nJavaScriptの選んだ手は${js_hand}です。\n結果は${judge}です。`);
  }

  // ランダムでじゃんけんの手を作成する関数
  function getJShand(){
    const js_hand_num = Math.floor( Math.random() * 3 );
    let hand_name;

    if(js_hand_num == 0){
      hand_name = "グー";
    } else if(js_hand_num == 1){
      hand_name = "チョキ";
    } else if(js_hand_num == 2){
      hand_name = "パー";
    }

    return hand_name;
  }

  // ユーザの手とJavaScriptのじゃんけんの手を比べる関数
  function winLose(user, js){
    let winLoseStr;

    if(user == "グー"){
      if(js == "グー"){
        winLoseStr = "あいこ";
      } else if(js == "チョキ"){
        winLoseStr = "勝ち";
      } else if(js == "パー"){
        winLoseStr = "負け";
      }
    } else if(user == "チョキ"){
      if(js == "グー"){
        winLoseStr = "負け";
      } else if(js == "チョキ"){
        winLoseStr = "あいこ";
      } else if(js == "パー"){
        winLoseStr = "勝ち";
      }
    } else if(user == "パー"){
      if(js == "グー"){
        winLoseStr = "勝ち";
      } else if(js == "チョキ"){
        winLoseStr = "負け";
      } else if(js == "パー"){
        winLoseStr = "あいこ";
      }
    }

    return winLoseStr;
  }


})();
