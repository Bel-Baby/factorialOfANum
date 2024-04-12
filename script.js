//write a program to calculate the factorial of a number.eg: factorial of 4 is 4*3*2*1 = 25
    

        // --Check factor using forLoops--
// const checkBtn = document.getElementById("check");

// const checkFactorial = () => {
//     const input = document.getElementById("input");
//     const result = document.getElementById("result");
//     let factorial = input.value;
//     let arr = [];

//     for (let i = factorial - 1; i >= 1; i--) {
//         arr.push(i);
//         factorial *= i;
//     }
//     if (factorial == 0) {
//         result.textContent = `0 = 0`;
//     }else {
//         result.textContent = `${input.value}x${arr.join("x")} = ${factorial}`;
//     }
// }

// checkBtn.addEventListener("click",checkFactorial);


        // --Check factor using ArrayFrom--

//const checkBtn = document.getElementById("check");

// const checkFactorial = () => {
//     const input = document.getElementById("input");
//     const result = document.getElementById("result");
//     let factorial = input.value;

//     const arr = Array.from({ length: factorial - 1 }, (_, i) => i + 1);
//     const resultFactorial = arr.reduce((acc, val) => acc * val, factorial);

//     if (factorial == 0) {
//         result.textContent = `${input.value} = ${resultFactorial}`;
//     } else {
//         result.textContent = `${input.value}x${arr.reverse().join("x")} = ${resultFactorial}`;
//     }
// }

//checkBtn.addEventListener("click", checkFactorial);


        // --Check factor using ArrayFrom(Reuseable format)--
const checkBtn = document.getElementById("check");

const getFactorial = (factorial) => {
    const factorialData = Array.from({ length: factorial - 1 }, (_, i) => i + 1);
    const resultFactorial = factorialData.reduce((acc, val) => acc * val, factorial);

    return { factorial: resultFactorial, factorialData }
}

const showFactor = () => {
    const input = document.getElementById("input");
    let factorial = input.value;
    const result = document.getElementById("result");
    const factors = getFactorial(factorial);

    if (factorial == 0) {
        result.innerHTML = `${input.value} = ${factors.factorial}`;
    } else {
        result.innerHTML = `${input.value}x${factors.factorialData.reverse().join("x")} = ${factors.factorial}`;
    }
}

checkBtn.addEventListener("click", showFactor);