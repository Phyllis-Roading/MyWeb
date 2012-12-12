window.addEvent =function(element,event,fn){
  if(element.addEventListener)
  {
	  element.addEventListener(event,fn,false);
	  
  }
  else if(element.attachEvent){
     element.attachEvent("on"+event, function(){ fn.call(o) });
     
   }
}
function tip(title,isInfo,id)
{
  this.title=title;
  this.isInfo=isInfo;
  this.id=id;
  this.tipY_Dom=document.getElementById(id+"_check_div_Y");
  
}
tip.prototype=(function()
{
	//生成合适的Tip的内部函数
    function genTip(id,title,isInfo)
	{
     if(isInfo=="judge")
     {
         if(judge(id))
         {
             document.getElementById(id+"_check_div_Y").innerHTML='<img src="picture/Yes.jpg" alt="" />';
         }
         else
         {
             document.getElementById(id+"_check_div_N").innerHTML='<div style="float:left"><div style="float: left">'+
             '<img src="picture/No.jpg" alt="" /></div><img src="picture/xiaojiantouY_'+id+'.jpg" alt="" />'+
             '</div><div class="'+id+'_tip_N"><span style="padding-left: 5px">'+title+'</span></div>';
         }
      
      }
	 else
	 {
	     document.getElementById(id+"_tip").innerHTML='<div style="float: left"><img src="picture/xiaojiantouW_'+id+'.jpg" alt="" /></div>'+
	     '<div class="'+id+'_tip"><span style="padding-left: 5px">'+title+'</span></div>';
	 }
	}

	//王华杰 不能在此处应用this
	//alert(this.title+" in closure");
	return {
        showTip:function()
		{
			genTip(this.id,this.title,this.isInfo);
			document.getElementById(this.id).style.borderTopColor="black";
			document.getElementById(this.id).style.borderLeftColor="black";
            document.getElementById(this.id+"_tip").style.display="block";
			document.getElementById(this.id+"_check_div_Y").style.display="none";
			document.getElementById(this.id+"_check_div_N").style.display="none";
			if(this.id=="mail" && document.getElementById(this.id).value!="")
             {
                  mail_box_a_follow();
             }

		},
		hideTip:function()
		{
			genTip(this.id,this.title,this.isInfo);
			document.getElementById(this.id).style.borderTopColor="";
			document.getElementById(this.id).style.borderLeftColor="";
            document.getElementById(this.id+"_tip").style.display="none";
            if(this.id=="mail"){document.getElementById(this.id+"_box").style.display="none";}else{}
            if(judge(this.id))
            {
               document.getElementById(this.id+"_check_div_Y").style.display="block";
            }
            else if(document.getElementById(this.id).value==""){}
			else
            {
               document.getElementById(this.id+"_check_div_N").style.display="block";
            }
		}
	}
})();


	function judge(id)
	{
		var result;
	   if(id=="mail")
	   {
	       if(document.getElementById(id).value.indexOf("@qq.com")>0 || document.getElementById(id).value.indexOf("@126.com")>0 
             || document.getElementById(id).value.indexOf("@163.com")>0 || document.getElementById(id).value.indexOf("@sina.com")>0 
             || document.getElementById(id).value.indexOf("@sina.cn")>0 || document.getElementById(id).value.indexOf("@hotmail.com")>0 
             || document.getElementById(id).value.indexOf("@gmail.com")>0 || document.getElementById(id).value.indexOf("@sohu.cn")>0 
             || document.getElementById(id).value.indexOf("@yahoo.cn")>0 || document.getElementById(id).value.indexOf("@139.cn")>0)
             {
                   result=true;
             }
             else{result=false;}
             
	   }
	   else if(id=="pwd")
	   {
	       if(document.getElementById(id).value.length>=6 && document.getElementById(id).value.length<=20){result=true;}
	       else{result=false;}
            
	   }
	   else
	   {
	       for(var i=0;i<document.getElementById(id).value.length;i++) 
           {
               result=document.getElementById(id).value.charCodeAt(i)>=10000 ;
            }
           if(result && (document.getElementById(id).value.length==3||document.getElementById(id).value.length==2)){result=true;}
	       else{ result=false;}
        }
	   return result;
	}



function prepareTip()
 {
    //邮箱操作
	var mail_event=document.getElementById("mail");
	window.addEvent(mail_event,'blur',blurFn);
	window.addEvent(mail_event,'focus',focusFn);
	window.addEvent(mail_event,'keyup',mail_box_a_follow);
	//密码操作
	var pwd_event=document.getElementById("pwd");
	window.addEvent(pwd_event,'blur',blurFn);
	window.addEvent(pwd_event,'focus',focusFn);
	//用户名操作
	var user_name_event=document.getElementById("user_name");
	window.addEvent(user_name_event,'focus',focusFn);
	window.addEvent(user_name_event,'blur',blurFn);
	/* 暂时注销掉
	var n=document.getElementById("name");
	window.addEvent(n,'blur',blurFn);
	window.addEvent(n,'focus',focusFn);
	var p=document.getElementById("password");
	window.addEvent(p,'blur',blurFn);
	window.addEvent(p,'focus',focusFn);
	*/
 }
 function mail_box_a_follow()
{
    document.getElementById("mail_box").style.display="block";
    var mail_txt=document.getElementById("mail").value;
    if( mail_txt.indexOf("@")<0 )
    {
        document.getElementById("mail_qq").innerHTML=mail_txt+"@qq.com";
        document.getElementById("mail_126").innerHTML=mail_txt+"@126.com";
        document.getElementById("mail_163").innerHTML=mail_txt+"@163.com";
        document.getElementById("mail_sinaM").innerHTML=mail_txt+"@sina.com";
        document.getElementById("mail_sinaN").innerHTML=mail_txt+"@sina.cn";
        document.getElementById("mail_hotmail").innerHTML=mail_txt+"@hotmail.com";
        document.getElementById("mail_gmail").innerHTML=mail_txt+"@gmail.com";
        document.getElementById("mail_sohu").innerHTML=mail_txt+"@sohu.cn";
        document.getElementById("mail_yahoo").innerHTML=mail_txt+"@yahoo.cn";
        document.getElementById("mail_139").innerHTML=mail_txt+"@139.cn";                 
     }
}
 function blurFn()
 {
	var title;
	switch(this.id)
	{
	  case "mail":
		   title="请填写有效的电子邮箱";
		   break;
	  case "pwd":
		   title="密码应该由6-20个字母、数字或特殊字符组成";
		   break;
	  case "user_name":
		   title="请填写你的真实中文姓名";
		   break;
	}
	var t=new tip(title,"judge",this.id);
	//先关闭原来的info tip
	
	//如果有错误的时候开启 error tip
	t.hideTip();
 }
 function checkFormat(o)
 {
	// o 是要检查格式的dom对象
	var x=judge(o.id);
	return x;
 }
 function focusFn()
 {
	var title;
	switch(this.id)
	{
	  case "mail":
		   title="请填写有效的电子邮箱,推荐使用<br /><i>QQ邮箱</i>";
		   break;
	  case "pwd":
		   title="由6-20个字母、数字或特殊字符组成";
		   break;
	  case "user_name":
		   title="请填写你的真实姓名";
		   break;
	}
	var t=new tip(title,"original",this.id);
	t.showTip();
 }