
let dangKy = document.getElementById("dangky");

function userinformation() {
    let names = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let uerName = { "name": names, "email": email, "phone": phone }
    console.log("slk", names);
    localStorage.setItem("userName", JSON.stringify(uerName));
};

dangKy.addEventListener("click", function (event) {
    event.preventDefault();
    userinformation();
})
