let language = prompt('Choose your language: es, de, en, fr');

if (language === 'es') {
    document.write('<p class = "response">Hola, mundo!</p>');

} else if (language === 'de') {
    document.write('Hallo, Welt!');

} else if (language === 'en') {
    document.write('Hello, world!');

} else if (language === 'fr') { 
    document.write('Bonjour, monde!');
}