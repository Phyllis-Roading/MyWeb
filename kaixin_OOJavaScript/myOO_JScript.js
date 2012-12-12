//解决浏览器兼容问题
window.addEvent =function(element,event,fn){
  if(element.addEventListener)
  {
	  element.addEventListener(event,fn,false);
	  
  }
  else if(element.attachEvent){
     element.attachEvent("on"+event, function(){ fn.call(o) });
     
   }
}
//*****************************************
function event_tip(M_id)
{
    this.txt=document.getElementById(M_id);
    this.hiding=document.getElementById(S_id);
}
event_tip.prototype.focusFn=function(M_id)
{
    var str=M_id+"_tip";
    document.getElementById(str).style.display="block";
}

function abc()
{
var MAIL=new event_tip("mail");
window.addEvent(this.txt,focus,focusFn);
}