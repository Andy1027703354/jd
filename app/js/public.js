//判断一个数是否是素数
function isPrime(num){
	for (var i = 2; i < num; i++) {//234567
		if(num % i == 0){
			return false;
		}
	}
	return true;
}
//判断一个数是否是完全数
function isPerfectNum(num){
	var sum = 0;
	for (var i = 1; i < num; i++) {
		if(num % i == 0){
			sum += i;
		}
	}
	if(sum == num){
		return true;
	}
	return false;
}
//获取min-max之间的随机整数
function getRand(min,max){
	return parseInt(Math.random()*(max-min+1) + min);
}
//通过id获取元素对象
function $id(id){
	return document.getElementById(id);
}
//获取十六进制随机颜色值。
function getColor(){
	var str = "0123456789abcdef";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		var rand = getRand(0,15);
		//console.log(str.charAt(rand));
		color += str.charAt(rand);
	}
	return color;
}
//随机获取验证码
function getYZM(num){//4
	var str = "";
	for (var i = 0; i < num; i++) {
		var rand = getRand(48,122);
		//console.log(String.fromCharCode(rand));
		if((rand >= 48 && rand <= 57) || (rand >= 65 && rand <= 90) || (rand >= 97 && rand <= 122)){
			str += String.fromCharCode(rand);
		}else{
			i--;
		}
	}
	return str;
}
//时间中文化
function dateToString(date){//date是一个时间对象
	var arr = ["日","一","二","三","四","五","六"]
	var str = "";//xxx年xx月xx日 xx时xx分xx秒 星期x；
	var y = date.getFullYear();
	var m = date.getMonth()+1;
	var d = date.getDate();
	var h = date.getHours();
	var min = date.getMinutes();
	var s = date.getSeconds();
	var w = date.getDay();

	str += y + "年" + getdb(m) + "月" + getdb(d) + "日 ";
	str += getdb(h) + ":" + getdb(min) + ":" + getdb(s) + " ";
	str += "星期" + arr[w];
	
	return str;
}
function getdb(num){
	//num=3
	return num < 10 ? 0 + "" + num : num;
}
//获取两处时间相差的秒数
function dif(prevTime,nextTime){
	return (nextTime.getTime() - prevTime.getTime())/1000;
}
//把新节点插入到一个节点的后面
function insertAfter(newEle,target){
	var parentEle = target.parentNode;
	//两种情况
	//目标节点最后一个子节点
	if(parentEle.children[parentEle.children.length-1] === target){
		//直接把新节点添加到target的父节点的最后。appendChild();
		parentEle.appendChild(newEle);
	}else{
		//目标节点不是最后一个子节点
		//把新节点insertBefor()的方式，插入到目标节点的下一个节点的前面
		parentEle.insertBefore(newEle,target.nextElementSibling);
	}
		
};
//跨浏览器实现通过className获取元素集合
function getByClassName(cName){
	var arr = [];
	var ele = document.getElementsByTagName("*");
	for (var i = 0; i < ele.length; i++) {
		if(ele[i].className === cName){
			arr.push(ele[i]);
		}
	}
	return arr;
}
//得到不包含文本的元素
function getChildren(container){
	//所有包含文本节点的元素集合
	var elements = container.childNodes;
	var arr = [];
	for (var i = 0; i < elements.length; i++) {
		if(elements[i].nodeType == 1){
			arr.push(elements[i]);
		}
	}
	return arr;
}
//跨浏览器兼容ie8，获取事件对象的button属性
function getButton(e){
	var button = e.button;
	if(window.event){//低版本ie
		switch(button){
			case 1:
				button = 0;
				break;
			case 4: 
				button = 1;
				break;
			case 2:
				button = 2;
				break;
		}
	}
	return button;
}
//阻止事件冒泡兼容ie8
function stopProp(e){
	if(e.stopPropagation){//高版本浏览器
		e.stopPropagation();
	}else{//ie8
		e.cancelBubble = true;
	}
}
//阻止事件默认行为兼容ie8
function preventDef(e){
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
}
//事件监听兼容ie8
function addEvent(ele,even,callback){
	if(ele.addEventListener){//高版本浏览器
		ele.addEventListener(even,callback);
	}else{//ie8
		ele.attachEvent("on"+even,callback);
	}
}