document.querySelector(".breed-select");fetch("https://api.thecatapi.com/v1/breeds").then((e=>{if(console.log(e),!e.ok)throw new Error(e);return e.json()})).then((function(e){console.log(e)})).catch((e=>{console.log(e)}));
//# sourceMappingURL=index.8f19fc8f.js.map
