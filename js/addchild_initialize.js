const id = "1657662321-aDGpzkNK";
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

const params = (new URL(document.location)).searchParams;
const key = params.get('key');

$(function(){	
	$('form').submit(function(){
		
		const genre = document.getElementById("genre").value;
		const freetxt= document.getElementById("textarea").value;
		let message="None. This is not message.";
		/*
		if(genre==='day'){
			message = '[放課後デイサービスへのご相談・ご意見]\n\n(本文)' + freetxt + '(本文終わり)\n\n上記の内容で送信しました。';
		}else if(genre==='service'){
			message = '[他のサービスに関するご相談]\n\n(本文)' + freetxt + '(本文終わり)\n\n上記の内容で送信しました。';
		}else if(genre==='care'){
			message = '[子育てについてのご相談]\n\n(本文)' + freetxt + '(本文終わり)\n\n上記の内容で送信しました。';
		}else if(genre==='else'){
			message = '[その他]\n\n(本文)' + freetxt + '(本文終わり)\n\n上記の内容で送信しました。';
		}
		*/
		sendText(message);
		return false;
	});
});
