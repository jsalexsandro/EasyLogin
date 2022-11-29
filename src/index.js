// DOM (DOCUMENT OBJECT MODEL) 

const form = document.getElementById("form");
const isLogated = localStorage.getItem("isLogged")

if (isLogated == "yes") {
  location.assign("/platform.html")
}

form.onsubmit = (e) => {
  e.preventDefault(); // não da reload na pagina

  let pMessage = document.getElementById("message");
  let email = e.currentTarget.email.value
  let pass = e.currentTarget.password.value


  if (email == "admin" && pass == "123") {
    localStorage.setItem("isLogged", "yes")
    localStorage.setItem("name", "Jonh Doe")
    location.assign("/platform.html")
  } else {
    pMessage.innerText = "Valores incoretos"
  }
}