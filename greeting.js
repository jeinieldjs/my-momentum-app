
function getSavedName() {
  const savedName = localStorage.getItem("userName");
  if (savedName) {
    const nameInput = document.getElementById("nameInput");
    const greetingDisplay = document.getElementById("greetingDisplay");
    const greetingText = document.getElementById("greetingText");

    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    let greeting;
    if (currentHour >= 5 && currentHour < 12) {
      greeting = "Good morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }

    greetingText.textContent = `${greeting}, ${savedName}!`;
    greetingDisplay.style.display = "block";
    nameInput.style.display = "none";

    greetingDisplay.addEventListener("click", function () {
      greetingDisplay.style.display = "none";
      nameInput.style.display = "block";
      nameInput.value = savedName;
      nameInput.focus();
    });
  }
}

function getGreeting(event) {
  if (event.key === "Enter") {
    const nameInput = document.getElementById("nameInput");
    const greetingDisplay = document.getElementById("greetingDisplay");
    const greetingText = document.getElementById("greetingText");

    const name = nameInput.value.trim();
    if (name !== "") {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();

      let greeting;
      if (currentHour >= 5 && currentHour < 12) {
        greeting = "Good morning";
      } else if (currentHour >= 12 && currentHour < 17) {
        greeting = "Good afternoon";
      } else {
        greeting = "Good evening";
      }

      greetingText.textContent = `${greeting}, ${name}!`;
      greetingDisplay.style.display = "block";
      nameInput.style.display = "none";

      localStorage.setItem("userName", name);
    }
  }
}

document.addEventListener("DOMContentLoaded", getSavedName);
