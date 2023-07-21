const header=document.querySelector(".header");
const menulist=document.querySelector(".menu-list");
const menubtn=document.querySelector(".menu-btn");
const closebtn=document.querySelector(".close-btn");

menubtn.onclick=()=>{
    menulist.classList.add("active");
    closebtn.classList.remove("hide");
    menubtn.classList.add("hide");
}
closebtn.onclick=()=>{
    menulist.classList.remove("active");
    closebtn.classList.add("hide");
    menubtn.classList.remove("hide");
}
var v1=setInterval(counter1, 300);
var v2=setInterval(counter2, 3);
var v3=setInterval(counter3, 50);
 let count1=0;
 let count2=0;
 let count3=0;
function counter1(){
    count1++;
    document.querySelector("#s-1").innerHTML=count1+"K";
    if(count1==12){
        clearInterval(v1)
    }
}
function counter2(){
    count2++;
    document.querySelector("#s-2").innerHTML=count2+"+";
    if(count2==750){
        clearInterval(v2)
    }
}
function counter3(){
    count3++;
    document.querySelector("#s-3").innerHTML=count3 +"%";
    if(count3==100){
        clearInterval(v3)
    }
}