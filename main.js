//array contain all images
let imagesslides=["img1.jpeg","img2.jpg","img3.jpg","img4.jpg","img 5.png","img6.jpg","img7.jpg","img8.jpg"];
var i=0;
//expresion function
var slideshow=function(){

    document.slideshow.src=imagesslides[i]
    if(i<imagesslides.length - 1){
        i++
    }else{
        i=0;
    }
    setTimeout("slideshow()",2000)
}
slideshow();