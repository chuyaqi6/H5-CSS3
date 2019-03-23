var btn = document.getElementById('btn');
var div=document.getElementById("div");
function saveStorage(){
    var flg=true;
    var text=document.getElementById("search").value;
    for(var i = 0; i < localStorage.length ;i++){
        if(localStorage.getItem(localStorage.key(i)) == text)
            flg=false;
    }
    if (flg) {
        var key=new Date()
        localStorage.setItem(key, text);
        div.innerHTML+="<p>"+localStorage.getItem(key)+"</p>";
    }
    flg=true;
}
function clearStorage() {
    if(window.confirm("是否清除浏览记录？")){
        localStorage.clear();
        div.innerHTML="";
    }
}
