document.addEventListener("scroll", function () {
    var pos=document.documentElement.scrollTop;
    var navtg=document.getElementById("head_w");
    if (pos >= 10) {
        navtg.style.borderBottom = "solid 5px #292826";
    } else {
        navtg.style.borderBottom = "0";
    }
})
document.addEventListener("scroll",function () {
    var pos = document.documentElement.scrollTop;
    var upbtn = document.getElementById("up_btn");
    if (pos >= 50) {
        upbtn.style.display = "block";
    } else {
        upbtn.style.display = "none";
    }
});

var newdiv;
var modal;
var zindex = 999;
function mexico() {
    var bg = document.getElementById("wrap");
    newdiv=document.createElement('div');       //div태그 생성
    newdiv.style.position='absolute';           //wrapper태그전체를 감쌈
    newdiv.style.left="0px";                    //left : 0 ,top : 0
    newdiv.style.top="0px";
    newdiv.style.backgroundColor="black";       //배경색지정
    newdiv.style.width="100%";
    newdiv.style.height="100%";
    newdiv.style.opacity="0.3";
    newdiv.style.zIndex=zindex;

    bg.appendChild(newdiv);
    modal=document.getElementById('mexico_m');
    modal.style.position='absolute';
    modal.style.left='40%';
    modal.style.top='15%';
    modal.style.display="block";
    modal.style.width='400px';
    modal.style.height='150px';
    modal.style.backgroundColor='white';
    modal.style.padding="20px";
    modal.style.textAlign="right";
    modal.style.animation="moving"
    modal.style.animationDuration="1s";
    modal.style.zIndex=zindex+1;     
}
function aust() {
    var bg = document.getElementById("wrap");
    newdiv=document.createElement('div');       //div태그 생성
    newdiv.style.position='absolute';           //wrapper태그전체를 감쌈
    newdiv.style.left="0px";                    //left : 0 ,top : 0
    newdiv.style.top="0px";
    newdiv.style.backgroundColor="black";       //배경색지정
    newdiv.style.width="100%";
    newdiv.style.height="100%";
    newdiv.style.opacity="0.3";
    newdiv.style.zIndex=zindex;

    bg.appendChild(newdiv);
    modal=document.getElementById('aust_m');
    modal.style.position='absolute';
    modal.style.left='40%';
    modal.style.top='15%';
    modal.style.display="block";
    modal.style.width='400px';
    modal.style.height='150px';
    modal.style.backgroundColor='white';
    modal.style.padding="20px";
    modal.style.textAlign="right";
    modal.style.animation="moving"
    modal.style.animationDuration="1s";
    modal.style.zIndex=zindex+1;     
}
function phili() {
    var bg = document.getElementById("wrap");
    newdiv=document.createElement('div');       //div태그 생성
    newdiv.style.position='absolute';           //wrapper태그전체를 감쌈
    newdiv.style.left="0px";                    //left : 0 ,top : 0
    newdiv.style.top="0px";
    newdiv.style.backgroundColor="black";       //배경색지정
    newdiv.style.width="100%";
    newdiv.style.height="100%";
    newdiv.style.opacity="0.3";
    newdiv.style.zIndex=zindex;

    bg.appendChild(newdiv);
    modal=document.getElementById('phili_m');
    modal.style.position='absolute';
    modal.style.left='40%';
    modal.style.top='15%';
    modal.style.display="block";
    modal.style.width='400px';
    modal.style.height='150px';
    modal.style.backgroundColor='white';
    modal.style.padding="20px";
    modal.style.textAlign="right";
    modal.style.animation="moving"
    modal.style.animationDuration="1s";
    modal.style.zIndex=zindex+1;     
}
function jap() {
    var bg = document.getElementById("wrap");
    newdiv=document.createElement('div');       //div태그 생성
    newdiv.style.position='absolute';           //wrapper태그전체를 감쌈
    newdiv.style.left="0px";                    //left : 0 ,top : 0
    newdiv.style.top="0px";
    newdiv.style.backgroundColor="black";       //배경색지정
    newdiv.style.width="100%";
    newdiv.style.height="100%";
    newdiv.style.opacity="0.3";
    newdiv.style.zIndex=zindex;

    bg.appendChild(newdiv);
    modal=document.getElementById('jap_m');
    modal.style.position='absolute';
    modal.style.left='40%';
    modal.style.top='15%';
    modal.style.display="block";
    modal.style.width='400px';
    modal.style.height='150px';
    modal.style.backgroundColor='white';
    modal.style.padding="20px";
    modal.style.textAlign="right";
    modal.style.animation="moving"
    modal.style.animationDuration="1s";
    modal.style.zIndex=zindex+1;     
}
function close_modal(id) {
    var close_id = id;
    $("#" + close_id).css("display", "none");
    newdiv.remove();
}

