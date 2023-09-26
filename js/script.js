// Є строка тексту const bigText="великий абзац тексту";
// Знайди які букви є в тексті і скільки разів вони зустрічаються. 
// Яка кількість слів в тексті?

const bigText = '1. Lorem 3 Ipsum - is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
console.log(bigText.length);
console.log('--------------');

const array = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
    '.', ','
];

console.log(`У тексті знайдено такі літери і їх кількість:\n` + letters(bigText, array));
console.log(`У тексті знайдено таку кількість слів: ` + words(bigText));

function letters(text, arr) {
    let letter;
    let l;
    let all = '';
    text = text.toLowerCase();

    for (let i = 0; i < arr.length; i++) {
        letter = 0;
        let index = text.indexOf(arr[i]);

        while (index !== -1) {
            letter ++;
            index = text.indexOf(arr[i], index + 1);
        }

        if (letter !== 0) {
            l = (`${arr[i]}: ${letter};\n`);
            all += l;
        }
    }

    return all;
}

function words(text1) {
    let p = ' ';
    let index = text1.indexOf(p);
    let w = 0;

    while (index !== -1) {
       w ++;
       index = text1.indexOf(p, index + 1); 
    }
    
    return w;
}