function contentOnFocus(){
	var text = '������Ҫ�����Ĺؼ���';
	var txt = document.getElementById("search").value;
	if(text==txt){
		document.getElementById("search").value = '';
		document.getElementById("search").style.color = "#000";
	}
}

function contentOnblur(){
	var text = document.getElementById("search").value;
	if(text==''||text==null){
		document.getElementById("search").value = '������Ҫ�����Ĺؼ���';
		document.getElementById("search").style.color = "#bcdbde";
	}
}