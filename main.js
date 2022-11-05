const User_name = document.getElementById("register_form");
if(User_name) User_name.addEventListener("submit", User);


function User_Object(e){
    e.preventDefault();
    let first_name = document.getElementById("firstname").value;
    let last_name = document.getElementById("lastname").value;
    let user_name = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let note = ""; //document.getElementById("note").value;
    const newUser = new User(first_name,last_name,user_name,password,note);
    console.log(newUser);
    console.log(`username =${user_name}`)
    console.log(`note= ${note}`)
}

function User(first_name="",last_name="",user_name,password,note=""){
    this.first_name = first_name;  //document.getElementById("firstname").value;
    this.last_name = last_name; //document.getElementById("lastname").value;
    this.user_name = user_name; //document.getElementById("username").value;
    this.password = password; //document.getElementById("password").value;
    this.note = note;
}

User.prototype.getfirst_Name = function(){
    return this.first_name;
}

User.prototype.getlast_Name = function(){
    return this.last_name;
}

User.prototype.getuser_name = function(){
    return this.user_name;
}

User.prototype.getnote = function(){
    return this.note;
}


User.prototype.setfirst_Name = function(first_name){
    this.first_name = first_name;
}

User.prototype.setlast_Name = function(last_name){
    this.last_name = last_name;
}

User.prototype.setuser_name = function(user_name){
    this.user_name = user_name;
}

User.prototype.setnote = function(note){
    this.note = note;
}