function Navigation(data) {
    var hide = document.querySelector('.hide');
    var ol = hide.children[0];
    var liAll = ol.children;
    var a1 = liAll[0].children;
    var a2 = liAll[1].children;
    var a3 = liAll[2].children;
    var a4 = liAll[3].children;
    var a5 = liAll[4].children;
    var a6 = liAll[5].children;
    var a7 = liAll[6].children;
    var a8 = liAll[7].children;
    for(var i=0;i < a1.length;i++){
        a1[i].innerHTML = data.title[i];
    }
    for(var i=0;i < a2.length;i++){
        a2[i].innerHTML = data.manage[i];
    }
    for(var i=0;i < a3.length;i++){
        a3[i].innerHTML = data.crowd[i];
    }
    for(var i=0;i < a4.length;i++){
        a4[i].innerHTML = data.master[i];
    }
    for(var i=0;i < a5.length;i++){
        a5[i].innerHTML = data.white[i];
    }
    for(var i=0;i < a6.length;i++){
        a6[i].innerHTML = data.pay[i];
    }
    for(var i=0;i < a7.length;i++){
        a7[i].innerHTML = data.insurance[i];
    }
    for(var i=0;i < a8.length;i++){
        a8[i].innerHTML = data.stock[i];
    }
function hi(){
    var hide = document.querySelector('.hide');
    var nav_bottom = document.querySelector('.nav_bottom');
    var liAll = document.querySelectorAll('.nav_bottom ul li');;
    for(var i=0;i < liAll.length;i++){
       liAll[i].onmouseover=function(){
        nav_bottom.style.overflow = 'visible';
       }
    }   
    nav_bottom.onmouseleave=function(){
        nav_bottom.style.overflow = 'hidden';
      }
}
hi();
}