function buscaPost() {
  var id_do_post = $("#id_do_post").val();

  $.ajax({
    url: "http://faccampblog.appspot.com/posts?id=" + id_do_post,
    dataType: 'jsonp',
    success: function(posts) {
      $.each(posts, function(contador, post){
        $("#titulo").val(post.titulo);
        $("#subtitulo").val(post.subtitulo);
        $("#autor").val(post.autor);
        $("#conteudo").val(post.conteudo);
      });
    }
  });
}

function enviaFormulario() {
  var titulo = $("#titulo").val();
  var subtitulo = $("#subtitulo").val();
  var autor = $("#autor").val();
  var conteudo = $("#conteudo").val();
  var id = $("#id_do_post").val();

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
    {id: id, titulo: titulo, conteudo: conteudo, subtitulo: subtitulo, autor: autor},
    function(){
      alert("Dados gravados com sucesso!");
    }
  );
}
$("#gravar").click(enviaFormulario);
$("#buscar").click(buscaPost);
