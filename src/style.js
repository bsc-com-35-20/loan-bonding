const container =ReactDOM.createContainer(document.getElementById('container'));
const registerBtn = ReactDOM.createRegisterBtn(document.getElementById('register'));
const loginBtn = ReactDOM.createLoginBtn(document.getElementById('login'));

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
