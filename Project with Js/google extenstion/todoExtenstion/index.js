// declaration
const inputEl = document.querySelector(".input-el");
const saveBtn = document.querySelector(".save-btn");
let container = document.querySelector(".container");

let tasks = [];


localTasks = JSON.parse(localStorage.getItem('tasks'));
if(localTasks){
    tasks = localTasks;
    render();
}



// click Events
saveBtn.addEventListener("click",save)
inputEl.addEventListener('keyup', (e) =>{
    if(e.keyCode == 13){
      console.log("hi");
      save ();
    }});

container.addEventListener("click", deleteItem);


//functions
function save(){
    if(inputEl.value != ""){
        tasks.push(inputEl.value);
        render();
        inputEl.value = '';
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }
};
function render(){
    container.innerHTML = "";
    for(let i = 0; i<tasks.length; i++){
        // create the task element
        const task  = document.createElement('div');
        task.classList.add('task');
        // create the content element
        const content  = document.createElement('p');
        content.classList.add('content');
        content.textContent = tasks[i];
        task.appendChild(content);
        // create the delete element
        const deletee  = document.createElement('button');
        deletee.classList.add('delete');
        deletee.innerHTML = `<img src="clear.png"></img>`;
        task.appendChild(deletee);
        if(i === 0){
            task.classList.add("border-top");
        }
        if(i === tasks.length - 1 ){
            task.classList.add("border-bottom");

        }
        if(i % 2 === 0){
            task.classList.add("first-color");
        }
        if( i % 2 === 1){
            task.classList.add("second-color");
        }

        

        container.appendChild(task);

    }
}
function deleteItem(e){
     const item = e.target;
     if(item.classList[0] === 'delete'){
         const todo = item.parentElement;
         todo.classList.toggle("fall");
         todo.addEventListener('transitionend', function(){
            for(let i = 0; i<tasks.length; i++){
                if(tasks[i] === todo.children[0].innerText){
                tasks.splice(i, 1);
                localStorage.setItem('tasks',JSON.stringify(tasks));
                render();}
            }}
            )
     };
}

