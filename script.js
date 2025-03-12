function calculateFraction() {
    const numeratorLeftElement = document.querySelector("#numeratorLeft");
    const denominatorLeftElement = document.querySelector("#denominatorLeft");
    const numeratorRightElement = document.querySelector("#numeratorRight")
    const denominatorRightElement = document.querySelector("#denominatorRight")
    const operatorElement = document.querySelector("#operator")

    const numeratorLeft = Math.round(numeratorLeftElement.value);
    const denominatorLeft = Math.round(denominatorLeftElement.value);
    const numeratorRight = Math.round(numeratorRightElement.value)
    const denominatorRight = Math.round(denominatorRightElement.value)

    const resultElement = document.querySelector("#result");

    if (isNaN(denominatorLeft) || isNaN(denominatorRight) || isNaN(numeratorLeft) || isNaN(numeratorRight) || denominatorLeft <= 0 || denominatorRight <= 0) {
        resultElement.textContent = "Please enter valid numbers. Denominators cannot be negative or zero, and all fields must contain an integer.";
        resultElement.style.color = "red";
    } else if (operatorElement.value == "plus") {
        let result = math.add(math.fraction(numeratorLeft, denominatorLeft), math.fraction(numeratorRight, denominatorRight))
        if (Number(result.n) > Number(result.d)) {
            let wholeNumber = Number(result.n) % Number(result.d)
            result = math.subtract(result, wholeNumber)
            resultElement.textContent = `The answer is: ${wholeNumber} ${result.toFraction()}`;
            resultElement.style.color = "black";
        } else {
            resultElement.textContent = `The answer is: ${result.toFraction()}`;
            resultElement.style.color = "black";
        }
    } else {
        //if operator minus -- modify if add multiply or divide or something
        let result = math.subtract(math.fraction(numeratorLeft, denominatorLeft), math.fraction(numeratorRight, denominatorRight))
        if (Number(result.n) > Number(result.d)) {
            let wholeNumber = Number(result.n) % Number(result.d)
            result = math.subtract(result, wholeNumber)
            resultElement.textContent = `The answer is: ${wholeNumber} ${result.toFraction()}`;
            resultElement.style.color = "black";
        } else {
            resultElement.textContent = `The answer is: ${result.toFraction()}`;
            resultElement.style.color = "black";
        }
    }
}
