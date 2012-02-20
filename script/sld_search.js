function contentOnFocus_bs(){
	var text = '请输入您的受理单号';
	var txt = document.getElementById("search_bs").value;
	if(text==txt){
		document.getElementById("search_bs").value = '';
	}
}

function contentOnblur_bs(){
	var text = document.getElementById("search_bs").value;
	if(text==''||text==null){
		document.getElementById("search_bs").value = '请输入您的受理单号';
	}
}