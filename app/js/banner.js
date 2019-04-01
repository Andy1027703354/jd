class Banner {
    imgshow(obj) {
        obj = document.querySelector(obj);
        var indexbox,
            indexAll,
            imgbox,
            btn,
            timer,
            index = 0;

        function init() {
            imgbox = obj.children[0];
            btn = obj.children[2];
            indexbox = obj.children[1];
            indexAll = indexbox.children;
            for (var i = 0; i < indexAll.length; i++) {
                indexAll[i].index = i;
            }
            imgbox.style.left = -590 + 'px';
            event();
            autoplay();
        }

        function event() {
            indexbox.onclick = (e) => {
                var e = e || event;
                var target = e.target || e.srcElement;
                if (target.nodeName === 'LI') {
                    index = target.index;
                    img();
                    autoplay();
                }
            }
            btn.onclick = (e) => {
                var e = e || event;
                var target = e.target || e.srcElement;
                if (target.className == 'right') {
                    index++;
                    img();
                    autoplay();
                }
                if (target.className == 'left') {
                    index--;
                    img();
                    autoplay();
                }

            }
        }

        function img() {
            if (index > indexAll.length - 1) {
                imgbox.style.left = 0;
                index = 0;
            } else if (index < 0) {
                imgbox.style.left = -(indexAll.length + 1) * 590 + 'px';
                index = indexAll.length - 1;
            }
            for (var i = 0; i < indexAll.length; i++) {
                indexAll[i].className = '';
            }
            indexAll[index].className = 'L';
            animate(imgbox, {
                param: {
                    left: -(index + 1) * 590
                }
            })
        }

        function autoplay() {
            clearInterval(timer);
            timer = setInterval(() => {
                index++;
                img();
            }, 2000)
        }
        init();
    }

}

class Li2 {
    constructor() {
        this.li2 = document.querySelector('.li2');
        this.sec_lubo = this.li2.children[0];
        this.secAll = this.sec_lubo.children;
        this.btn = this.li2.children[1];
        this.index = 0;
        this.flist = this.secAll[0];
        this.last = this.secAll[this.secAll.length - 1];
        this.sec_lubo.appendChild(this.flist.cloneNode(true));
        this.sec_lubo.insertBefore(this.last.cloneNode(true), this.flist);
        this.sec_lubo.style.left = -810 + 'px';
        for (var i = 0; i < this.secAll.length; i++) {
            this.secAll[i].index = i;
        }
    }
    event() {
        var _this = this;
        _this.btn.onclick = (e) => {
            e = e || event;
            var target = e.target || e.srcElement;
            if (target.className === 'right') {
                _this.index++;
                _this.showImg();
            }
            if (target.className === 'left') {
                _this.index--;
                _this.showImg();
            }
        }
    }
    showImg() {
        if (this.index > this.secAll.length - 1 - 2) {
            this.sec_lubo.style.left = 0;
            this.index = 0;
        } else if (this.index < 0) {
            this.sec_lubo.style.left = -((this.secAll.length + 1) - 2) * 810 + 'px';
            this.index = this.secAll.length - 1 - 2;
        }
        animate(this.sec_lubo, {
            param: {
                left: -(this.index + 1) * 810
            }
        })
    }

}

class XiaoLubo {
    constructor() {
        this.xiao_lubo = document.querySelector('.xiao-lubo');
        this.xiao_box = this.xiao_lubo.children[0];
        this.x_index = this.xiao_lubo.children[1];
        this.x_All = this.x_index.children;
        this.index = 0;
        this.timer = null;
        this.xiao_box.style.left = -180 + 'px';
        for (var i = 0; i < this.x_All.length; i++) {
            this.x_All[i].index = i;
        }
        this.autoplay();
    }
    event() {
        this.x_index.onclick = (e) => {
            e = e || event;
            var target = e.target || e.srcElement;
            if (target.nodeName === 'LI') {
                this.index = target.index;
                this.showImg();
                this.autoplay();
            }
        }
    }
    showImg() {
        if (this.index > this.x_All.length - 1) {
            this.xiao_box.style.left = 0;
            this.index = 0;
        }
        for (var i = 0; i < this.x_All.length; i++) {
            this.x_All[i].className = '';
        }
        this.x_All[this.index].className = 'x-red';
        animate(this.xiao_box, {
            param: {
                left: -(this.index + 1) * 180
            }
        })
    }
    autoplay() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.index++;
            this.showImg()
        }, 2000);
    }
}

class CountDown {
    constructor() {
        this.time = document.querySelector('.time');
        this.startTime = new Date();
        this.endTime = new Date("2019/4/10 23:00:00");
        this.s = dif(this.startTime, this.endTime);
        this.timer = null;
        this.h3 = this.time.previousElementSibling;
        this.showTime();
    }
    getHDTime() {
        if (this.s < 0) {
            this.h3.innerHTML = "活动结束";
            return;
        }
        var d = parseInt(this.s / 60 / 60 / 24);
        var h = parseInt((this.s / 60 / 60 / 24 - d) * 24);
        var m = parseInt(((this.s / 60 / 60 / 24 - d) * 24 - h) * 60);
        var second = parseInt((((this.s / 60 / 60 / 24 - d) * 24 - h) * 60 - m) * 60);
        //var str = "距离商品活动结束还剩" + d + "天" + h + "时" + m + "分" + second + "秒";
        this.time.children[0].children[0].innerHTML = getdb(h);
        this.time.children[1].children[0].innerHTML = getdb(m);
        this.time.children[2].children[0].innerHTML = getdb(second);
    }
    showTime() {
        this.timer = setInterval(() => {
            if (this.s < 0) {
                this.time.children[0].children[0].innerHTML = '00';
                this.time.children[1].children[0].innerHTML = '00';
                this.time.children[2].children[0].innerHTML = '00';
                this.h3.innerHTML = "活动结束";
                clearInterval(this.timer);
                return;
            }
            this.s--;
            this.getHDTime();
            //			当s秒数为0时表示活动结束
            if (this.s < 0) {
                //h1的innerHTML ： 活动结束 。
                this.time.children[0].children[0].innerHTML = '00';
                this.time.children[1].children[0].innerHTML = '00';
                this.time.children[2].children[0].innerHTML = '00';
                this.h3.innerHTML = "活动结束";   
                clearInterval(this.timer);
            }
        }, 1000)
    }
}
window.onload = function () {
    new Banner().imgshow('.banner');
    new Li2().event();
    new XiaoLubo().event();
    new CountDown().getHDTime();
}
