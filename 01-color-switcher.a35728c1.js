!function(){var t=null,e=document.body,a=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");a.addEventListener("click",(function(){a.disabled=!0,n.disabled=!1,t=setInterval((function(){e.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),n.addEventListener("click",(function(){a.disabled=!1,n.disabked=!0,clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.a35728c1.js.map