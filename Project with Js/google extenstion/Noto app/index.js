const inputEL  = document.querySelector(".input-el");
const saveEl = document.querySelector(".save-el");
const notesGrid = document.querySelector(".notes");
const colorBtn = document.querySelector(".colors");
let headerColor = "nothing";
let i ;
i = localStorage.getItem("index");



let notes = [];

storage = JSON.parse(localStorage.getItem("notes"));
if(storage){
  notes = storage;
  headerEl = document.querySelector('.header-el');

  
  
  if(i == 1){
    setColor("input-green-color","input-save-green","header-green");
    headerColor = "header-green";
    
  }
  else if(i == 2){
    setColor("input-yellow-color","input-save-yellow","header-yellow");
    headerColor = "header-yellow";
    
  }
  else if(i == 3){
    setColor("input-blue-color","input-save-blue","header-blue");
    headerColor = "header-blue";
    
  }
  else if(i == 4){
    setColor("input-pink-color","input-save-pink","header-pink");
    headerColor = "header-pink";
    
  }
  else if(!i){
    setColor("input-green-color","input-save-green","header-green");
    headerColor = "header-green";

  }
  
  
  
render(notes,headerColor);}




notesGrid.addEventListener("click",deleteNote);

inputEL.addEventListener('keyup', (e) =>{
    if(e.keyCode == 13){
      console.log("hi");
      save();
    }
})
saveEl.addEventListener("click", save);

function render(notes, string){
    
    
   notesGrid.innerHTML = "";
   
  

  for( let i = 0; i<notes.length; i++){
    // create the note
    const noteEL = document.createElement('div')
    noteEL.classList.add("note-el");
    // create the header
    const header = document.createElement('header');
    header.classList.add(string);
    // create the time elements
    const divTime = document.createElement('div');
    divTime.classList.add('div-time');
    const time1 = document.createElement('p')
    time1.classList.add('time-1')
    time1.textContent = `${notes[i].year}/${notes[i].month}/${notes[i].day}`;
    divTime.appendChild(time1);
    const time2 = document.createElement('p')
    time2.classList.add('time-2')
    time2.textContent = `${notes[i].hours}:${notes[i].minutes}`;
    divTime.appendChild(time2);
    header.appendChild(divTime);
    // create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = `<img src="x.png" alt="delete">`;
    header.appendChild(deleteBtn);
    noteEL.appendChild(header);
    // create the content 
    const content = document.createElement('p');
    content.classList.add('content');
    content.textContent = notes[i].value;
    noteEL.appendChild(content);

    notesGrid.appendChild(noteEL);}


  }
  function save(){
      
       if(inputEL.value != ""){
        
        const d = new Date();
        
        const note = { value: inputEL.value,
                       year: d.getFullYear(),
                       month: String(d.getMonth() + 1).padStart(2, '0'),
                       day: String(d.getDate()).padStart(2, '0'),
                       hours: d.getHours(),
                       minutes: d.getMinutes(),
        }
        notes.unshift(note);
        localStorage.setItem("notes", JSON.stringify(notes));
        render(notes,headerColor);
        localStorage.setItem("notes", JSON.stringify(notes));
        inputEL.value = "";
       }
}
function deleteNote(e){
  
    const item = e.target;
    // delete
    if(item.classList[0] === 'delete'){
        const head = item.parentElement;
        const note = head.parentElement;
        note.classList.toggle('fall2');
        localStorage.clear("notes")

        note.addEventListener('transitionend', function(){
          for( let i = 0; i<notes.length;i++){
        if( notes[i].value === note.children[1].innerText){
            notes.splice(i, 1);
        };}
        localStorage.setItem('notes', JSON.stringify(notes));
        render(notes, headerColor);})


    }
    
}

function setColor(inputColor, saveColor, headerColor){
    inputEL.classList.remove("input-green-color");
    inputEL.classList.remove("input-yellow-color");
    inputEL.classList.remove("input-pink-color");
    inputEL.classList.remove("input-blue-color");
    
    inputEL.classList.add(inputColor);
    
    saveEl.classList.remove("input-save-green");
    saveEl.classList.remove("input-save-yellow");
    saveEl.classList.remove("input-save-pink");
    saveEl.classList.remove("input-save-blue");
    saveEl.classList.add(saveColor);

  render(notes,headerColor);}

colorBtn.addEventListener("click", function(e){
    const item = e.target.value;
    
    switch(item){
      case "green":
        setColor("input-green-color","input-save-green","header-green");
        headerColor = "header-green";
        i = 1;
        localStorage.setItem("index",i);
        break;
      case "yellow":
        setColor("input-yellow-color", "input-save-yellow","header-yellow");
        headerColor = "header-yellow";
        i = 2;
        localStorage.setItem("index",i);
        break;
      case "blue":
        setColor("input-blue-color", "input-save-blue","header-blue");
        headerColor = "header-blue";
        i = 3;
        localStorage.setItem("index",i);
        break;
       case "pink":
        setColor("input-pink-color", "input-save-pink","header-pink");
        headerColor = "header-pink";
        i = 4;
        localStorage.setItem("index",i);
        break;
      }
        
        
      
      
      
      


    
    
    
})





