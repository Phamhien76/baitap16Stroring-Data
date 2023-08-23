//1.1 1.1 Thêm tên người dùng vào local storage với key name là userName.
//Sau khi thêm, dữ liệu sẽ được lưu trong local storage
// lấy value từ input

// them thong tin nguoi dung vaof local
let them = document.getElementById("them");
let danhSach = document.getElementById("danhSach");
let userName = localStorage.getItem("userName");
if (userName != null) {
    them.innerText = "Sửa";
}
function setUserNameData() {
    let userName = document.getElementById("userName").value;
    let userNameData = { "userName": userName };
    let arrNameData = [];
    arrNameData.push(userNameData);
    localStorage.setItem("userName", JSON.stringify(arrNameData));
}
//1.2 Sau khi nhấn nút “Thêm”, hiển tên người dùng bên dưới

them.addEventListener("click", function (event) {
    event.preventDefault();
    setUserNameData();
    them.value = "";



    //luu vao danh sach
    let getNameData = JSON.parse(localStorage.getItem("userName"));

    getNameData.forEach(element => {
        danhSach.innerHTML = element.userName

        them.innerText = "Sửa";
    });

})
//1.3 Sau khi nhấn nút “Xóa”, thông tin người dùng sẽ bị mất, 
let xoa = document.getElementById("xoa");
xoa.addEventListener("click", function () {
    localStorage.removeItem("userName");
})


//nút “sửa” chuyển thành nút “Thêm”.
