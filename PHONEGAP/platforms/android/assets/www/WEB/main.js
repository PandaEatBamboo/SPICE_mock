var page1to2Css = {
	animation: "page1to2 1s ease 0s forwards" 
};

var page2to3Css = {
	animation: "page2to3 1s ease 0s forwards" 
};

var PopupPageCss = {
	animation: "PopupPage 1s ease 0s forwards" 
};

function JumpPage2 () {
	$("#page2").css(page1to2Css);
}

function JumpPage2to3 () {
	$("#page3").css(page2to3Css);
}

function PopupPage () {
	$("#Popup").css(PopupPageCss);
}

