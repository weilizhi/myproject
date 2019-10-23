export  default  function (index) {
  //切换nav
  var liNodes = document.querySelectorAll('html body #app .head .headMain .nav .item');
  var arrow=document.querySelector('html body #app .head .headMain .arrow');
  for (var j = 0; j < liNodes.length; j++) {
    liNodes[j].classList.remove('active')//先移除再添加，不然会一直都是添加状态
  }
  liNodes[index].classList.add('active');
  //同步小箭头
  arrow.style.left= (liNodes[index].offsetLeft+(liNodes[index].offsetWidth/2)-(arrow.offsetWidth/2)) +'px';

}
