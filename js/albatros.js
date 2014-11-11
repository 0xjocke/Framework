/*jslint node: true */

'use strict';

//Find menus on page
var menu = document.getElementsByClassName('menubar');
var btns = document.getElementsByTagName('button');
var aspect = document.getElementsByClassName('keepAspect');
var winW = document.documentElement.clientWidth;
var inputFields = document.getElementsByTagName('input');
var fileButton = [];

//function for click event on input
function clickFunc(input){
    return function() {
        input.click();
    };
}

//set the name when chose file
function setName(fileName, button){
    return function(){
        button.innerHTML = 'File: <span class="textSmall">'+fileName.value.replace(/^.*\\/,'')+'</span>';
    };
}

//check if element has classname
function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

//chech when change aspect of aspectBox
function aspectChange(item){
    var itemW = item.offsetWidth;
    var itemH = item.offsetHeight;
    if(itemW > itemH){
        item.setAttribute('style','height:'+itemW+'px;');
    }
    else if(itemW < itemH){
        item.setAttribute('style','width:'+itemH+'px;');
    }
}


//when blicked a button inside form, disable button -> submit form
function clicked(item){

    var form = item.target.form;
    var button = item.target;
    if(form && button.type === 'submit'){
        
        var loaderInside = document.createElement('div');

        if(hasClass(button,'small')){
            loaderInside.setAttribute('class','loaderSmall dark rightie m2 ');
        }
        else{
            loaderInside.setAttribute('class','loader dark rightie m2 ');
        }
        button.disabled = true;
        button.appendChild(loaderInside);

         form.submit();
        
    }

}



//insert wrap for submenus
function appendSubwraps(menuItem, i){

    if(!menuItem.getElementsByTagName('div')[i]){

        var ul = menuItem.getElementsByTagName('ul')[i];
        var subWrap = document.createElement('div');
        var li = ul.getElementsByTagName('li');
        
        ul.appendChild(subWrap);

        for(var u = 1; u < li.length; u++){
            subWrap.appendChild(li[1]);
        }                
    }
}


//toggle the clickbutton
function toggleMenuBar(item){
  
    var menuItem = item.target.nextSibling;

    if(menuItem.style.display === 'block'){
        menuItem.style.display = 'none';
    }
    else{
        menuItem.style.display = 'block';
    }
}


//create the 'burger button'
function createBurgerMenu(menuItem, menuUl){

    var menuButton = document.getElementsByClassName('ddbutton');
    var menuLines = document.getElementsByClassName('ddlines');

    if(menuItem.getElementsByClassName('ddbutton').length === 0) {

        menuButton = document.createElement('div');
        menuLines = document.createElement('div');

        menuButton.setAttribute('class','ddbutton');
        menuLines.setAttribute('class','ddlines');

        menuUl.parentNode.insertBefore(menuButton,menuUl);
        menuButton.appendChild(menuLines);

        menuButton.addEventListener('click', toggleMenuBar);

    }

}

//check width and sets style of menu
function checkW(menuItem, menuUl){

var winWidth = window.innerWidth;

if(winWidth >= 701){
        menuUl.style.display='block';
    }
    else{
        menuUl.style.display='none';

        if(menuItem.className.indexOf('fixed') > 0){
            menuItem.nextSibling.style.height = '0px';
        }
    }

}

//MenuState function
function checkMenuState(menuItem){

    
    var menuUl = menuItem.getElementsByTagName('ul')[0];
    var wrapper = document.getElementsByClassName('wrapper');


    //Check for submenus inside THIS menu AND GROUPING THEM WITH DIV!
    if(menuItem.getElementsByTagName('ul').length > 0){

        for(var i = 0; i < menuItem.getElementsByTagName('ul').length; i++){
            appendSubwraps(menuItem, i);
        }

    }


    //create wraper around fixed menu, pushing page down same size as menu
    if(menuItem.className.indexOf('fixed') > 0){
        if(menuItem.nextSibling.className !== 'wrapper') {
                wrapper = document.createElement('div');
                wrapper.setAttribute('class','wrapper');
                wrapper.style.height = menuItem.offsetHeight+'px';
                menuItem.parentNode.insertBefore(wrapper,menuItem.nextSibling);
        }
        else{
        menuItem.nextSibling.style.height = menuItem.offsetHeight+'px';
        }
    }


    createBurgerMenu(menuItem, menuUl);
    checkW(menuItem, menuUl);
    
}




//find all buttons on page
for (var i = btns.length - 1; i >= 0; i--) {
    btns[i].addEventListener('click', clicked);
}


//looks up all the input with type 'file' to change them into a button
//instead of the unstyled browse button
//the placeholder value will be displayed as the text of the button
for(var i = 0; i < inputFields.length; i++) {
    if(inputFields[i].type.toLowerCase() === 'file') {
        var buttonText = inputFields[i].getAttribute('placeholder');
        var thisFileInput = inputFields[i];
        fileButton[i] = document.createElement('button');

        fileButton[i].innerHTML = buttonText;
        inputFields[i].setAttribute('hidden','true');
        fileButton[i].setAttribute('type', 'button');
        inputFields[i].parentNode.insertBefore(fileButton[i], inputFields[i]);

        fileButton[i].addEventListener('click', clickFunc(thisFileInput));
        thisFileInput.addEventListener('change', setName(thisFileInput, fileButton[i]));
        
    }
}


//Things to do when page load
window.onload=function(){

    for(var i = 0 ; i < menu.length ; i++){
        checkMenuState(menu[i]);
    }
    for(var u = 0 ; u < aspect.length ; u++){
        aspectChange(aspect[u]);
    }
};



//Things to do when resizeWindow
window.onresize = function(){
    var newW = document.documentElement.clientWidth;

    if(winW !== newW){
        for(var i = 0 ; i < menu.length ; i++){
            checkMenuState(menu[i]);
        }
        winW = document.documentElement.clientWidth;
    }
};