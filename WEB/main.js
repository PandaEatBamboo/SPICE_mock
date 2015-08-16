var page1to2Css = {
	animation: "page1to2 1s ease 0s forwards"
}

var page2to3Css = {
	animation: "page2to3 0.7s ease 0s forwards"
}

var page3to2Css = {
	animation: "page3to2 0.7s ease 0s forwards"
}

var page3to4Css = {
	animation: "page3to4 0.7s ease 0s forwards"
}

var selectItemBarRight = {
	animation: "SelectRightBar 0.4s ease 0s forwards"
}

var selectItemBarLeft = {
	animation: "SelectLeftBar 0.4s ease 0s forwards"
}

var selectItemBoxRight = {
	animation: "SelectRightBox 0.7s ease 0s forwards"
}

var selectItemBoxLeft = {
	animation: "SelectLeftBox 0.7s ease 0s forwards"
}



function JumpPage2 () {
	$("#page2").css(page1to2Css);
}

function JumpPage3 () {
	$("#page3").css(page2to3Css);
}

function JumpPage4 () {
	$("#page4").css(page3to4Css);
}

function BackPage2 () {
	$("#page3").css(page3to2Css);
}

function selectright () {
	$("#item_bar").css(selectItemBarRight);
	$("#Page3_Item_box").css(selectItemBoxRight);
}

function selectleft () {
	$("#item_bar").css(selectItemBarLeft);
	$("#Page3_Item_box").css(selectItemBoxLeft);
}


/*$("p").hover(function () {
  $(this).css({ backgroundColor:"yellow", fontWeight:"bolder" });
}, function () {
  var cssObj = {
    backgroundColor: "#ddd",
    fontWeight: "",
    color: "rgb(0,40,244)"
  }
  $(this).css(cssObj);
});*/