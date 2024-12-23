function toggleForm() {
    const modalBackground = document.getElementById("modal-background");
    if (modalBackground.style.display === "none") {
        modalBackground.style.display = "flex";
    } else {
        modalBackground.style.display = "none";
    }
}

function switchMode() {
    const isChecked = document.getElementById("toggle-mode").checked;
    const modeLabel = document.getElementById("mode-label");
    const onlineFields = document.getElementById("online-fields");
    const offlineFields = document.getElementById("offline-fields");

    if (isChecked) {
        modeLabel.textContent = "Offline";
        onlineFields.style.display = "none";
        offlineFields.style.display = "block";
    } else {
        modeLabel.textContent = "Online";
        onlineFields.style.display = "block";
        offlineFields.style.display = "none";
    }
}
