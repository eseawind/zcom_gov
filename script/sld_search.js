function contentOnFocus_bs(){
	var text = '����������������';
	var txt = document.getElementById("search_bs").value;
	if(text==txt){
		document.getElementById("search_bs").value = '';
	}
}

function contentOnblur_bs(){
	var text = document.getElementById("search_bs").value;
	if(text==''||text==null){
		document.getElementById("search_bs").value = '����������������';
	}
}