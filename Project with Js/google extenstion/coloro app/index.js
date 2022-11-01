const gradientBtn = document.getElementById("g-btn");
const section = document.getElementById("gradient-color");
const saved = document.getElementById("save-btn");
const magicColor = document.getElementById("m-btn");

let colorSaved = [];






let colorObject = [
    {first:"#00ff87",
     second:"#60efff"},
     

     {first:"#0061ff",
     second:"#60efff"},

     {first:"#ff1b6b",
     second:"#45caff"},

     {first:"#40c9ff",
     second:"#e81cff"},

     {first:"#ff930f",
     second:"#fff95b"},

     {first:"#ff0f7b",
     second:"#f89b29"},

     {first:"#bf0fff",
     second:"#cbff49"},

     {first:"#696eff",
     second:"#f8acff"},
     
     {first:"#a9ff68",
     second:"#60efff"},
     

     {first:"#0061ff",
     second:"#ff8989"},

     {first:"#ff5858",
     second:"#ffc8c8"},

     {first:"#595cff",
     second:"#c6f8ff"},

     {first:"#c6f8ff",
     second:"#ffeda0"},

     {first:"#ef709b",
     second:"#fa9372"},

     {first:"#b2ef91",
     second:"#fa9372"},

     {first:"#9bf8f4",
     second:"#6f7bf7"},
     //yet 
     {first:"#f9c58d",
     second:"#f492f0"},
     

     {first:"#f492f0",
     second:"#a18dce"},

     {first:"#f9b16e",
     second:"#f68080"},

     {first:"#9bafd9",
     second:"#103783"},

     {first:"#fbd07c",
     second:"#f7f779"},

     {first:"#ebf4f5",
     second:"#b5c6e0"},

     {first:"#b5c6e0",
     second:"#f6d5f7"},

     {first:"#fbe9d7",
     second:"#faae7b"},
     
     {first:"#e9b7ce",
     second:"#d3f3f1"},
     

     {first:"#439cfb",
     second:"#f187fb"},

     {first:"#1dbde6",
     second:"#f1515e"},

     {first:"#57ebde",
     second:"#aefb2a"},

     {first:"#42047e",
     second:"#42047e"},

     {first:"#f4f269",
     second:"#5cb270"},

     {first:"#b190ba",
     second:"#e8b595"},

     {first:"#b597f6",
     second:"#96c6ea"},
]

show();
gradientBtn.addEventListener("click", show);
saved.addEventListener("click",function(){
    colorSaved = JSON.parse(localStorage.getItem("colorSaved"));
    renderSaved(colorSaved);
})
magicColor.addEventListener("click",function(){
    let randomColor =[
     { first:'#'+Math.floor(Math.random()*16777215).toString(16),
     second:'#'+Math.floor(Math.random()*16777215).toString(16)},
             { first:'#'+Math.floor(Math.random()*16777215).toString(16),
     second:'#'+Math.floor(Math.random()*16777215).toString(16)},
             { first:'#'+Math.floor(Math.random()*16777215).toString(16),
     second:'#'+Math.floor(Math.random()*16777215).toString(16)},
             { first:'#'+Math.floor(Math.random()*16777215).toString(16),
     second:'#'+Math.floor(Math.random()*16777215).toString(16)},
             { first:'#'+Math.floor(Math.random()*16777215).toString(16),
     second:'#'+Math.floor(Math.random()*16777215).toString(16)}]
    
     render(randomColor);

})
function show(){
    if(JSON.parse(localStorage.getItem("colorObject")));
    colorObject = JSON.parse(localStorage.getItem("colorObject"));
    render(colorObject);
}
function render(colors){
    section.innerHTML = "";
    if(colors){
    for(let i = 0; i<colors.length;i++){
    // the main unit
    const element = document.createElement("div");
    element.classList.add("element");
    // background
    const Background = document.createElement("div");
    Background.classList.add("background");
    Background.style.background = `linear-gradient(90deg,${colors[i].first},${colors[i].second})`;
    element.appendChild(Background);
    // details
    const details = document.createElement("div");
    details.classList.add("details");
    const firstColor = document.createElement("div");
    firstColor.style.background = colors[i].first;
    firstColor.style.boxShadow = `1px 2px 15px ${colors[i].first}`;
    details.appendChild(firstColor);
    const firstP = document.createElement("p");
    firstP.innerHTML = colors[i].first;
    details.appendChild(firstP);
    const savee = document.createElement("button");
    savee.classList.add("save-element");
    savee.textContent = "save";
    details.appendChild(savee);
    const secondColor = document.createElement("div");
    secondColor.style.background = colors[i].second;
    secondColor.style.boxShadow = `1px 2px 15px ${colors[i].second}`;
    details.appendChild(secondColor);
    const secondP = document.createElement("p");
    secondP.innerHTML = colors[i].second;
    details.appendChild(secondP);
    element.appendChild(details);
    section.append(element);
    }}}


    function renderSaved(colors){
    section.innerHTML = "";
    if(colors){
    for(let i = 0; i<colors.length;i++){
    // the main unit
    const element = document.createElement("div");
    element.classList.add("element");
    // background
    const Background = document.createElement("div");
    Background.classList.add("background");
    Background.style.background = `linear-gradient(90deg,${colors[i].first},${colors[i].second})`;
    element.appendChild(Background);
    // details
    const details = document.createElement("div");
    details.classList.add("details");
    const firstColor = document.createElement("div");
    firstColor.style.background = colors[i].first;
    firstColor.style.boxShadow = `1px 2px 15px ${colors[i].first}`;
    details.appendChild(firstColor);
    const firstP = document.createElement("p");
    firstP.innerHTML = colors[i].first;
    details.appendChild(firstP);
    const deletee = document.createElement("button");
    deletee.classList.add("delete-element");
    deletee.textContent = "delete";
    details.appendChild(deletee);
    const secondColor = document.createElement("div");
    secondColor.style.background = colors[i].second;
    secondColor.style.boxShadow = `1px 2px 15px ${colors[i].second}`;
    details.appendChild(secondColor);
    const secondP = document.createElement("p");
    secondP.innerHTML = colors[i].second;
    details.appendChild(secondP);
    element.appendChild(details);
    section.append(element);
    }}}
    

   
    if(section.innerHTML!=""){
    
    section.addEventListener("dblclick",function(e){
        let item = e.target;
        console.log(item);
        let parent = item.parentElement;
        let grandParent = parent.parentElement;
        console.log(parent);
        let firstC = parent.children[1].innerText;
        console.log(firstC);
        let secondC = parent.children[4].innerText;
        console.log(secondC);
        let colorO = {
            first:`${firstC}`,
            second:`${secondC}`
        }
        if(item.classList.contains("save-element")){
    
        colorSaved.unshift(colorO);
        localStorage.setItem("colorSaved", JSON.stringify(colorSaved));
        grandParent.classList.add("bigger");
        grandParent.addEventListener('transitionend', function(){
        for (let i = 0; i<colorObject.length; i++){
            if(colorObject[i].first == colorO.first && colorObject[i].second == colorO.second){
                 colorObject.splice(i, 1);
                localStorage.setItem("colorObject",JSON.stringify(colorObject));
                 render(colorObject);
            }}})}
        else if(item.classList.contains("delete-element")){
            colorObject.unshift(colorO);
            localStorage.setItem("colorObject",JSON.stringify(colorObject));
        grandParent.classList.add("smaller");
        grandParent.addEventListener('transitionend', function(){
        for (let i = 0; i<colorSaved.length; i++){
            if(colorSaved[i].first == colorO.first && colorSaved[i].second == colorO.second){
                
                 colorSaved.splice(i, 1);
                 localStorage.setItem("colorSaved", JSON.stringify(colorSaved));
                 renderSaved(colorSaved);
            }}})
        }
            
        }

        

        

    )}



    
