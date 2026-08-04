const btn = document.getElementById('btn');
const img = document.getElementById('sliding-img');

// ボタンクリック
btn.addEventListener('click', function() {
  
  // すでに表示されているときに隠す
  if (img.classList.contains('show')) {
    img.classList.remove('show');
    img.classList.add('hidden');
    btn.textContent = 'もう一度呼ぶ';
  } else {
    // いない場合はスライド
    img.classList.remove('hidden');
    img.classList.add('show');
    btn.textContent = '濡れた犬が来てくれました';
  }

});