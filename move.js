function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}else
	{
		return getComputedStyle(obj,false)[name];
	}
}

function startmove(obj,json,fn)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var bStop=true;
		for(var attr in json)
		{
		var cure=0
             if(attr=="opacity")
		{
		cure=Math.round(parseFloat(getStyle(obj,attr))*100)  //attr表示属性
		}else
		{
		cure=parseInt(getStyle(obj,attr));
		}
		var speed=(json[attr]-cure)/6;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(cure!==json[attr])
		{
			bStop=false;
		}
			if(attr=='opacity')
			{
				obj.style.filter='alpha(opcity:'+cure+speed+')';
				obj.style.opacity=(cure+speed)/100;
			}else{
				
			obj.style[attr]=cure+speed+'px';
			
			}
		}
		if(bStop)
		{
			clearInterval(obj.timer);
			if(fn)fn();
		}
		},30);
}