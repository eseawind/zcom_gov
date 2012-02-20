function nTabs(thisObj,Num){
if(thisObj.className == "on")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++)
{
  if (i == Num)
  {
   thisObj.className = "on"; 
      document.getElementById(tabObj+"_Content"+i).style.display = "block";
  }else{
   tabList[i].className = "on1"; 
   document.getElementById(tabObj+"_Content"+i).style.display = "none";
  }
} 
}