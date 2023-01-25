const url = new URL(document.location);
const params = new URLSearchParams(url.search);
const id = params.get('id');

window.onload = function(e){
	liff.init({
		liffId: id
	}).then(() =>{
		initializeApp();
	}).catch((err) => {
		window.alert(err);
		console.log('LIFF Initialization failed ', err);
	});
};

function initializeApp() {
    // ログインチェック
    if (liff.isLoggedIn()) {
        //ログイン済

    } else {
        // 未ログイン
        let result = window.confirm("LINE Loginしますか？");
        if(result) {
            liff.login();
        }
    }
}

function sendText(text){
	if(!liff.isInClient()){
		window.alert('This button is unavailable as LIFF is currently being opened in an external browser.');
	}else{
		liff.sendMessages([
			{
			type: 'text',
			text: text
			}
		]).then(function(){
			liff.closeWindow();
		}).catch(function(error){
			window.alert('Failed to send message ' + error);
		});
	}
}

$(function(){	
	$('form').submit(function(){
		const newName = document.getElementById("new-name").value;
		const newOffice = document.getElementById("new-office").value;
		let message = 'program error. no message.';
		
		if(newOffice==='smileday'){
			message = '[追加申請]\n[児童名]\n' + newName + '\n[事業所名]\nスマイル';
		}else if(newOffice==='temu'){
			message = '[追加申請]\n[児童名]\n' + newName + '\n[事業所名]\nてむてむ';
		}else if(newOffice==='hoya'){
			message = '[追加申請]\n[児童名]\n' + newName + '\n[事業所名]\nほやほや';
		}else if(newOffice==='naru'){
			message = '[追加申請]\n[児童名]\n' + newName + '\n[事業所名]\nなるなる';
		}
		
		sendText(message);
		return false;
	});
});
