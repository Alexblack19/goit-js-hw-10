fetch("https://api.thecatapi.com/v1/breeds").then((o=>{if(console.log(o),!o.ok)throw new Error(o);return o.json()})).then((o=>o)).catch((o=>{console.log(o)}));
//# sourceMappingURL=index.95770348.js.map
