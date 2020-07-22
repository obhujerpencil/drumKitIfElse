var number=document.querySelectorAll(".drum").length;
for(var i=0; i<number; i=i+1){

document.querySelectorAll(".drum")[i].addEventListener("click",x)
function x(){
// function x(){
// console.log(this);}}Its output is all the buttons


// document.querySelectorAll(".drum")[i].addEventListener("click",y);
//
// function y(){
//   this.style.color="green";
//   this.innerHTML="xyz";
// }
var buttonClass=this.className;
if (buttonClass==="l drum"){
  var crash=new Audio('crash.mp3');
  crash.play();}
if (buttonClass==="w drum"){
var tom1=new Audio('tom-1.mp3');
tom1.play();}

if (buttonClass==="a drum"){
var tom2=new Audio('tom-2.mp3');
tom2.play();}

if (buttonClass==="s drum"){
var tom3=new Audio('tom-3.mp3');
tom3.play();}

if (buttonClass==="d drum"){
var tom4=new Audio('tom-4.mp3');
tom4.play();}

if (buttonClass==="j drum"){
var snare=new Audio('snare.mp3');
snare.play();}

if (buttonClass==="k drum"){
var kickbass=new Audio('kick-bass.mp3');
kickbass.play();}
}
}






// function x(){
//
// var audio=new Audio('crash.mp3');
// audio.play();
// }
