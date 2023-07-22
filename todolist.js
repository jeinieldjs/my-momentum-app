document.addEventListener("DOMContentLoaded", function () {
  let toDoContainer = document.getElementById("toDoContainer");
  let popUpContainer = document.getElementById("popUpContainer");
  let toDoHeading = document.getElementById("toDoHeading");
  let popUpToDoList = document.getElementById("popUpToDoList");
  let newToDoInput = document.getElementById("newToDoInput");
  let addNewToDoButton = document.getElementById("addNewToDoButton");

  function loadToDoItems() {
    let storedItems = JSON.parse(localStorage.getItem("toDoItems"));
    if (storedItems) {
      popUpToDoList.innerHTML = "";
      storedItems.forEach(function (item) {
        addNewToDoItem(item.TEXT, item.DONE);
      });
    }
  }

  function saveToDoItems() {
    let items = [];
    let listItems = popUpToDoList.querySelectorAll(".list-item");
    listItems.forEach(function (listItem) {
      let text = listItem.innerText;
      let isDone = listItem.classList.contains("done");
      items.push({ TEXT: text, DONE: isDone });
    });

    localStorage.setItem("toDoItems", JSON.stringify(items));
  }

  function addNewToDoItem(text, isDone) {
    let listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.innerText = text;
    if (isDone) {
      listItem.classList.add("done");
    }

    listItem.addEventListener("click", function () {
      listItem.classList.toggle("done");
      saveToDoItems();
    });

    listItem.addEventListener("dblclick", function () {
      popUpToDoList.removeChild(listItem);
      saveToDoItems();
    });

    popUpToDoList.appendChild(listItem);
  }

  toDoHeading.addEventListener("click", function () {
    if (popUpContainer.style.display === "none") {
      popUpContainer.style.display = "block";
      loadToDoItems();
    } else {
      popUpContainer.style.display = "none";
      saveToDoItems();
    }
  });

  addNewToDoButton.addEventListener("click", function () {
    var text = newToDoInput.value;
    if (text.trim() !== "") {
      addNewToDoItem(text, false);
      newToDoInput.value = "";
      saveToDoItems();
    }
  });

  function hidePopUp() {
    popUpContainer.style.display = "none";
  }

  function showPopUp() {
    popUpContainer.style.display = "block";
    loadToDoItems();
  }

  hidePopUp();
});

window.addEventListener("beforeunload", function () {
  document.getElementById("popUpContainer").style.display = "none";
});
