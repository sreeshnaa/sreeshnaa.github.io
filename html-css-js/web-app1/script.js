function disMessage(){
    // a = 10
    // b =20
    // c = a+b
    //alert(c)
   // alert("hello");
   //alert(document.getElementById("txtEmail").value);
//lblMessage1.innerHTML = document.getElementById("txtEmail").value
 //lblMessage2.innerHTML = document.getElementById("txtpass").value
    let email = document.getElementById("txtEmail").value;
    let password = document.getElementById("txtpass").value;
    if (email == "allamsreeshna@gmail.com" && password === "1234"){
        lblMessage1.innerHTML = "Welcome";
    }else{
        lblMessage1.innerHTML = "Access Denied";
    }
}

    function showLoginForm(){
        let str = `<h3>Login Form</h3>
        <p><label id="lblMessage1"></label></p>
        <p><input type="text" id="txtEmail"/></p>
        <p><input type="password" id="txtpass"/></p>
        <p><button class="login-btn" onclick="disMessage()">Log In</button></p>
        <hr>
        <p><button class="create-btn" onclick="showRegisterForm()">Create Account</button></p>
`
        root.innerHTML = str
    }

    function showRegisterForm(){
        `
        <h3>showRegisterForm</h3>

        `
        root.innerHTML = str
    }
        
    