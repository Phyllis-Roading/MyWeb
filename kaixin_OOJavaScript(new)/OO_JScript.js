
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
	return {
        showTip:function()
		{
			genTip(this.id,this.title,this.isInfo);
			document.getElementById(this.id).style.borderTopColor="black";
			document.getElementById(this.id).style.borderLeftColor="black";
            document.getElementById(this.id+"_tip").style.display="block";
			document.getElementById(this.id+"_check_div_Y").style.display="none";
			document.getElementById(this.id+"_check_div_N").style.display="none";
			if(this.id=="mail" && judge_mail(this.id))
             {
                  document.getElementById(this.id+"_box").style.display="none";
				  document.getElementById(this.id+"_tip").style.display="none";
             }

		},
		hideTip:function()
		{
			genTip(this.id,this.title,this.isInfo);
			document.getElementById(this.id).style.borderTopColor="";
			document.getElementById(this.id).style.borderLeftColor="";
            document.getElementById(this.id+"_tip").style.display="none";
            if(this.id=="mail")
			{
				if(judge(this.id))
				    document.getElementById(this.id+"_box").style.display="none";
				else if (document.getElementById("mail").value==="")
				{
					document.getElementById(this.id+"_box").style.display="none";
				}
			}
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
     
	 function judge_mail(id)
	 {
		 if(document.getElementById(id).value.indexOf("@qq.com")>0 || document.getElementById(id).value.indexOf("@126.com")>0 
             || document.getElementById(id).value.indexOf("@163.com")>0 || document.getElementById(id).value.indexOf("@sina.com")>0 
             || document.getElementById(id).value.indexOf("@sina.cn")>0 || document.getElementById(id).value.indexOf("@hotmail.com")>0 
             || document.getElementById(id).value.indexOf("@gmail.com")>0 || document.getElementById(id).value.indexOf("@sohu.cn")>0 
             || document.getElementById(id).value.indexOf("@yahoo.cn")>0 || document.getElementById(id).value.indexOf("@139.cn")>0)
             {
                   return true;
             }
         else{return false;}
	 }

	function judge(id)
	{
		var result;
	   if(id=="mail")
	   {
	       if(judge_mail(id))
             {
                   result=true;
             }
             else{result=false;}
             
	   }
	   else if(id=="pwd")
	   {
	       if(document.getElementById(id).value.length>5){result=true;}
	       else{result=false;}
            
	   }
	   else if(id=="user_name")
	   {
	       var temp=document.getElementById(id).value; 
           result=temp.charCodeAt(temp.length-1)>=10000 ;
           if(result && (temp.length==3||temp.length==2)){result=true;}
	       else{ result=false;}
       }
       else{result=true;}
        
	   return result;
	}



function prepareTip()
 {
 	

	//导航
	var daohang_event=document.getElementById("daohang");
	window.addEvent(daohang_event,'mouseover',nvgtOccur);
	window.addEvent(daohang_event,'mouseout',nvgtHiding);
	var navigation_event=document.getElementById("navigation");
	window.addEvent(navigation_event,'mouseover',nvgtOccur);
	window.addEvent(navigation_event,'mouseout',nvgtHiding);

	var switch=document.getElementById("gray_background");
	window.addEventListener(switch,"click",light);

    //邮箱操作
    
	var mail_event=$("#mail");
	window.addEvent(mail_event,'focus',focusFn);
	window.addEvent(mail_event,'keyup',mail_box_a_follow);
	window.addEvent(mail_event,'blur',blurFn);

	  //对邮箱box的操作***************************
	     var mail_qq_event=document.getElementById("mail_qq");
         window.addEvent(mail_qq_event,'click',mailChoose);

		 var mail_126_event=document.getElementById("mail_126");
         window.addEvent(mail_126_event,'click',mailChoose);

		 var mail_163_event=document.getElementById("mail_163");
         window.addEvent(mail_163_event,'click',mailChoose);

		 var mail_sinaM_event=document.getElementById("mail_sinaM");
         window.addEvent(mail_sinaM_event,'click',mailChoose);

		 var mail_sinaN_event=document.getElementById("mail_sinaN");
         window.addEvent(mail_sinaN_event,'click',mailChoose);

		 var mail_hotmail_event=document.getElementById("mail_hotmail");
         window.addEvent(mail_hotmail_event,'click',mailChoose);

		 var mail_gmail_event=document.getElementById("mail_gmail");
         window.addEvent(mail_gmail_event,'click',mailChoose);

		 var mail_sohu_event=document.getElementById("mail_sohu");
         window.addEvent(mail_sohu_event,'click',mailChoose);

		 var mail_yahoo_event=document.getElementById("mail_yahoo");
         window.addEvent(mail_yahoo_event,'click',mailChoose);

		 var mail_139_event=document.getElementById("mail_139");
         window.addEvent(mail_139_event,'click',mailChoose);
	 //对邮箱box的操作结束****************************
//************************************************************************
	//密码操作
	var pwd_event=document.getElementById("pwd");
	window.addEvent(pwd_event,'blur',blurFn);
	window.addEvent(pwd_event,'focus',focusFn);

	//用户名操作
	var user_name_event=document.getElementById("user_name");
	window.addEvent(user_name_event,'focus',focusFn);
	window.addEvent(user_name_event,'blur',blurFn);

	//性别操作
	var sexM_event=document.getElementById("sex_M");
	window.addEvent(sexM_event,'click',clickFn);
	var sexW_event=document.getElementById("sex_W");
	window.addEvent(sexW_event,'click',clickFn);

	//生日操作
	var year_event=document.getElementById("year");
	window.addEvent(year_event,'change',date_judge);
    var month_event=document.getElementById("month");
	window.addEvent(month_event,'change',date_judge);
	var day_event=document.getElementById("day");
	window.addEvent(day_event,'change',date_judge);

	//现在情况
	var stateW_event=document.getElementById("working");
	window.addEvent(stateW_event,'click',clickFn);
	var stateS_event=document.getElementById("studying");
	window.addEvent(stateS_event,'click',clickFn);

	//对城市的操作
	var city_event=document.getElementById("city");//城市文本框
	window.addEvent(city_event,'click',cityChoose);
    window.addEvent(city_event,'blur',blurFn);
	var city_bj_event=document.getElementById("bj");//北京
	window.addEvent(city_bj_event,'click',cityChoose);
	var city_shh_event=document.getElementById("shh");//上海
	window.addEvent(city_shh_event,'click',cityChoose);
	var city_tj_event=document.getElementById("tj");//天津
	window.addEvent(city_tj_event,'click',cityChoose);
	var city_chq_event=document.getElementById("chq");//重庆
	window.addEvent(city_chq_event,'click',cityChoose);
	var city_hlj_event=document.getElementById("hlj");//黑龙江
	window.addEvent(city_hlj_event,'click',cityChoose);
	var city_sd_event=document.getElementById("sd");//山东
	window.addEvent(city_sd_event,'click',cityChoose);
	var city_xg_event=document.getElementById("xg");//香港
	window.addEvent(city_xg_event,'click',cityChoose);
	var city_tw_event=document.getElementById("tw");//台湾
	window.addEvent(city_tw_event,'click',cityChoose);
	var city_am_event=document.getElementById("am");//澳门
	window.addEvent(city_am_event,'click',cityChoose);
	var city_hw_event=document.getElementById("hw");//海外
	window.addEvent(city_hw_event,'click',cityChoose);
	var city_box_Close_event=document.getElementById("city_box_Close");//关闭
	window.addEvent(city_box_Close_event,'click',cityChoose);

		
	



    /*二级城市未解决
	var city_hrb_event=document.getElementById("hrb");//黑龙江.哈尔滨
	window.addEvent(city_hrb_event,'click',cityChoose);*/



	/* 暂时注销掉
	var n=document.getElementById("name");
	window.addEvent(n,'blur',blurFn);
	window.addEvent(n,'focus',focusFn);
	var p=document.getElementById("password");
	window.addEvent(p,'blur',blurFn);
	window.addEvent(p,'focus',focusFn);
	*/
 }
  //地球一小时效果
  function light(event)
  {
	var grayBackground=document.getElementById("gray_background");
	var ctx=document.getElementById("gray_background").getContext("2d");
	ctx.fillStyle = '#00f'; 
	ctx.beginPath(); 
	ctx.arc(event.x,event.y,20,0,Math.PI*2,true); 
	ctx.fill(); 
  }

  function nvgtOccur()
  {
	  document.getElementById("navigation").style.display="block";
  }

  function nvgtHiding()
  {
	  document.getElementById("navigation").style.display="none";
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

 function mailChoose()
 {
     document.getElementById("mail").focus();
	 document.getElementById("mail_box").style.display="none";
	 document.getElementById("mail").value=this.innerHTML;
 }
  
 function cityChoose()
 {
	 var city_txt=document.getElementById("city");
	 var city_box=document.getElementById("city_box");
	 var city_S=document.getElementById("city_S");
	 switch(this.id)
	 {
		 case "city":
			 city_box.style.display="block";
             break;
	     case "bj":
			 city_txt.value=this.innerHTML;
		     city_box.style.display="none";
             break;
	     case "tj":
			 city_txt.value=this.innerHTML;
		     city_box.style.display="none";
             break;
	     case "shh":
			 city_txt.value=this.innerHTML;
		     city_box.style.display="none";
             break;
		 case "chq":
			 city_txt.value=this.innerHTML;
		     city_box.style.display="none";
             break;
		case "hlj":
			 city_S.style.display="block";
			 city_S.innerHTML='<span id="hrb" class="city_span">•哈尔滨</span><span id="qqhr" class="city_span">•齐齐哈尔</span><span id="jx" class="city_span">•鸡西</span>'+
			                   '<span id="hg" class="city_span">•鹤岗</span><span id="sys" class="city_span">•双鸭山</span><span id="dq" class="city_span">•大庆</span>'+
			                  '<span id="yc" class="city_span">•伊春</span><span id="jms" class="city_span">•佳木斯</span><span id="hh" class="city_span">•黑河</span>'+
			                   '<span id="qth" class="city_span">•七台河</span><span id="mdj" class="city_span">•牡丹江</span><span id="sh" class="city_span">•绥化</span>';
             break;
		case "sd":
			 city_S.style.display="block";
			 city_S.innerHTML='<span id="jn" class="city_span">•济南</span><span id="dy" class="city_span">•东营</span><span id="ta" class="city_span">•泰安</span>'+
			                   '<span id="qd" class="city_span">•青岛</span><span id="yt" class="city_span">•烟台</span><span id="wh" class="city_span">•威海</span>'+
			                  '<span id="zb" class="city_span">•淄博</span><span id="wf" class="city_span">•潍坊</span><span id="rzh" class="city_span">•日照</span>'+
			                   '<span id="zzh" class="city_span">•枣庄</span><span id="jng" class="city_span">•济宁</span><span id="ly" class="city_span">•临沂</span>';
             break;
		case "xg":
			 city_txt.value=this.innerHTML;
		     city_box.style.display="none";
             break;
		case "tw":
			 city_txt.value=this.innerHTML;
		     city_box.style.display="none";
             break;
		case "am":
			 city_txt.value=this.innerHTML;
		     city_box.style.display="none";
             break;
		case "hw":
			 city_S.style.display="block";
			 city_S.innerHTML='<span id="mg" class="city_span">•美国</span><span id="xjp" class="city_span">•新加坡</span><span id="fg" class="city_span">•法国</span>'+
			                   '<span id="jnd" class="city_span">•加拿大</span><span id="adly" class="city_span">•澳大利亚</span><span id="dg" class="city_span">德国</span>'+
			                  '<span id="rb" class="city_span">•日本</span><span id="xxl" class="city_span">•新西兰</span><span id="ydl" class="city_span">•意大利</span>'+
			                   '<span id="hg" class="city_span">•韩国</span><span id="yg" class="city_span">•英国</span><span id="els" class="city_span">•俄罗斯</span>';
             break;
		case "city_box_Close":
			 city_box.style.display="none";
             break;


		/*case "hrb":
			 city_txt.value=this.innerHTML;
		     city_box.style.display="none";
             break;*/

	 }
 }

 function clickFn()
 {
	 if(this.id=="sex_M"||this.id=="sex_W")
         document.getElementById("sex_check_div_Y").style.display="block";
	 else if(this.id=="working"||this.id=="studying")
         document.getElementById("state_check_div_Y").style.display="block";	
 }

 function date_judge()
 {
	 if (this.id=="year")
	 {
		 document.getElementById("month").value=" ";
	 }
	 else if (this.id=="month")
	 {
		 document.getElementById("day").value=" ";
		 var year=document.getElementById("year").selectedIndex;
         var month=document.getElementById("month").selectedIndex;
    
         switch(month)
         {

             case 01:
             case 03:
             case 05:
             case 07:
		     case 08:
             case 10:
             case 12:
                 document.getElementById("day29").style.display="inline";
                 document.getElementById("day30").style.display="inline";
                 document.getElementById("day31").style.display="inline";
                 break;
            case 04:
            case 06:
            case 09:
            case 11:
                 document.getElementById("day29").style.display="inline";
                 document.getElementById("day30").style.display="inline";
                 document.getElementById("day31").style.display="none";
                 break;
            case 02:
                 if((year%4==0&&year%100!=0)||(year%400==0))
                 {
                     document.getElementById("day29").style.display="inline";
                     document.getElementById("day30").style.display="none";
                     document.getElementById("day31").style.display="none";
                 }
                 else
                 {
                     document.getElementById("day29").style.display="none";
                     document.getElementById("day30").style.display="none";
                     document.getElementById("day31").style.display="none";
                 }
                 break;
         }
	 }
	 else if (this.id=="day")
	 {
		 if(document.getElementById("year").value!="" && document.getElementById("month").value!="")
			 document.getElementById("birthday_check_div_Y").style.display="block";
		 else
			 document.getElementById("birthday_check_div_Y").style.display="none";
	 }
 }