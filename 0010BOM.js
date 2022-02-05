// window Object:
function windowOp(){
    var newWindow = window.open("https://www.google.com", "newWindow", "height=100,width=200");
    newWindow.moveTo(200, 150);
    newWindow.close();
    window.close();
}


function navigatorProp(){
    document.write("<br> appcodeName: " + navigator.appCodeName);
    document.write("<br> appName: " + navigator.appName);
    document.write("<br> platform: " + navigator.platform);
    document.write("<br> cookie is enabled: " + navigator.cookieEnabled);
    document.write("<br> product: " + navigator.product);

}
//navigatorProp();

function locationProp(){
    console.log("href of location: " + location.href);
}
//locationProp();