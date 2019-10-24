//import  '@babel/polyfill'
import './frame/frame'
import './business/home'
import './business/course'
import './business/works'
import './business/about'
import './business/team'
//用户缩放操作处理,重新同步content,整个li会重新计算;
//（重点：通过css设置的样式，在缩放时会自动渲染，但是写在js中的样式（例如尺寸，位置等）就不会重新渲染.必须要重新执行一遍；
window.onresize=function () {
  var liNodes = document.querySelectorAll("html body #app .head .headMain .nav .item");
  var homeNode = liNodes[0];
  var arrow = document.querySelector("html body #app .head .headMain .arrow");
  var contentLiNodes = document.querySelectorAll("html body #app .content .list li");
  var contentNode = document.querySelector("html body #app .content");
  var pointNodes = document.querySelectorAll("html body #app .content .points li");
  contentLiNodes.forEach((liNode)=>{
    liNode.style.height = contentNode.offsetHeight + "px";
  });
  arrow.style.left = (homeNode.offsetLeft + (homeNode.offsetWidth/2) - (arrow.offsetWidth/2) )+"px";
};
