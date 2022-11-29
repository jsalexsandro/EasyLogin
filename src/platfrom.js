const isLogated = localStorage.getItem("isLogged")

if (isLogated != "yes") {
  location.assign("/")
}

const _name = localStorage.getItem("name")

const p = document.querySelector("p")
p.innerText = `Olá´, ${_name}!`

const logoutButton = document.getElementById("logout")
logoutButton.addEventListener("click", () => {
  localStorage.clear()
  location.assign("/")
})