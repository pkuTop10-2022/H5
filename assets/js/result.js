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

var img = document.createElement('img')
// img.src = resource[1]
img.sizes = "100% 100%"
img.css = "display:none"
document.body.appendChild(img)

function longPress(func) {
    var timeOutEvent;

    document.addEventListener("touchstart", function (e) {
        //开启定时器前先清除定时器，防止重复触发
        clearTimeout(timeOutEvent);
        //开启延时定时器
        timeOutEvent = setTimeout(function () {
            //调用长按之后的逻辑函数func
            saveSharePic();
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
    function creatImg() {
        const dom = document.body;
        const box = window.getComputedStyle(dom);
        // DOM 节点计算后宽高
        const width = this.parseValue(box.width);
        const height = this.parseValue(box.height);
        // 获取像素比
        const scaleBy = DPR();
        // 创建自定义 canvas 元素
        var canvas = document.createElement('canvas');
        // 设定 canvas 元素属性宽高为 DOM 节点宽高 * 像素比
        canvas.width = width * scaleBy;
        canvas.height = height * scaleBy;
        // 设定 canvas css宽高为 DOM 节点宽高
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        let x = width;
        let y = height;
        html2canvas(dom, {canvas,
            dpi: 350,
        }).then(function () {
            document.getElementsByTagName('img').src = canvas.toDataURL("image/png"); //生成的图片链接
        })
    }

    function DPR() {
        if (window.devicePixelRatio && window.devicePixelRatio > 1) {
            return window.devicePixelRatio;
        }
        return 1;
    }
}

