var res = window.location.href.split("=")[1];

function returnresource(res){
    var txt, img, audio;
    if(res ==="b612"){
        txt = "b612"
        img = 'assets/img/res/b612.jpg';
        audio = "assets/music/b612.mp3";
    }else if(res==="halei"){
        txt = "哈雷彗星"
        img = "assets/img/res/halei.png";
        audio = "";
    }else if(res==="heidong"){
        txt = "黑洞"
        img = "assets/img/res/heidong.png";
        audio = "";
    }else if(res==="kaipule"){
        txt = "开普勒"
        img = "";
        audio = "";
    }else if(res==="kuaile"){
        txt = "快乐星球"
        img = "";
        audio = "";
    }else if(res==="M78"){
        txt = "M78星云"
        img = "";
        audio = "";
    }else if(res==="muxing"){
        txt = "木星"
        img = "";
        audio = "";
    }else if(res==="taiyang"){
        txt = "太阳"
        img = "assets/img/res/taiyang.png";
        audio = "";
    }else if(res==="xinxiu"){
        txt = "心宿二"
        img = "";
        audio = "";
    }else{
        txt = "月球";
        img = "";
        audio = "";
    }
    return [txt, img, audio]
}
resource = returnresource(res);
document.title = resource[0] + " - 测测你的星球属性";

var body = document.body.style;
body["backgroundImage"] = "url('" + resource[1] + "')";
body["backgroundRepeat"] = "no-repeat";
body["backgroundAttachment"] = "fixed";
body["backgroundPosition"] = "center";
body["backgroundSize"] = "100% 100%"

function longPress(func) {
    var timeOutEvent;

    document.addEventListener("touchstart", function (e) {
        //开启定时器前先清除定时器，防止重复触发
        clearTimeout(timeOutEvent);
        //开启延时定时器
        timeOutEvent = setTimeout(function () {
            //调用长按之后的逻辑函数func
            func();
        }, 300); //长按时间为300ms，可以自己设置
    });

    document.addEventListener("touchmove", function (e) {
        //长按过程中，手指是不能移动的，若移动则清除定时器，中断长按逻辑
        clearTimeout(timeOutEvent);
        /* e.preventDefault() --> 若阻止默认事件，则在长按元素上滑动时，页面是不滚动的，按需求设置吧 */
    });

    document.addEventListener("touchend", function (e) {
        //若手指离开屏幕，时间小于我们设置的长按时间，则为点击事件，清除定时器，结束长按逻辑
        clearTimeout(timeOutEvent);
    })
}

//保存图片
function saveSharePic() {
    // 想要保存的图片节点
    var img_url = resource[1]
    const dom = document.createElement('img');
    dom.width = 0;
    dom.src = img_url;
    document.body.appendChild(dom)

    // 创建一个新的canvas
    const canvas = document.createElement("canvas");
    const width = document.body.offsetWidth; // 可见屏幕的宽
    const height = document.body.offsetHeight; // 可见屏幕的高

    const scale = window.devicePixelRatio; // 设备的devicePixelRatio
    // 将Canvas画布放大scale倍，然后放在小的屏幕里，解决模糊问题
    canvas.width = width * scale;
    canvas.height = height * scale;
    console.log("canvas宽高：" + canvas.width + "、" + canvas.height);
    canvas.getContext('2d').scale(scale, scale);
    // dom节点绘制成canvas
    html2canvas(dom).then(function (canvas) {
        const img = canvas2Image(canvas, canvas.width, canvas.height);
        img.style.cssText = "width:100%;position:absolute;top:0;left:0;opacity:0;z-index:999;";
        console.log("图片宽高：" + img.width + "、" + img.height);
        document.body.appendChild(img);
    });
    return true
}

//利用canvas获取图片的base64编码创建图片对象
function canvas2Image(canvas, width, height) {
    const retCanvas = document.createElement("canvas");
    const retCtx = retCanvas.getContext("2d");
    retCanvas.width = width;
    retCanvas.height = height;
    retCtx.drawImage(canvas, 0, 0, width, height, 0, 0, width, height);
    const img = document.createElement("img");
    img.src = retCanvas.toDataURL("image/png", 1); // 可以根据需要更改格式
    return img;
}
