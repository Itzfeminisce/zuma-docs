
window.addEventListener("load",()=>{
   console.log(zuma)
      const sb = document.querySelector('#sidebar')
    const openSidebarBtn = document.querySelector('#open-sidebar')
    const closeSidebarBtn = document.querySelector('#close-sidebar')
    openSidebarBtn?.addEventListener("click",()=>{
        sb.classList.toggle('open')
    })  
    closeSidebarBtn?.addEventListener("click",()=>{
        sb.classList.toggle('open')
    })  
    
 
})