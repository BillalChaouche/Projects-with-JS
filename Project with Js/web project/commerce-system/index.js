const title = document.getElementById("title");
const price = document.getElementById("price");
const taxes = document.getElementById("taxes");
const ads = document.getElementById("ads");
const discount = document.getElementById("discount");
const total = document.getElementById("total");
const count = document.getElementById("count");
const category = document.getElementById("category");
const submit = document.getElementById("submit");

let mod = 'create';
let temp;


// function get total
function getTotal(){
    if(price.value!=""){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = "linear-gradient(90deg,#57ebde,rgb(182, 249, 229))no-repeat";
    }
    else{
        total.innerHTML = "";
        total.style.background = "linear-gradient(90deg,rgb(209, 209, 209),rgb(255, 246, 248))no-repeat";
        
    }
}
// function create product
let dataPro;
if(localStorage.products!=null){
    dataPro = JSON.parse(localStorage.products);}
else{
    dataPro = [];
}
submit.onclick = function(){
    let newPro = {title:title.value.toLowerCase(),
                  price:price.value,
                  taxes:taxes.value,
                  ads:ads.value,
                  discount:discount.value,
                  total:total.innerHTML,
                  count:count.value,
                  category:category.value.toLowerCase()
}
if(title.value!= '' && price.value != '' && category.value != '' && count.value<= 500){  

 if(mod === 'create'){
// count
 if(count.value>1){
  for( let i = 0; i<newPro.count;i++){

    dataPro.push(newPro);}}
    else{
       dataPro.push(newPro); 
    }}

 else{
    dataPro[temp] = newPro;
    mod = 'create';
    submit.innerHTML = 'create';
    count.style.display = 'block';
 }clearData();
}

// save in localstorage
    localStorage.setItem('products', JSON.stringify(dataPro));
    
    showData();

}
// clear inputs
function clearData(){
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    total.innerHTML = "";
    total.style.background = "linear-gradient(90deg,rgb(209, 209, 209),rgb(255, 246, 248))no-repeat";
    count.value = "";
    category.value = "";
}
// read
function showData(){
    let table = "";
    for( let i = 0; i<dataPro.length; i++){
         table += `<tr>
                        <td>${i + 1}</td>
                        <td>${dataPro[i].title}</td>
                        <td>${dataPro[i].price}</td>
                        <td>${dataPro[i].taxes}</td>
                        <td>${dataPro[i].ads}</td>
                        <td>${dataPro[i].discount}</td>
                        <td>${dataPro[i].total}</td>
                        <td>${dataPro[i].category}</td>
                        <td><button onclick="updateData(${i})" id="update">update</button></td>
                        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                    </tr>`
    }
    document.getElementById('tbody').innerHTML = table;
    let btnDelete = document.getElementById('deleteAll');
    if(dataPro.length >0){
        btnDelete.innerHTML = `<button onclick="deleteAll()">delete All (${dataPro.length})</button>`

    }
    else{
        btnDelete.innerHTML = "";
    }

    
}
showData(); 

// delete
function deleteData(i){
   dataPro.splice(i, 1);
   localStorage.setItem("products", JSON.stringify(dataPro));
   showData();
}
function deleteAll(){
    dataPro = [];
    localStorage.setItem("products", JSON.stringify(dataPro));
   showData();
}
// update
function updateData(i){
  title.value = dataPro[i].title;
    price.value = dataPro[i].price;
    taxes.value = dataPro[i].taxes;
    ads.value = dataPro[i].ads;
    discount.value = dataPro[i].discount;
    count.value = dataPro[i].count;
    category.value = dataPro[i].category;
    getTotal();
    count.style.display = 'none';
    submit.innerHTML = 'Update';
    mod = 'update';
    temp = i;
    scroll({
        top:0,
        behavior:'smooth',
    })
}
// search
let search = document.getElementById('search');
let searchMood = 'title';
function getSearchMood(id){
    let search = document.getElementById('search');
    if(id == 'searchTitle'){
        searchMood = 'title';
        
    }
    else{
        searchMood = 'category';
        

    }
    search.placeholder = 'Search by ' + searchMood;
    search.focus();
    search.value = "";
    showData();
    
}
function searchData(value){
    let table = "";
    
        for( let i = 0; i<dataPro.length; i++){
            if(searchMood == 'title'){
            if(dataPro[i].title.includes(value.toLowerCase())){
                table += `<tr>
                        <td>${i + 1}</td>
                        <td>${dataPro[i].title}</td>
                        <td>${dataPro[i].price}</td>
                        <td>${dataPro[i].taxes}</td>
                        <td>${dataPro[i].ads}</td>
                        <td>${dataPro[i].discount}</td>
                        <td>${dataPro[i].total}</td>
                        <td>${dataPro[i].category}</td>
                        <td><button onclick="updateData(${i})" id="update">update</button></td>
                        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                       </tr>`
            }
        }

    
            else{
        
            if(dataPro[i].category.includes(value.toLowerCase())){
                table += `<tr>
                        <td>${i + 1}</td>
                        <td>${dataPro[i].title}</td>
                        <td>${dataPro[i].price}</td>
                        <td>${dataPro[i].taxes}</td>
                        <td>${dataPro[i].ads}</td>
                        <td>${dataPro[i].discount}</td>
                        <td>${dataPro[i].total}</td>
                        <td>${dataPro[i].category}</td>
                        <td><button onclick="updateData(${i})" id="update">update</button></td>
                        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
                       </tr>`
            }
        }


    }
    document.getElementById('tbody').innerHTML = table;
}
// clean data