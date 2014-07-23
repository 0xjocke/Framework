//Author: Tobias Friberg
//You may use and edit this as you like

window.onload=function(){

   if(document.getElementById("t_menu") != null && document.getElementById("t_menuFloat") != null){
        alert("You cannot use both menu and manuFloat.");
        exit();
    }

checkMenuState();
};

window.onresize = function() {
checkMenuState();
};

window.onscroll = function () {
  checkMenuPos();
}


function checkMenuPos(){
    var menuFloat = document.getElementById("t_menuFloat");
    if(menuFloat != null){
    $("#t_menuFloat").animate({margin:window.pageYOffset+"px 0px 0px 0px"},5);
    }
}


function checkMenuState(){

    var winWidth     = window.innerWidth;
    var menuSpacer   = document.getElementById("t_spacing");
    var menuButton   = document.getElementById("t_ddbutton");
    var menu         = document.getElementById("t_menu");
    var menuFloat    = document.getElementById("t_menuFloat");
    var menuList     = document.getElementById("t_listMenuPhone");
    var menuButton   = menuButton;

    if(menu != null){
    var useThisMenu = menu;
    }
    else if(menuFloat != null){
    var useThisMenu = menuFloat;
    }
    else{
       var useThisMenu = menuList;
    }

    var menuUl = useThisMenu.getElementsByTagName("ul")[0];
    var menuHeight = $(useThisMenu).height();

    if($(useThisMenu).find("button").length == 1){
        var insideButton = document.getElementsByTagName("button")[0];
        var buttonHeight = $(insideButton).height();
        insideButton.style.margin=menuHeight/2-buttonHeight+"px 0px 0px 5px";
    }


if(useThisMenu == menuFloat && menuSpacer == null){
    menuSpacer = document.createElement("div");
    menuSpacer.setAttribute("id", "t_spacing");
    menuSpacer.style.height=menuHeight+5+"px";
    document.body.insertBefore(menuSpacer, useThisMenu.nextSibling);
}

    if(winWidth >= 701){
        document.getElementById("t_ddbutton").style.display="none";
        document.getElementById("t_ddbuttonWrap").style.display="none";
        menuUl.style.display="block";

    }
    else{


        if(menuButton == null){

            menuButton      =    document.createElement("div");
            menuButtonWrap  =    document.createElement("div");
            menuLines       =    document.createElement("div");

            menuButton.setAttribute("id", "t_ddbutton");
            menuButtonWrap.setAttribute("id", "t_ddbuttonWrap");
            menuLines.setAttribute("id", "t_lines");
            menuUl.setAttribute("id","ULID");

            

            menuButtonWrap.style.padding="5px";

            $(menuButtonWrap).insertBefore(menuUl);

            menuButtonWrap.appendChild(menuButton);
            menuButton.appendChild(menuLines);



            $(menuButton).click(function() {
              $(menuUl).toggle( "fast", function() { });
            });
        }

        menuUl.style.display="none";
        document.getElementById("t_ddbuttonWrap").style.display="block";
        document.getElementById("t_ddbutton").style.display="block";
    
    }


    document.getElementById("printHere").innerHTML = menuHeight;


}