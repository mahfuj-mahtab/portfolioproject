var cursor = document.getElementsByClassName("cursor");
var cursorDot = document.getElementsByClassName("cursorDot");
document.addEventListener('mousemove',(e)=>{
    // console.log(cursor[0].style)
    cursor[0].style.cssText = cursorDot[0].style.cssText = "left: "+ e.clientX  + "px;top:" + e.clientY+ "px;";
    // console.log("moving")

})



typingspan = document.getElementsByClassName("typing-text")
textArray = ['Website developer','Website Designer']
charIndex = 0;
type = ()=>{
    // typingspan. "HH"
    console.log(typingspan)
}
type()