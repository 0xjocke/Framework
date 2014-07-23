/*
*Menufunction!
*Convert menubars to phoneMenues
*REQUIRES JQUERY!
*/
//Find menus on page
var menu = document.getElementsByClassName("menubar");

//Things to do when page load
window.onload=function(){
    for(var i = 0 ; i < menu.length ; i++){
        checkMenuState(menu[i]);
    }
}


var winW = $(window).width();
//Things to do when resizeWindow
window.onresize = function(){
    var newW = $(window).width();

    if(winW != newW){
        for(var i = 0 ; i < menu.length ; i++){
            checkMenuState(menu[i]);
        }
        winW = $(window).width();
    }
}

//MenuState function
function checkMenuState(menuItem){

    var winWidth = window.innerWidth;
    var menuButton = document.getElementsByClassName("ddbutton");
    var menuLines = document.getElementsByClassName("ddlines");
    var menuUl = menuItem.getElementsByTagName("ul")[0];
    var wrapper = document.getElementsByClassName("wrapper");




    //Check for submenus inside THIS menu AND GROUPING THEM WITH DIV!
    if(menuItem.getElementsByTagName("ul").length > 1){
        for(var i = 1; i < menuItem.getElementsByTagName("ul").length; i++){
            if(!menuItem.getElementsByTagName("div")[i]){
                var subWrap = document.createElement("div");
                var li = menuItem.getElementsByTagName("ul")[i].getElementsByTagName("li");
            
                menuItem.getElementsByTagName("ul")[i].appendChild(subWrap,menuItem.getElementsByTagName("ul")[i]);

                for(var u = 0; u < li.length; u++){
                    $(li[0]).appendTo(subWrap);
                }
            }
        }
    }






if(menuItem.className.indexOf("fixed") > 0){
    if(menuItem.nextSibling.className != "wrapper") {
            wrapper = document.createElement("div");
            wrapper.setAttribute("class","wrapper");
            wrapper.style.height = menuItem.offsetHeight+"px";
            menuItem.parentNode.insertBefore(wrapper,menuItem.nextSibling);
    }
    else{
    menuItem.nextSibling.style.height = menuItem.offsetHeight+"px";
    }
}



    if($(menuItem).find(menuButton).length == 0) {

        menuButton = document.createElement("div");
        menuLines = document.createElement("div");

        menuButton.setAttribute("class","ddbutton");
        menuLines.setAttribute("class","ddlines");

        $(menuButton).insertBefore(menuUl);
        menuButton.appendChild(menuLines);


        $(menuButton).click(function() {
            $(menuUl).slideToggle("fast", function() { });
        });
    }

    if(winWidth >= 701){
        menuUl.style.display="block";
    }
    else{
        menuUl.style.display="none";

            if(menuItem.className.indexOf("fixed") > 0)
            menuItem.nextSibling.style.height = "0px";
        }

}