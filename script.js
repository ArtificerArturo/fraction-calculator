function calculateFraction() {
    const numeratorLeftElement = document.querySelector("#numeratorLeft");
    const denominatorLeftElement = document.querySelector("#denominatorLeft");
    const numeratorRightElement = document.querySelector("#numeratorRight")
    const denominatorRightElement = document.querySelector("#denominatorRight")
    const operatorElement = document.querySelector("#operator")
    const resultElement = document.querySelector("#fractionResult");

    //round input to nearest integer. could change this to just reject non-integers
    const numeratorLeft = Math.round(numeratorLeftElement.value)
    const denominatorLeft = Math.round(denominatorLeftElement.value)
    const numeratorRight = Math.round(numeratorRightElement.value)
    const denominatorRight = Math.round(denominatorRightElement.value)

    //display rounded value back to user
    numeratorLeftElement.value = numeratorLeft
    denominatorLeftElement.value = denominatorLeft
    numeratorRightElement.value = numeratorRight
    denominatorRightElement.value = denominatorRight

    if (isNaN(denominatorLeft) || isNaN(denominatorRight) ||
        denominatorLeft <= 0 || denominatorRight <= 0) {
        resultElement.style.color = "red";
        resultWholeNumber.textContent = "Please enter valid numbers. Denominators cannot be negative or zero, and all fields must contain integers.";
        resultNumerator.textContent = ""
        resultDenominator.textContent = ""
        resultFractionBar.style.border = ""
    } else if (operatorElement.value == "plus") {
        displayFraction(math.add(math.fraction(numeratorLeft, denominatorLeft), math.fraction(numeratorRight, denominatorRight)))
    } else if (operatorElement.value == "minus") {
        displayFraction(math.subtract(math.fraction(numeratorLeft, denominatorLeft), math.fraction(numeratorRight, denominatorRight)))
    } else if (operatorElement.value == "multiply") {
        displayFraction(math.multiply(math.fraction(numeratorLeft, denominatorLeft), math.fraction(numeratorRight, denominatorRight)))
    } else {
        displayFraction(math.divide(math.fraction(numeratorLeft, denominatorLeft), math.fraction(numeratorRight, denominatorRight)))
    }
}

function displayFraction(result) {
    const resultWholeNumber = document.querySelector("#resultWholeNumber")
    const resultNumerator = document.querySelector("#resultNumerator")
    const resultDenominator = document.querySelector("#resultDenominator")
    const resultFractionBar = document.querySelector("#resultFractionBar")
    const resultElement = document.querySelector("#fractionResult");

    resultElement.style.color = "black";

    let resultArray = []
    let fractionArray = []

    if (result.n > result.d && result.d != 1) {
        //mixed number
        resultArray = result.toFraction(true).split(" ")
        resultWholeNumber.textContent = `Answer: ${resultArray[0]}`
        fractionArray = resultArray[1].split("/")
        resultNumerator.textContent = fractionArray[0]
        resultDenominator.textContent = fractionArray[1]
        resultFractionBar.style.border = "1px solid black"
    } else if (result.n % result.d == 0) {
        //whole number only
        resultWholeNumber.textContent = `Answer: ${result.toFraction(true)}`
        resultNumerator.textContent = ""
        resultDenominator.textContent = ""
        resultFractionBar.style.border = ""
    } else {
        //fraction only
        fractionArray = result.toFraction(true).split("/")
        resultWholeNumber.textContent = "Answer: "
        resultNumerator.textContent = fractionArray[0]
        resultDenominator.textContent = fractionArray[1]
        resultFractionBar.style.border = "1px solid black"
    }
}
