
document.addEventListener("DOMContentLoaded", checkstyle());
function checkstyle(currStyle){
    if(localStorage.getItem("style")=="style2.css"){
       // change the css
       document.getElementById('page_style').setAttribute("href", "style2.css");
      }
};
function style1()
{
    if(localStorage.getItem("style")=="style2.css"){
    localStorage.clear();
    document.getElementById('page_style').setAttribute("href", "style1.css");
    } else{
    localStorage.setItem("style","style2.css")
    document.getElementById('page_style').setAttribute("href", "style2.css");
    }
}
function style2()
{
    localStorage.setItem("style","style2.css")
    document.getElementById('page_style').setAttribute("href", "style2.css");
}