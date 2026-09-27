let EndDate;

const inputs = document.querySelectorAll("input");

function startClock() {
    const userDate = document.getElementById("dateInput").value;

    if (!userDate) {
        alert("Please select a date and time");
        return;
    }

    EndDate = new Date(userDate);

    document.getElementById("endDate").innerText = EndDate;

    clock();
}

function clock() {

    const end = new Date(EndDate);
    const now = new Date();

    const diff = (end - now) / 1000;

    if (diff < 0) return;

    inputs[1].value = Math.floor(diff / 3600 / 24);
    inputs[2].value = Math.floor(diff / 3600) % 24;
    inputs[3].value = Math.floor(diff / 60) % 60;
    inputs[4].value = Math.floor(diff) % 60;
}

setInterval(() => {
    if (EndDate) {
        clock();
    }
}, 1000);
