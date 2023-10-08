$(document).ready(function () {
  const endpoint = "https://api.github.com/users/lichtle";

  $.ajax(endpoint).done(function (resposta) {
    console.log(resposta);
    $("#name").text(resposta.name);
    $("#username").text(resposta.login);
    $("#repos-number").text(resposta.public_repos);
    $("#followers-number").text(resposta.followers);
    $("#following-number").text(resposta.following);
    $("#profile-link").attr("href", resposta.html_url);
    $("#profile-avatar").attr("src", resposta.avatar_url);
  });
});
