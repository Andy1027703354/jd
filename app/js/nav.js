var nav = (function () {
    var gou,
        flag = true,
        go_look,
        timer,
        tim,
        nav_top,
        obj;
    return {
        init(obj) {
            obj = document.querySelector(obj);
            gou = obj.querySelector('#gou');
            go_look = obj.querySelector('.go-look');
            nav_top = obj.querySelector('.nav_top');
            this.event();
        },
        event() {
            nav_top.onmouseenter = function (e) {
                e = e || event;
                e.stopPropagation();
                e.preventDefault();
                clearTimeout(timer);
                if (flag) {
                    gou.src = 'img/gou.gif';
                    flag = false;
                }
                timer = setTimeout(() => {
                    go_look.style.display = 'block';
                }, 2000)
            
            }
            nav_top.onmouseleave = function (e) {
                e = e || event;
                e.stopPropagation();
                e.preventDefault();
                tim = setInterval(function(){
                    if (flag == false) {
                        //clearTimeout(timer);
                        timer = setTimeout(() => {
                            go_look.style.display = 'block';
                        }, 2000)
                        gou.src = 'img/gou.png';
                        go_look.style.display = 'none';
                        flag = true;
                    }
                },3000)
                
            }
        },
        autoplay() {

        }
    }
}())
nav.init('.nav')