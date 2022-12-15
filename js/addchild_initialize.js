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
		const newName = document.getElementById("new-name").value;
		const newOffice = document.getElementById("new-office").value;
		let message = 'program error. no message.';
		
		if(newOffice==='smileday'){
			message = '[児童名]\n' + newName + '\n[事業所名]\nスマイル\n\n上記で登録しました。\n次回から予定の変更申請にて選択できます。';
		}else if(newOffice==='temu'){
			message = '[児童名]\n' + newName + '\n[事業所名]\nてむてむ\n\n上記で登録しました。\n次回から予定の変更申請にて選択できます。';
		}else if(newOffice==='hoya'){
			message = '[児童名]\n' + newName + '\n[事業所名]\nほやほや\n\n上記で登録しました。\n次回から予定の変更申請にて選択できます。';
		}else if(newOffice==='naru'){
			message = '[児童名]\n' + newName + '\n[事業所名]\nなるなる\n\n上記で登録しました。\n次回から予定の変更申請にて選択できます。';
		}
		
		sendText(message);
		return false;
	});
});
