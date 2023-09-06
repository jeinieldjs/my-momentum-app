window.addEventListener("load", function() {
  let focus = localStorage.getItem("focus");
  if (focus) {
    showFocus(focus);
  }
});

function saveFocus() {
  let focusInput = document.getElementById("focusInput");
  let focusText = focusInput.value;

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
  let focusText = document.getElementById("focusText");
  focusText.classList.toggle("completed");

  let isCompleted = focusText.classList.contains("completed"); 
  localStorage.setItem("completedStatus", isCompleted.toString()); 
}

function showFocus(focus) {
  let focusDisplay = document.getElementById("focusDisplay");
  let focusText = document.getElementById("focusText");
  let focusInput = document.getElementById("focusInput");

  focusText.textContent = focus;
  focusDisplay.style.display = "block";
  focusInput.style.display = "none";

  let isCompleted = localStorage.getItem("completedStatus") === "true"; 
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
