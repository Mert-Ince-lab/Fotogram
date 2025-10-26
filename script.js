function logUp(){console.log("logUp");}
function logDown(){console.log("logDown");}

function logDownWBubblingProtection(event){
    console.log (logDown);
    event.stopPropagation()
}