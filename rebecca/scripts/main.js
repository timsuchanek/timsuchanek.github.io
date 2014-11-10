var intro = document.querySelector('.intro');

function setIntroHeight() {
  intro.style.height = window.innerHeight + 'px';
}

setIntroHeight();

(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/de_DE/sdk.js#xfbml=1&appId=637216942992078&version=v2.0";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));