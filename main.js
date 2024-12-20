$(document).ready(function () {
    const endPoint = `https://api.github.com/users/Joaodemellooliveira`;

    fetch(endPoint)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json){
            $('#avatar').attr('src', json.avatar_url);
            $('#name').html(json.name);
            $('#username').html(`@${json.login}`);
            $('#reposNumber').html(json.public_repos);
            $('#followers').html(json.followers);
            $('#following').html(json.following);
            $('#link').attr('href', json.html_url);
        })
        .catch(function(erro) {
            alert('Ocorreu um erro ao receber os dados do perfil do gitHub, tente novamente mais tarde')
        })
});