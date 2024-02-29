let score = prompt("Enter a number between 1 and 100");

while (score < 1 || score > 100) {
    score = prompt("Enter a number between 1 and 100");
}   
score = parseInt(score);

    if (score >= 90 && score <= 100) {
    document.write("<p>You received an A!</p>");
}   else if (score >= 80 && score <= 89) {
    document.write("<p>You received an B!</p>");
}   else if (score >= 70 && score <= 79) {
    document.write("<p>You received an C!</p>");
}   else if (score > 60 && score <= 69) {
    document.write("<p>You received an D!</p>");
}   else {
    document.write("<p>You received an F!</p>");
}



