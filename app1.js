// Function to show login screen
function showLoginScreen() {
    hideAllScreens();
    document.getElementById('login-screen').classList.add('active');
}

// Function to show sign up screen
function showSignUpScreen() {
    hideAllScreens();
    document.getElementById('signup-screen').classList.add('active');
}
function login() {
    const loginUsername = document.getElementById("login-username").value;
    const loginPassword = document.getElementById("login-password").value;
    const users = getUsersFromStorage();
    const user = users.find(user => user.username === loginUsername && user.password === loginPassword);
        alert("You Login Successfully");
}
// Function to handle sign up
function signUp() {
    const signUpUsername = document.getElementById("signup-username").value;
    const signUpPassword = document.getElementById("signup-password").value;
    const signUpRole = document.getElementById("signup-role").value;
    const users = getUsersFromStorage();
    // const adminExists = users.some(user => user.role === "admin");

    // if (signUpRole === "admin" && adminExists) {
    //     alert("Admin exists");
    //     return;
    // }

    if (signUpUsername && signUpPassword) {
        users.push({ username: signUpUsername, password: signUpPassword, role: signUpRole });
        localStorage.setItem('users', JSON.stringify(users));
        showLoginScreen();
        displayUsers();
    }
}
function order(buttonElement){
    const heading=buttonElement.getAttribute('data-heading');
    const details=buttonElement.getAttribute('data-sub');
    const price=buttonElement.getAttribute('data-price');
    let order=document.querySelector(".order");
    let orderDetails=document.createElement("div");//create a div named formDetails
    orderDetails.style.cssText="padding:30px";//give a padding of 30px
    orderDetails.innerHTML="<strong>PLACE YOUR ORDER! </strong>"+"<br>"+"<strong>Item Name: </strong>"+heading+"<br>"+
    "<strong>Details: </strong>"+details+"<br>"+"<strong>Price: $</strong>"+price+"<br>"+
    "<strong>You have to pay $</strong>"+price;//give Details of Form using InnerHTML property
   order.appendChild(orderDetails);//append this child div(formDetails) so that it displays after the form
    }