class Banner{
    imgshow(obj){
         obj = document.querySelector(obj);
         var indexbox,
         indexAll,
         imgbox,
         btn,
         timer,
         index=0;
         function init(){
            imgbox = obj.children[0];
            btn = obj.children[2];
            indexbox = obj.children[1];
            indexAll = indexbox.children;
            for(var i=0;i < indexAll.length;i++){
                indexAll[i].index = i;
            }
            imgbox.style.left = -590 + 'px';
            event();
            autoplay();
         }
         function event(){
            indexbox.onclick = (e)=>{
                 var e = e || event;
                 var target = e.target || e.srcElement;
                 if(target.nodeName==='LI'){
                     index = target.index;
                     img();
                     autoplay();
                 }
            }
            btn.onclick = (e)=>{
                var e = e || event;
                 var target = e.target || e.srcElement;
                 if(target.className=='right'){
                     index++;
                     img();
                     autoplay();
                 }
                 if(target.className=='left'){
                    index--;
                    img();
                    autoplay();
                }
               
            }
        }
        function img(){
            if(index > indexAll.length-1){
                imgbox.style.left=0;
                index=0;
            }else if(index < 0){
                imgbox.style.left= -(indexAll.length+1)*590+'px';
                index=indexAll.length-1;
            }
            for(var i = 0;i<indexAll.length;i++){
                indexAll[i].className='';
            }
            indexAll[index].className='L';
            animate(imgbox,{param:{left:-(index+1)*590}})
        }
        function autoplay(){
            clearInterval(timer);
            timer = setInterval(()=>{
                index++;
                img();
            },2000)
        }
        init();
    }
    
}
function main(){
    var banner = new Banner();
    banner.imgshow('.banner');
}
window.onload = main;