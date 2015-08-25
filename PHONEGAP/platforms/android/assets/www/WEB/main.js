var page1to2Css = {
	animation: "page1to2 1s ease 0s forwards"
};

var page2to3Css = {
	animation: "page2to3 0.7s ease 0s forwards"
};

var page3to2Css = {
	animation: "page3to2 0.7s ease 0s forwards"
};

var page3to4Css = {
	animation: "page3to4 0.7s ease 0s forwards"
};

var ItemBarL2R = {
	animation: "SelectL2RBar 0.7s ease 0s forwards"
};

var ItemBarC2R = {
	animation: "SelectC2RBar 0.7s ease 0s forwards"
};

var ItemBarR2L = {
	animation: "SelectR2LBar 0.7s ease 0s forwards"
};

var ItemBarC2L = {
	animation: "SelectC2LBar 0.7s ease 0s forwards"
};

var ItemBarR2C = {
	animation: "SelectR2CBar 0.7s ease 0s forwards"
};

var ItemBarL2C = {
	animation: "SelectL2CBar 0.7s ease 0s forwards"
};

var ItemBoxR2C = {
	animation: "SelectR2CBox 0.7s ease 0s forwards"
};

var ItemBoxL2C = {
	animation: "SelectL2CBox 0.7s ease 0s forwards"
};

var ItemBoxC2R = {
	animation: "SelectC2RBox 0.7s ease 0s forwards"
};

var ItemBoxL2R = {
	animation: "SelectL2RBox 0.7s ease 0s forwards"
};

var ItemBoxC2L = {
	animation: "SelectC2LBox 0.7s ease 0s forwards"
};

var ItemBoxR2L = {
	animation: "SelectR2LBox 0.7s ease 0s forwards"
};

var NowSelectItem = "left";



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
	selectleft();
}

function selectright () {
	switch(NowSelectItem){
		case "left":
			$("#item_bar").css(ItemBarL2R);
			$("#Page3_Item_box").css(ItemBoxL2R);
			NowSelectItem = "right";
			break;
		case "center":
			$("#item_bar").css(ItemBarC2R);
			$("#Page3_Item_box").css(ItemBoxC2R);
			NowSelectItem = "right";
			break;
		case "right":
			break;
	};
}

function selectcenter () {
	switch(NowSelectItem){
		case "left":
			$("#item_bar").css(ItemBarL2C);
			$("#Page3_Item_box").css(ItemBoxL2C);
			NowSelectItem = "center";
			break;
		case "center":
			break;
		case "right":
			$("#item_bar").css(ItemBarR2C);
			$("#Page3_Item_box").css(ItemBoxR2C);
			NowSelectItem = "center";
			break;
	};
}

function selectleft () {
	switch(NowSelectItem){
		case "left":
			break;
		case "center":
			$("#item_bar").css(ItemBarC2L);
			$("#Page3_Item_box").css(ItemBoxC2L);
			NowSelectItem = "left";
			break;
		case "right":
			$("#item_bar").css(ItemBarR2L);
			$("#Page3_Item_box").css(ItemBoxR2L);
			NowSelectItem = "left";
			break;
	};
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