window.onload = function () {
  var liNodes = document.querySelectorAll('html body #app .head .headMain .nav .item')
  for (var i = 0; i < liNodes.length; i++) {
    (function () {
      liNodes[i].onclick = function () {
        for (var j = 0; j < liNodes.length; j++) {
          liNodes[j].classList.remove('active')
        }
        liNodes[i].classList.add('active');
      }
    })(i)

  }
};
