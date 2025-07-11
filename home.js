let logout = document.getElementById("logout");
logout.addEventListener("click",()=>{
     window.location.href=`Create.html`;
    });
let feed =document.getElementById("username");
let btn=document.getElementById("add");
let clickon=true;
btn.addEventListener("click",(evt)=>
{
     evt.preventDefault();
     if(clickon===false)
     {
          btn.textContent="+";
          feed.style.visibility="hidden";
          clickon=true;
     }
     else
     {
     btn.textContent="<";
     feed.style.visibility="visible";
     clickon=false;
}
})
