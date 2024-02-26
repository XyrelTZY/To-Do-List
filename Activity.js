const addTXT = document.querySelector('.add-txt');
const addBTN = document.querySelector('.add-btn');
const todoList = document.querySelector('.list');

//Data format
let data = [];

//Initial value (rendering)
function renderData() {
  let str = "";
  data.forEach(function (item, index) {
    str += `<li><input id="li${index}" type="checkbox"
  class="check"><label for="li${index}">${item.content}</label><a class="delete" data-num="${index}" href="#">X</a></li>`;
  })
  todoList.innerHTML = str;
  addTXT.value = "";
}

//Add new to-do (push to data)
addBTN.addEventListener('click', function (e) {
  if (addTXT.value == "") {
    alert('Please enter to-do items');
    return;
  }
  let obj = {}
  obj.content = addTXT.value;
  data.push(obj);
  renderData();
  console.log(data);
  console.log(addTXT.innerHTML);
})


//Delete agent 
todoList.addEventListener('click', function (e) {
  if (e.target.getAttribute("class") !== "delete") {
    console.log('oh');
    return;
  }
  let aim = e.target.getAttribute('data-num');
  data.splice(aim, 1);
  console.log(data);
  renderData();
})