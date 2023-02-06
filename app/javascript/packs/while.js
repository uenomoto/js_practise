(()=>{
  // マックスは１００まで
  const max = 100;
  let num = 1;
  let count = 0;
  let multiplier = 2;

  while(num < max){
    num = num * multiplier;
    count++;
  }
  alert(`${multiplier}を掛け続けて${max}を超えるまでに必要な数は${count}回です。`);

})();
