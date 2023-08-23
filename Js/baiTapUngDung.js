// 1. Tạo form nhập thông tin sách gồm các thông tin: mã sách, tên sách, giá, tác giả
//2. Form goomg các input nhập thông tin và các button: lưu, LocalStorage, Display
// 3. Clik vào lưu: thực hiện lưu thôn tin vào mãng
//4. click vào LocalStorage thì thực hiện lưu mãng vào localStorage
// 5. Click vào Display thì lấy dữ liệu từ localStorrage

let arrBook = JSON.parse(localStorage.getItem("arrBook")) || [];

function save() {

    let bookId = document.getElementById("bookId").value;
    let bookName = document.getElementById("bookName").value;
    let bookPrice = document.getElementById("price").value;
    let booAuthor = document.getElementById("author").value;
    let newArrBook = {
        id: bookId,
        name: bookName,
        price: bookPrice,
        author: booAuthor,
    }
    console.log("aaa",arrBook);
    arrBook.push(newArrBook);
}


function setDataToLocal() {
    localStorage.setItem("arrBook", JSON.stringify(arrBook))
}


function getDataFromLocal() {
    let arrBookGet = JSON.parse(localStorage.getItem("arrBook"));
    console.log("arrBool", arrBookGet);
}