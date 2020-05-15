function abrirAjax(){
    var abrir;
    if(window.XMLHttpRequest){
        abrir = new XMLHttpRequest();
    }else
    {
        abrir = ActiveXObject("Microsoft.XMLHTTP");
    }
    return abrir;
}

function carregar(url){
    var ajax = abrirAjax();
    ajax.onreadystatechange = function(){
        if(ajax.readystate == 4 && ajax.status == 200){
            document.getElementById("conteudo").innerHTML = ajax.responseText;

        }
    }
    ajax.open('GET',url,'true');
    ajax.send(null);
}