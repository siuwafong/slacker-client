

function loginFunction() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  console.log(password);
  console.log(username);
  if (username === "Wilson" && password === "1234") {
    window.open("profile.html", "Profile");
  } else {
    alert("Wrong username or password!");
  }
}
