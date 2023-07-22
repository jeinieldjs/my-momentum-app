window.addEventListener("load", function() {
  var focus = localStorage.getItem("focus");
  if (focus) {
    showFocus(focus);
  }
});

function saveFocus() {
  var focusInput = document.getElementById("focusInput");
  var focusText = focusInput.value;

  if (focusText.trim() !== "") {
    localStorage.setItem("focus", focusText);
    showFocus(focusText);
    focusInput.value = "";
  }
}

function deleteFocus() {
  localStorage.removeItem("focus");
  document.getElementById("focusDisplay").style.display = "none";
  document.getElementById("focusInput").style.display = "block";
  document.getElementById("focusText").classList.remove("completed"); 
  localStorage.removeItem("completedStatus"); 
}

function toggleCompleted() { 
  var focusText = document.getElementById("focusText");
  focusText.classList.toggle("completed");

  var isCompleted = focusText.classList.contains("completed"); 
  localStorage.setItem("completedStatus", isCompleted.toString()); 
}

function showFocus(focus) {
  var focusDisplay = document.getElementById("focusDisplay");
  var focusText = document.getElementById("focusText");
  var focusInput = document.getElementById("focusInput");

  focusText.textContent = focus;
  focusDisplay.style.display = "block";
  focusInput.style.display = "none";

  var isCompleted = localStorage.getItem("completedStatus") === "true"; 
  if (isCompleted) {
    focusText.classList.add("completed");
  } else {
    focusText.classList.remove("completed");
  }
}

function handleInput(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    saveFocus();
  }
}

document.getElementById("markCompleteIcon").addEventListener("click", toggleCompleted); 
document.getElementById("deleteIcon").addEventListener("click", deleteFocus);
