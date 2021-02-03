var bookmarkName = document.getElementById("bookmarkName");
var bookmarkUrl = document.getElementById("bookmarkUrl");
var btnSubmit = document.getElementById("btnSubmit");
var visitBookMark = document.getElementById("visitBookMark");
var deleteBookMark = document.getElementById("deleteBookMark");
var displayName = document.getElementById("displayName");


var bookMarkList;

if (localStorage.getItem("BookMarks") == null) {
    bookMarkList = [];
} else {
    bookMarkList = JSON.parse(localStorage.getItem("BookMarks"));
    dispayBookmark(bookMarkList);
}


btnSubmit.addEventListener("click", addBookMark);

function addBookMark() {
    var bookmark =
    {
        name: bookmarkName.value,
        url: bookmarkUrl.value
    };
    bookMarkList.push(bookmark);
    localStorage.setItem("BookMarks", JSON.stringify(bookMarkList));// trasnform JSON TO String
    clearData();
    dispayBookmark(bookMarkList);
}

function dispayBookmark(bookMarkList) {
    var bookmarks = "";
    for (var i = 0; i < bookMarkList.length; i++) {

        bookmarks += `
        <div class ="row bg-light my-4" id=${bookMarkList[i].name}>
            <h4 class="w-25"> ${bookMarkList[i].name}</h4>
            <a type="button" class="btn btn-primary col-md-1 mx-2" href ="${bookMarkList[i].url}"  target="_blank">Visit</a>
            <button class="btn btn-danger col-md-1" onclick="deleteBookmark(${i})">Delete</button>

        </div>
            `
    }
    document.getElementById("bookmark").innerHTML = bookmarks;
}



function deleteBookmark(index) {
    bookMarkList.splice(index, 1);
    localStorage.setItem("BookMarks", JSON.stringify(bookMarkList));
    dispayBookmark(bookMarkList);
}

function clearData() {
    bookmarkName.value = "",
        bookmarkUrl.value = ""
}