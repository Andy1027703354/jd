var nav = (function () {
    var gou,
        flag,
        go_look,
        timer,
        nav_top,
        obj;
    return {
        init(obj) {
            obj = document.querySelector(obj);
            gou = obj.querySelector('#gou');
            go_look = obj.querySelector('.go-look');
            nav_top = obj.querySelector('.nav_top');
            flag = true;
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
                if (flag == false) {
                    //clearTimeout(timer);
                    flag = true;
                    gou.src = 'img/gou.png';
                    go_look.style.display = 'none';
                }
            }
        },
        autoplay() {

        }
    }
}())
nav.init('.nav')