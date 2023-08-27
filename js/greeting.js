const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginGreeting = document.querySelector("#greeting");


const CLASSNAME_HIDDEN = "hidden";
const USER_NAME = "username";

function greetingUser(username){
  loginGreeting.innerText = `HELLO ${username}`;
  loginGreeting.classList.remove(CLASSNAME_HIDDEN);
}

function onLoginSumbit(event){
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem(USER_NAME, userName);
  greetingUser(userName);
  loginForm.classList.add(CLASSNAME_HIDDEN);
}

const loginName = localStorage.getItem(USER_NAME);

if(loginName === null){
  loginForm.classList.remove(CLASSNAME_HIDDEN);
  loginForm.addEventListener("submit", onLoginSumbit);
}
else{
  greetingUser(loginName);
}








