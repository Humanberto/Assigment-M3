let num1 = parseInt(prompt('Enter a number between 1 and 200'));
let num2 = parseInt(prompt('Enter a number between 1 and 200'));

if (num1 === num2) {
    document.write("<p>You entered the same number! <break>Please refresh this page to try again.</p>");

} else if (num1 < 1 || num1 > 200 || num2 < 1 || num2 > 200) {
    document.write("<p>Invalid input! <break>Please refresh this page and enter a number between 1 and 200.</p>");

} else {
    let bigNum = Math.max(num1, num2);
    document.write("<p>" + bigNum + " is the larger number.</p>");
}