function contentOnFocus(){
	var text = '请输入要搜索的关键字';
	var txt = document.getElementById("search").value;
	if(text==txt){
		document.getElementById("search").value = '';
		document.getElementById("search").style.color = "#000";
	}
}

function contentOnblur(){
	var text = document.getElementById("search").value;
	if(text==''||text==null){
		document.getElementById("search").value = '请输入要搜索的关键字';
		document.getElementById("search").style.color = "#bcdbde";
	}
}