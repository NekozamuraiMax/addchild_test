document.getElementById('submit').addEventListener('click', () => {
	if(window.confirm('登録内容を更新しますか？')){
		return true;
	}else event.preventDefault();
}, false);