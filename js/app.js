const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetings = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME = "username";

function handleLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME, username);
    showGreetings(username);
}

function showGreetings(username){
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greetings.innerText = `Hello ${username}!`;
    greetings.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME);

if(savedUsername === null){
    loginForm.addEventListener("submit", handleLoginSubmit);
}
else{
    showGreetings(savedUsername);
}