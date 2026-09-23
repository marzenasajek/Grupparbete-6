const tryButton = document.querySelector("#try-button");
const result = document.querySelector("#result");
const serverStatus = document.querySelector("#server-status");
const aboutButton = document.querySelector("#about-button");
const kontaktButton = document.querySelector("#kontakt-button");
const bookingButton = document.querySelector("#booking-button");

if (aboutButton) {
  aboutButton.addEventListener("click", () => {
    window.location.href = "/omoss.html";
  });
}

if (kontaktButton) {
  kontaktButton.addEventListener("click", () => {
    window.location.href = "/kontakt.html";
  });
}

if (bookingButton) {
  bookingButton.addEventListener("click", () => {
    window.location.href = "/bokatid.html";
  });
}

if (tryButton) {
  tryButton.addEventListener("click", () => {
    const time = new Date().toLocaleTimeString("sv-SE");
    result.textContent = `Handlingen registrerades i browsern kl. ${time}.`;

    console.log("Starter interaction", {
      action: "try_button_clicked",
      occurredAt: new Date().toISOString(),
    });
  });
}

async function checkServer() {
  try {
    const response = await fetch("/api/health");
    const data = await response.json();

    serverStatus.textContent =
      data.status === "ok"
        ? "Servern svarar. Öppna Network i DevTools och hitta requesten."
        : "Servern svarade, men med ett oväntat resultat.";
  } catch (error) {
    console.error("Could not reach local server", error);
    serverStatus.textContent = "Kunde inte kontakta den lokala servern.";
  }
}

checkServer();
