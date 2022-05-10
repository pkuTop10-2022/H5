function getQs(){
	for(var i in questions){
		var div = document.createElement("div");
		div.className = "entrance-bottom-frame-line";
		document.querySelector(".entrance-bottom-frame").appendChild(div);
		
		
		var div2 = document.createElement("div");
		div2.className = "entrance-bottom-frame-line-title";
		div2.innerHTML = questions[i].title;
		document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div2);
			
		
		var divli1 = document.createElement("div");
		divli1.innerHTML = parseInt(i) + 1;
		
		var timu = 1
		for(var j = 0; j<questions[i].options.length; j++){
			var div3 = document.createElement("div");
			div3.className = "entrance-bottom-frame-line-button";
			var div3_id = document.createElement("div");
			div3_id.className = "entrance-bottom-frame-line-button-id";
			if(j === 0){
				div3_id.innerHTML = "A";
				if (i=='3'){
					var music = new Audio()
					music.controls = true
					music.src = "assets/music/shorttheme1.mp3"
				}
			}else if(j === 1){
				div3_id.innerHTML = "B";
				if (i=='3'){
					var music = new Audio()
					music.controls = true
					music.src = "assets/music/night.mp3"
				}
			}else if(j === 2){
				div3_id.innerHTML = "C";
				if (i=='3'){
					var music = new Audio()
					music.controls = true
					music.src = "assets/music/dontpanic.mp3"
				}
			}else{
				div3_id.innerHTML = "D";
				if (i=='3'){
					var music = new Audio()
					music.controls = true
					music.src = "assets/music/duoraamen.mp3"
				}
			}
			div3.appendChild(div3_id)
			if(i !='3'){
				var div4 = document.createElement("div");
				div4.className = "entrance-bottom-frame-line-button-frame";
				div4.innerHTML = questions[i].options[j];
				div3.appendChild(div4);
			}else {
				div3.appendChild(music);
				console.log(music)
			}
			document.querySelectorAll(".entrance-bottom-frame-line")[i].appendChild(div3);
			timu++
		}
	}
	mintime = 1; 
	var dact = document.querySelector(".entrance-bottom-frame-line")
	var active = "active"
	var none = "none"
	addClass(dact, active)
	var timu_id = 0
	var select1 = 1
	var frame_left = 0
	document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
	document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu + " 题"

	var answers = ""
	for(var i = 0;i<document.querySelectorAll(".entrance-bottom-frame-line-button").length;i++){
		document.querySelectorAll(".entrance-bottom-frame-line-button")[i].onclick = function(){
			chose = this.querySelector(".entrance-bottom-frame-line-button-id").innerHTML
			answers = answers + chose

			if(timu_id < document.querySelectorAll(".entrance-bottom-frame-line").length - 1){
				frame_left += -100
				document.querySelector(".entrance-bottom-frame").style.marginLeft = frame_left + "%"
				
				timu_id++;
				select1++;
				document.querySelector(".topic-frameli").innerHTML = "第 " + "<div>" + select1 + "</div>" + "/" + timu + " 题"
				addClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id], active)
				removeClass(document.querySelectorAll(".entrance-bottom-frame-line")[timu_id-1], active)
			}else{
				res(answers)
			}
		}
	}
}

function addClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  blank = (obj_class !== '') ? ' ' : '';//判断获取到的 class 是否为空, 如果不为空在前面加个'空格'.
  added = obj_class + blank + cls;//组合原来的 class 和需要添加的 class.
  obj.className = added;//替换原来的 class.
}

function removeClass(obj, cls){
  var obj_class = ' '+obj.className+' ';//获取 class 内容, 并在首尾各加一个空格. ex) 'abc    bcd' -> ' abc    bcd '
  obj_class = obj_class.replace(/(\s+)/gi, ' '),//将多余的空字符替换成一个空格. ex) ' abc    bcd ' -> ' abc bcd '
  removed = obj_class.replace(' '+cls+' ', ' ');//在原来的 class 替换掉首尾加了空格的 class. ex) ' abc bcd ' -> 'bcd '
  removed = removed.replace(/(^\s+)|(\s+$)/g, '');//去掉首尾空格. ex) 'bcd ' -> 'bcd'
  obj.className = removed;//替换原来的 class.
}

function hasClass(obj, cls){
  var obj_class = obj.className,//获取 class 内容.
  obj_class_lst = obj_class.split(/\s+/);//通过split空字符将cls转换成数组.
  x = 0;
  for(x in obj_class_lst) {
    if(obj_class_lst[x] === cls) {//循环数组, 判断是否包含cls
      return true;
    }
  }
  return false;
}

function res(answers){
	 var res_array = ["AAADB","AAADD","AACDB","AACDD","AADBA","ABADB","ABADD","ABCDB","ABCDD","ABDBA","ACADB","ACCDB","ACDBA","BAAAA","BAADA","BABAA","BABDB","BACDB","BADBD","BADDB","BBAAA","BBADA","BBBAA","BBBDB","BBCDB","BBDBD","BBDDB","BCAAA","BCADA","BCCDB","BCDDB","CAADB","CAADD","CACDB","CACDD","CADBA","CBADB","CBADD","CBCDB","CBCDD","CBDBA","CCADB","CCCDB","CCDBA","DAAAA","DAADA","DABAA","DABDB","DACDB","DADBD","DADDB","DBAAA","DBADA","DBBAA","DBBDB","DBCDB","DBDBD","DBDDB","DCAAA","DCADA","DCCDB","DCDDB","AAACC","AAADC","AADAA","AADAC","AADCB","AADCC","AADDB","ABACC","ABADC","ABDAA","ABDAC","ABDCB","ABDCC","ABDDB","ACACC","ACADC","ACDAA","ACDAC","ACDCB","ACDCC","ACDDB","BABDC","BACAD","BACDA","BADAC","BADDA","BBBDC","BBCAD","BBCDA","BBDAC","BBDDA","BCCDA","BCDAC","BCDDA","CAACC","CAADC","CADAA","CADAC","CADCB","CADCC","CADDB","CBACC","CBADC","CBDAA","CBDAC","CBDCB","CBDCC","CBDDB","CCACC","CCADC","CCDAA","CCDAC","CCDCB","CCDCC","CCDDB","DABDC","DACAD","DACDA","DADAC","DADDA","DBBDC","DBCAD","DBCDA","DBDAC","DBDDA","DCCDA","DCDAC","DCDDA","AABDA","AADAD","AADBD","AADCD","AADDD","ABBDA","ABDAD","ABDBD","ABDCD","ABDDD","ACAAD","ACABD","ACACD","ACADD","ACBAD","ACBBD","ACBCD","ACBDD","ACCAD","ACCBD","ACCCD","ACCDD","ACDAD","ACDBD","ACDCD","ACDDD","BAACA","BAADB","BABBA","BABCC","BABDD","BACBD","BACCD","BACDD","BADAD","BADCD","BADDD","BBACA","BBADB","BBBBA","BBBCC","BBBDD","BBCBD","BBCCD","BBCDD","BBDAD","BBDCD","BBDDD","BCAAD","BCABD","BCACA","BCACD","BCADB","BCADD","BCBAD","BCBBD","BCBCD","BCBDD","BCCAD","BCCBD","BCCCD","BCCDD","BCDAD","BCDBD","BCDCD","BCDDD","CABDA","CADAD","CADBD","CADCD","CADDD","CBBDA","CBDAD","CBDBD","CBDCD","CBDDD","CCAAD","CCABD","CCACD","CCADD","CCBAD","CCBBD","CCBCD","CCBDD","CCCAD","CCCBD","CCCCD","CCCDD","CCDAD","CCDBD","CCDCD","CCDDD","DAACA","DAADB","DABBA","DABCC","DABDD","DACBD","DACCD","DACDD","DADAD","DADCD","DADDD","DBACA","DBADB","DBBBA","DBBCC","DBBDD","DBCBD","DBCCD","DBCDD","DBDAD","DBDCD","DBDDD","DCAAD","DCABD","DCACA","DCACD","DCADB","DCADD","DCBAD","DCBBD","DCBCD","DCBDD","DCCAD","DCCBD","DCCCD","DCCDD","DCDAD","DCDBD","DCDCD","DCDDD","AAACA","AAACB","AAACD","AABCC","AABDB","AACBA","AACBB","AACBC","AACBD","AADAB","AADBC","AADCA","ABACA","ABACB","ABACD","ABBCC","ABBDB","ABCBA","ABCBB","ABCBC","ABCBD","ABDAB","ABDBC","ABDCA","ACACA","ACACB","ACCBA","ACCBB","ACCBC","ACDAB","ACDBC","ACDCA","BAABC","BAACC","BABBC","BABCA","BACBA","BACBB","BACBC","BACCC","BADAB","BADCA","BADCC","BBABC","BBACC","BBBBC","BBBCA","BBCBA","BBCBB","BBCBC","BBCCC","BBDAB","BBDCA","BBDCC","BCABC","BCACC","BCCBA","BCCBB","BCCBC","BCCCC","BCDAB","BCDCA","BCDCC","CAACA","CAACB","CAACD","CABCC","CABDB","CACBA","CACBB","CACBC","CACBD","CADAB","CADBC","CADCA","CBACA","CBACB","CBACD","CBBCC","CBBDB","CBCBA","CBCBB","CBCBC","CBCBD","CBDAB","CBDBC","CBDCA","CCACA","CCACB","CCCBA","CCCBB","CCCBC","CCDAB","CCDBC","CCDCA","DAABC","DAACC","DABBC","DABCA","DACBA","DACBB","DACBC","DACCC","DADAB","DADCA","DADCC","DBABC","DBACC","DBBBC","DBBCA","DBCBA","DBCBB","DBCBC","DBCCC","DBDAB","DBDCA","DBDCC","DCABC","DCACC","DCCBA","DCCBB","DCCBC","DCCCC","DCDAB","DCDCA","DCDCC","AAABA","AAABB","AABAD","AABBC","AACCC","ABAAB","ABABA","ABABB","ABBAD","ABBBC","ABCCC","ACABA","ACABB","ACCCC","BAAAB","BAADD","BABAC","BABDA","BACAB","BACCA","BACCB","BADBC","BBAAB","BBADD","BBBAC","BBBDA","BBCAB","BBCCA","BBCCB","BBDBC","BCAAB","BCCAB","BCCCA","BCCCB","BCDBC","CAABA","CAABB","CABAD","CABBC","CACCC","CBAAB","CBABA","CBABB","CBBAD","CBBBC","CBCCC","CCABA","CCABB","CCCCC","DAAAB","DAADD","DABAC","DABDA","DACAB","DACCA","DACCB","DADBC","DBAAB","DBADD","DBBAC","DBBDA","DBCAB","DBCCA","DBCCB","DBDBC","DCAAB","DCCAB","DCCCA","DCCCB","DCDBC","AAABC","AAADA","AABDC","AABDD","AACDA","AACDC","AADDA","AADDC","ABABC","ABADA","ABBDC","ABBDD","ABCDA","ABCDC","ABDDA","ABDDC","ACABC","ACADA","ACCDA","ACCDC","ACDDA","ACDDC","BAADC","BACDC","BADAA","BADDC","BBADC","BBCDC","BBDAA","BBDDC","BCADC","BCCDC","BCDAA","BCDDC","CAABC","CAADA","CABDC","CABDD","CACDA","CACDC","CADDA","CADDC","CBABC","CBADA","CBBDC","CBBDD","CBCDA","CBCDC","CBDDA","CBDDC","CCABC","CCADA","CCCDA","CCCDC","CCDDA","CCDDC","DAADC","DACDC","DADAA","DADDC","DBADC","DBCDC","DBDAA","DBDDC","DCADC","DCCDC","DCDAA","DCDDC","AAAAB","AAAAD","AABAA","AABAB","AACAB","AACAD","AACCA","AACCD","ABAAD","ABBAA","ABBAB","ABCAB","ABCAD","ABCCA","ABCCD","ACAAB","ACCAB","ACCCA","BAAAD","BABCD","BBAAD","BBBCD","CAAAB","CAAAD","CABAA","CABAB","CACAB","CACAD","CACCA","CACCD","CBAAD","CBBAA","CBBAB","CBCAB","CBCAD","CBCCA","CBCCD","CCAAB","CCCAB","CCCCA","DAAAD","DABCD","DBAAD","DBBCD","AAAAA","AAAAC","AABAC","AACAA","AACAC","ABAAA","ABAAC","ABBAC","ABCAA","ABCAC","ACAAA","ACAAC","ACCAA","ACCAC","BAAAC","BACAA","BACAC","BBAAC","BBCAA","BBCAC","BCAAC","BCCAA","BCCAC","CAAAA","CAAAC","CABAC","CACAA","CACAC","CBAAA","CBAAC","CBBAC","CBCAA","CBCAC","CCAAA","CCAAC","CCCAA","CCCAC","DAAAC","DACAA","DACAC","DBAAC","DBCAA","DBCAC","DCAAC","DCCAA","DCCAC","AAABD","AABCB","AABCD","AACCB","AADBB","ABABD","ABBCB","ABBCD","ABCCB","ABDBB","ACCCB","ACDBB","BAABD","BAACB","BAACD","BABBD","BABCB","BADCB","BBABD","BBACB","BBACD","BBBBD","BBBCB","BBDCB","BCACB","BCBCB","BCDCB","CAABD","CABCB","CABCD","CACCB","CADBB","CBABD","CBBCB","CBBCD","CBCCB","CBDBB","CCCCB","CCDBB","DAABD","DAACB","DAACD","DABBD","DABCB","DADCB","DBABD","DBACB","DBACD","DBBBD","DBBCB","DBDCB","DCACB","DCBCB","DCDCB","ACBCB","CCBCB","AABBA","AABBB","AABBD","AABCA","ABBBA","ABBBB","ABBBD","ABBCA","ACBAA","ACBAB","ACBAC","ACBBA","ACBBB","ACBBC","ACBCA","ACBCC","ACBDA","ACBDB","ACBDC","BAABA","BAABB","BABAB","BABAD","BABBB","BADBA","BADBB","BBABA","BBABB","BBBAB","BBBAD","BBBBB","BBDBA","BBDBB","BCABA","BCABB","BCBAA","BCBAB","BCBAC","BCBBA","BCBBB","BCBBC","BCBCA","BCBCC","BCBDA","BCBDB","BCBDC","BCDBA","BCDBB","CABBA","CABBB","CABBD","CABCA","CBBBA","CBBBB","CBBBD","CBBCA","CCBAA","CCBAB","CCBAC","CCBBA","CCBBB","CCBBC","CCBCA","CCBCC","CCBDA","CCBDB","CCBDC","DAABA","DAABB","DABAB","DABAD","DABBB","DADBA","DADBB","DBABA","DBABB","DBBAB","DBBAD","DBBBB","DBDBA","DBDBB","DCABA","DCABB","DCBAA","DCBAB","DCBAC","DCBBA","DCBBB","DCBBC","DCBCA","DCBCC","DCBDA","DCBDB","DCBDC","DCDBA","DCDBB"]
	 var index = $.inArray(answers, res_array)
	 if (index <= 61){window.location.href="result.html?res=b612"}
	 else if(index <= 129){window.location.href="result.html?res=M78"}
	 else if(index <= 261){window.location.href="result.html?res=halei"}
	 else if(index <= 387){window.location.href="result.html?res=heidong"}
	 else if(index <= 457){window.location.href="result.html?res=kaipule"}
	 else if(index <= 525){window.location.href="result.html?res=kuaile"}
	 else if(index <= 569){window.location.href="result.html?res=muxing"}
	 else if(index <= 615){window.location.href="result.html?res=taiyang"}
	 else if(index <= 671){window.location.href="result.html?res=xinxiu"}
	 else {window.location.href="result.html?res=yueqiu"}
}

var questions =[ {
             "id" : "1",  
             "title": "1. 如果你是“探乐计划”乐队中的一员，你希望成为？",
            
             "options":[
             				"鼓手",
             				"键盘手",
             				"贝斯手",
             				"吉他手",
             				]
	
        },{  
             "id" : "2",  
             "title": "2. 你的听歌习惯是？",
            
             "options":[
             				"顺序播放",
             				"随机播放",
             				"单曲循环",
             				]
        },{  
             "id" : "3",  
             "title": "3. 如果推开一扇门，你能看到一场演出，你会希望看到什么？",
            
             "options":[
             				"livehouse",
             				"古典音乐会",
             				"万人演唱会",
             				"V家虚拟偶像演唱会",
             				]
        },{  
             "id" : "4",  
             "title": "4. 在宇宙中遨游，你会被宇宙中哪种声音吸引？",
            
             "options":[
             				"Short Theme 1",
             				"舒伯特小夜曲",
             				"Don’t Panic",
             				"哆啦A梦",
             				]
        },{  
             "id" : "5",  
             "title": "5. 旅行中你最期待以下那种偶遇？",
             
             "options":[
             				"在厦门的小巷里听到家庭版弦乐三重奏",
             				"托斯卡纳农庄的小镇遇到弹竖琴的白发老人",
             				"在广州上下九步行街偶遇乐队的街头表演",
             				"胡同里发现一家老唱片行",
             				]
        }
        ];
        

