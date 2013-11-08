function mostraPost(){
  var id_post = $(this).attr('id');
  $.ajax({
    url:"http://faccampblog.appspot.com/posts?id=" + id_post,
    dataType: 'jsonp',
    success: function(posts){
      $("#lista_de_posts").html("");
      $.each(posts,
        function(contador, post){
          var div = $("<div>");
          div.attr("class", "post");

          var titulo = $("<h1>").html(post.titulo);
          div.append(titulo);

          var subtitulo = $("<h2>").html(post.subtitulo);
          div.append(subtitulo);

          var autor = $("<span>").html(post.autor);
          div.append(autor);

          var conteudo = $("<div>").html(post.conteudo);
          div.append(conteudo);

          $("#lista_de_posts").append(div);
        }
      );
    }
  });
}
function excluirPost(){
  var id = $(this).attr('id_post');
  $.ajax({
    url: "http://faccampblog.appspot.com/posts?deletar=" + id,
    dataType: 'jsonp',
    success: function(){
      alert("O post foi excluído com sucesso!");
      window.location = window.location;
    }
  });
}
function listaPosts(){
  var valor = $("#campo_busca").val();
  $.ajax({
    url:"http://faccampblog.appspot.com/posts?q=" + valor,
    dataType: 'jsonp',
    success: function(posts){
      $("#lista_de_posts").html("");
      $.each(posts,
        function(contador, post){
          var div = $("<div>");
          div.attr("class", "post");

          var titulo = $("<h1>").html(post.titulo);
          titulo.attr('id', post.id);
          titulo.click(mostraPost);
          div.append(titulo);

          var botao = $("<button>").html("Excluir");
          botao.attr('id_post', post.id);
          botao.click(excluirPost);
          div.append(botao);

          $("#lista_de_posts").append(div);
        }
      );
    }
  });
}

listaPosts();

$("#botao").click(listaPosts);
