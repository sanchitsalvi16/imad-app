console.log('Loaded!');
//change the text of main-text div
var element=document.GetElementbyId('main-text'
);
element.innerHtml='new value';
//move the image
var img= document.getElementbyId('madi');
img.onclick=function () {
    img.style.leftmargin='100px';
}