function calculateVolume() {
    const radiusInputElement = document.getElementById("radius");
    const heightInputElement = document.getElementById("height");

    let radiusInput = radiusInputElement.value.replace(/,/g, '');
    let heightInput = heightInputElement.value.replace(/,/g, '');

    const radius = parseFloat(radiusInput);
    const height = parseFloat(heightInput);

    const resultElement = document.getElementById("result");

    if (isNaN(radius) || isNaN(height) || radius <= 0 || height <= 0) {
        resultElement.textContent = "Please enter valid numbers for radius and height.";
        resultElement.style.color = "red";
    } else {
        const volume = (1 / 3) * Math.PI * Math.pow(radius, 2) * height;

        // Format the volume result with commas
        const formattedVolume = volume.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });

        resultElement.textContent = `The volume of the cone is: ${formattedVolume} cubic units.`;
        resultElement.style.color = "black";

        // ✅ Format both input fields with commas after calculation
        radiusInputElement.value = radius.toLocaleString('en-US');
        heightInputElement.value = height.toLocaleString('en-US');
    }
}