function enviaFormulario() {
var titulo = $("#titulo").val();
var subtitulo = $("#subtitulo").val();
var autor = $("#autor").val();
var conteudo = $("#conteudo").val();

var erros = "";
if (titulo == "") {
  $("#titulo").addClass('erro');
  erros = "O titulo nao foi preenchido!";
}
if (subtitulo == "") {
  erros = erros + "O subtitulo nao foi preenchido!";
}
if (conteudo == "") {
  erros = erros + "O conteudo nao foi preenchido!";
}

if(erros != ""){
  alert(erros);
  return false;
}

$.post("http://faccampblog.appspot.com/posts",
  {titulo: titulo, conteudo: conteudo, subtitulo: subtitulo, autor: autor},
  function(){
    alert("Dados gravados com sucesso!");
  }
);
}
$("#gravar").click(enviaFormulario);
