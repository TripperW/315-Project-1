
document.addEventListener("DOMContentLoaded", checkstyle());
function checkstyle(){
    if(localStorage.getItem("style")=="style2.css"){
        //change the css
        document.getElementById('page_style').setAttribute("href", "style2.css");
      } else if(localStorage.getItem("style")!="style1.css"){
        localStorage.setAttribute("style", "style1.css");
      }
};

function style1()
{
    if(localStorage.getItem("style")=="style1.css"){
        //change the css
        localStorage.setAttribute("style", "style2.css");
        document.getElementById('page_style').setAttribute("href", "style2.css");
      }
     if(localStorage.getItem("style")=="style2.css"){
        localStorage.setAttribute("style", "style1.css");
        document.getElementById('page_style').setAttribute("href", "style1.css");
      }
    
    
}
