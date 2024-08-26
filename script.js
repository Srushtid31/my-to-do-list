const input = document.querySelector("input");
const addButton = document.querySelector(".add-button");
const todosHtml = document.querySelector(".todos");
const emptyImage = document.querySelector(".empty-image");
let todosJson = JSON.parse(localStorage.getItem("todos")) || [];
const deleteAllButton = document.querySelector(".delete-all");
const filters = document.querySelectorAll(".filter");
let filter = '';

showTodos();

function getTodoHtml(todo, index) {
  if (filter && filter != todo.status) {
    return '';
  }
  let checked = todo.status == "completed" ? "checked" : "";
  return /* html */ `
    <li class="todo">
      <label for="${index}">
        <input id="${index}" onclick="updateStatus(this)" type="checkbox" ${checked}>
        <span class="${checked}">${todo.name}</span>
      </label>
      <button class="delete-btn" data-index="${index}" onclick="remove(this)"><i class="fa fa-times"></i></button>
    </li>
  `; 
}

function showTodos() {
  if (todosJson.length == 0) {
    todosHtml.innerHTML = '';
    emptyImage.style.display = 'block';
  } else {
    todosHtml.innerHTML = todosJson.map(getTodoHtml).join('');
    emptyImage.style.display = 'none';
  }
}

function addTodo(todo)  {
  input.value = "";
  todosJson.unshift({ name: todo, status: "pending" });
  localStorage.setItem("todos", JSON.stringify(todosJson));
  showTodos();
}

input.addEventListener("keyup", e => {
  let todo = input.value.trim();
  if (!todo || e.key != "Enter") {
    return;
  }
  addTodo(todo);
});

addButton.addEventListener("click", () => {
  let todo = input.value.trim();
  if (!todo) {
    return;
  }
  addTodo(todo);
});

function updateStatus(todo) {
  let todoName = todo.parentElement.lastElementChild;
  if (todo.checked) {
    todoName.classList.add("checked");
    todosJson[todo.id].status = "completed";
  } else {
    todoName.classList.remove("checked");
    todosJson[todo.id].status = "pending";
  }
  localStorage.setItem("todos", JSON.stringify(todosJson));
}

function remove(todo) {
  const index = todo.dataset.index;
  todosJson.splice(index, 1);
  showTodos();
  localStorage.setItem("todos", JSON.stringify(todosJson));
}

filters.forEach(function (el) {
  el.addEventListener("click", (e) => {
    if (el.classList.contains('active')) {
      el.classList.remove('active');
      filter = '';
    } else {
      filters.forEach(tag => tag.classList.remove('active'));
      el.classList.add('active');
      filter = e.target.dataset.filter;
    }
    showTodos();
  });
});

deleteAllButton.addEventListener("click", () => {
  todosJson = [];
  localStorage.setItem("todos", JSON.stringify(todosJson));
  showTodos();
});

const snowContainer = document.querySelector('.snow-container');


// Function to format the date
function formatDate(date) {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const day = date.getDate();
  const   
 month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;   

}

// Function to update the displayed date
function updateDate() {
  const today = new Date();
  const formattedDate = formatDate(today);
  document.getElementById("date-display").textContent = formattedDate;
}

// Update the date on page load
updateDate();

const quotes = [
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there",
    "The only way to do great work is to love what you do",
    "Don't be afraid to give up the good to go for the great",
    "You can't climb the ladder of success with your hands in your pockets",
    "The best way to find yourself is to lose yourself in the service of others",
    "Success is not about how much you earn, but about the difference you make",
    "The greatest glory in living lies not in never falling, but in rising every time we fall",
    "Every journey begins with a single step",
    "Life is 10% what happens to you and 90% how you react to it",
    "Don't let yesterday use up too much of today",
    "Don't watch the clock; do what the clock does. Keep going.",
    "The only person you are destined to become is the person you decide to be",
    "Your attitude is like a box. It's either open or closed. Choose wisely.",
    "Don't stop until you're proud",
    "The only limit to our realization of tomorrow will be our doubts of today",
    "Don't focus on being perfect, just focus on being better than you were yesterday",
    "If you don't like something, change it. If you can't change it, change your attitude",
    "Don't let anyone tell you that you can't do something",
    "The biggest adventure you can take is to live a life you love",
    "You can't stop the waves, but you can learn to surf",
    "The journey of a thousand miles begins with a single step",
    "Believe in yourself and all that you are. Know that you are capable of more than you imagine.",
    "The only person you are destined to become is the person you decide to be",
    "Your attitude is like a box. It's either open or closed. Choose wisely.",
    "Don't stop until you're proud",
    "The only limit to our realization of tomorrow will be our doubts of today",
    "Don't focus on being perfect, just focus on being better than you were yesterday",
    "If you don't like something, change it. If you can't change it, change your attitude",
    "Don't let anyone tell you that you can't do something",
    "The biggest adventure you can take is to live a life you love",
    "You can't stop the waves, but you can learn to surf",
    "The journey of a thousand miles begins with a single step",
    "Believe in yourself and all that you are. Know that you are capable of more than you imagine.",
    "The only person you are destined to become is the person you decide to be",
    "Your attitude is like a box. It's either open or closed. Choose wisely.",
    "Don't stop until you're proud",
    "The only limit to our realization of tomorrow will be our doubts of today",
    "Don't focus on being perfect, just focus on being better than you were yesterday",
    "If you don't like something, change it. If you can't change it, change your attitude",
    "Don't let anyone tell you that you can't do something",
    "The biggest adventure you can take is to live a life you love",
    "You can't stop the waves, but you can learn to surf",
    "The journey of a thousand miles begins with a single step",
    "Believe in yourself and all that you are. Know that you are capable of more than you imagine.",
    "The only person you are destined to become is the person you decide to be",
    "Your attitude is like a box. It's either open or closed. Choose wisely.",
    "Don't stop until you're proud",
    "The only limit to our realization of tomorrow will be our doubts of today",
    "Don't focus on being perfect, just focus on being better than you were yesterday",
    "If you don't like something, change it. If you can't change it, change your attitude",
    "Don't let anyone tell you that you can't do something",
    "The biggest adventure you can take is to live a life you love",
    "You can't stop the waves, but you can learn to surf",
    "The journey of a thousand miles begins with a single step",
    "Believe in yourself and all that you are. Know that you are capable of more than you imagine.",
    "The only person you are destined to become is the person you decide to be",
    "Your attitude is like a box. It's either open or closed. Choose wisely.",
    "Don't stop until you're proud",
    "The only limit to our realization of tomorrow will be our doubts of today",
    "Don't focus on being perfect, just focus on being better than you were yesterday",
    "If you don't like something, change it. If you can't change it, change your attitude",
    "Don't let anyone tell you that you can't do something",
    "The biggest adventure you can take is to live a life you love",
    "You can't stop the waves, but you can learn to surf",
    "The journey of a thousand miles begins with a single step",
    "Believe in yourself and all that you are. Know that you are capable of more than you imagine.",
    "The only person you are destined to become is the person you decide to be",
    "Your attitude is like a box. It's either open or closed. Choose wisely.",
    "Don't stop until you're proud",
    "The only limit to our realization of tomorrow will be our doubts of today",
    "Don't focus on being perfect, just focus on being better than you were yesterday",
    "If you don't like something, change it. If you can't change it, change your attitude",
    "Don't let anyone tell you that you can't do something",
    "The biggest adventure you can take is to live a life you love",
    "You can't stop the waves, but you can learn to surf",
    "The journey of a thousand miles begins with a single step",
    "Believe in yourself and all that you are. Know that you are capable of more than you imagine.",
    "The only person you are destined to become is the person you decide to be",
    "Your attitude is like a box. It's either open or closed. Choose wisely.",
    "Don't stop until you're proud",
    "The only limit to our realization of tomorrow will be our doubts of today",
    "Don't focus on being perfect, just focus on being better than you were yesterday",
    "If you don't like something, change it. If you can't change it, change your attitude",
    "Don't let anyone tell you that you can't do something",
    "The biggest adventure you can take is to live a life you love",
    "You can't stop the waves, but you can learn to surf",
    "The journey of a thousand miles begins with a single step",
    "Believe in yourself and all that you are. Know that you are capable of more than you imagine.",
    "The only person you are destined to become is the person you decide to be",
    "Your attitude is like a box. It's either open or closed. Choose wisely.",
    "Don't stop until you're proud",
    "The only limit to our realization of tomorrow will be our doubts of today",
    "Don't focus on being perfect, just focus on being better than you were yesterday",
    "If you don't like something, change it. If you can't change it, change your attitude",
    "Don't let anyone tell you that you can't do something",
    "The biggest adventure you can take is to live a life you love",
    "You can't stop the waves, but you can learn to surf",
    "The journey of a thousand miles begins with a single step",
    "Believe in yourself and all that you are. Know that you are capable of more than you imagine.",
    "The only person you are destined to become is the person you decide to be",
    "Your attitude is like a box. It's either open or closed. Choose wisely.",
    "Don't stop until you're proud",
    "The only limit to our realization of tomorrow will be our doubts of today",
    "Don't focus on being perfect, just focus on being better than you were yesterday",
    "If you don't like something, change it. If you can't change it, change your attitude",
    "Don't let anyone tell you that you can't do something",
    "The biggest adventure you can take is to live a life you love",
    "You can't stop the waves, but you can learn to surf",
    "The journey of a thousand miles begins with a single step",
    "Believe in yourself and all that you are. Know that you are capable of more than you imagine.",
    "The only person you are destined to become is the person you decide to be",
    "Your attitude is like a box. It's either open or closed. Choose wisely.",
    "Don't stop until you're proud",
    "The only limit to our realization of tomorrow will be our doubts of today"
    

];

const quoteElement = document.getElementById("quote");

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];   

}

function generateQuote() {
  const quote = getRandomQuote();
  quoteElement.textContent = ""; // Clear the previous quote
  quoteElement.textContent = quote; // Directly append the quote
}

// Generate an initial quote on page load
generateQuote();

// Automatically generate a new quote every 10 seconds (adjust as needed)
setInterval(generateQuote, 10000);

