function save(title, url){
	if(document.all){
		window.external.AddFavorite(url, title);
	}else if(window.sidebar){
		window.sidebar.addPanel(title, url, "");
	}
}