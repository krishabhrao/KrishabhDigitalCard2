function shareCard(){

if(navigator.share){
navigator.share({
title:"Krishabh Yadav",
text:"Software Developer | Radiant Computers",
url:window.location.href
});
}
else{
alert("Share not supported");
}

}
