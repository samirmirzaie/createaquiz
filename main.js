// code

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let input1 = document.getElementById("input1").value.toLowerCase();
  let input2 = document.getElementById("input2").value.toLowerCase();
  let input3 = document.getElementById("input3").value.toLowerCase();
  let input4 = document.getElementById("input4").value.toLowerCase();

  let numCorrect = 0;

  if (input1 === "11") {
    document.getElementById("output1").innerHTML = `Correct.`;
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("output1").innerHTML = `Incorrect.`;
  }

  if (input2 === "4") {
    document.getElementById("output2").innerHTML = `Correct.`;
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("output2").innerHTML = `Incorrect.`;
  }

  if (input3 === "no") {
    document.getElementById("output3").innerHTML = `Correct`;
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("output3").innerHTML = `Incorrect`;
  }

  if (
    input4 === "alphonso davies" ||
    input4 === "alphonso" ||
    input4 === "davies"
  ) {
    document.getElementById("output4").innerHTML = `Correct`;
    numCorrect = numCorrect + 1;
  } else {
    document.getElementById("output4").innerHTML = `Incorrect`;
  }

  if (numCorrect <= 2) {
    document.getElementById("response").innerHTML = "Maybe next time.";
  } else if (numCorrect === 3) {
    document.getElementById("response").innerHTML = "Almost perfect.";
  } else if (numCorrect === 4) {
    document.getElementById("response").innerHTML = "Stupendous job.";
  } else {
    document.getElementById("response").innerHTML = "Answer the questions.";
  }

  if (numCorrect === 0) {
    document.getElementById("score").innerHTML = `(0/4) 0%`;
  } else if (numCorrect === 1) {
    document.getElementById("score").innerHTML = `(1/4) 25%`;
  } else if (numCorrect === 2) {
    document.getElementById("score").innerHTML = `(2/4) 50%`;
  } else if (numCorrect === 3) {
    document.getElementById("score").innerHTML = `(3/4) 75%`;
  } else if (numCorrect === 4) {
    document.getElementById("score").innerHTML = `(4/4) 100%`;
  }
}
