const input = document.getElementById('inputBox');
const buttons = document.querySelectorAll('button');
let string = "";

const handleButtonClick = (e) => {
    const buttonText = e.target.innerHTML;

    if (buttonText === '=') {
        string = eval(string);
    } else if (buttonText === 'C') {
        string = "";
    } else if (buttonText === '<i class="fa fa-bandcamp" aria-hidden="true"></i>') {
        string = string.substring(0, string.length - 1);
    } else {
        string += buttonText;
    }

    input.value = string;
};

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
