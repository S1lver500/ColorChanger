const maxCircles = 5; 
const circles = [];

// Farbe wechseln
function changeColor() {
    // Farbe generieren
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    // Neues Kreis
    const circle = document.createElement("div");
    circle.className = "circle";
    circle.style.backgroundColor = randomColor;

    // Position des Kreises
    circle.style.left = "50%";
    circle.style.top = "50%";
    circle.style.transform = "translate(-50%, -50%)";

    // Kreis anzeigen
    document.body.appendChild(circle);
    circles.push(circle);

    // alte Kreise löschen
    if (circles.length > maxCircles) {
        const oldCircle = circles.shift();
        oldCircle.remove();
    }

    // Farbe anschreiben
    var color = document.getElementById('color');
    color.textContent = randomColor;
}
