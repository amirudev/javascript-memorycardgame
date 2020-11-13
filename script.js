let ask_number = prompt('Masukkan angka 1 - 11 untuk menentukan tingkat kesulitan');
if (ask_number > 11){
    alert('Anda memasukkan lebih dari 11, merubah masukkan anda ke maksimum, 11');
    ask_number = 11;
} else if (ask_number < 2) {
    alert('Anda memasukkan kurang dari 2, merubah masukkan anda ke minimum, 2');
    ask_number = 2;
} else if (ask_number >= 2 && ask_number <= 11) {
    alert('Permainan dimulai');
} else {
    alert('Anda tidak memasukkan angka, merubah masukkan anda ke default, 5');
    ask_number = 5;
}

let fruits = ['banana', 'banana', 'black-cherry', 'black-cherry', 'coconut', 'coconut', 'green-apple', 'green-apple', 'orange', 'orange',  'peach', 'peach', 'raspberry', 'raspberry', 'red-cherry', 'red-cherry', 'star-fruit', 'star-fruit', 'strawberry', 'strawberry', 'watermelon', 'watermelon'];
let fruit_store = new Array();
let fruit_name, card_body;
let card_container = document.getElementById('card-container');
let i;

let decks = fruits.slice(0, ask_number * 2);

shuffle = () => {
    for (i = decks.length - 1; i >= 0; i--) {
        let randNum = Math.ceil(Math.random() * i);
        console.log(randNum);
        fruit_store.push(decks[randNum]);
        decks.splice(randNum, 1);
        console.log(fruit_store);
    }
}

card_insert = () => {
    card_container.innerHTML = ' ';
    let card_body;
    for (i = fruit_store.length - 1; i >= 0; i--) {
        let card_body = `<div class="card-body" id="card-${i}"><img src="assets/${fruit_store[i]}.png" id="card-image-${i}" class="hide" name="${fruit_store[i]}"></div>`;
        card_container.innerHTML += card_body;
    }
    
}

shuffle();
card_insert();

let card_picked = new Array();
let card_stored = new Array();

for (i = fruit_store.length - 1; i >= 0; i--) {
    let card = document.getElementById(`card-${i}`);
    let card_image = card.firstChild;
    var card_image_first;
    var card_body_first;
    card.addEventListener('click', function() {
        card_picked.push(card_image.name);
        card_image.classList.toggle('hide');
        card.classList.toggle('card-show');
        if(card_image.classList.length == 0){
            if (card_picked.length == 2){
                if(card_picked[0] == card_picked[1]){
                    console.log(card_picked);
                    console.log('Sama');
                    card_image.classList.remove('hide');
                    card_image.classList.add('show-fixed');
                    card.classList.add('card-show-fixed');
                    card_stored.push(card_picked);
                    console.log(card_stored);
                    card_picked = [];
                } else {
                    console.log('beda');
                    card_picked = [];
                    setTimeout(() => { 
                        card_image.classList.toggle('hide');
                        card_image_first.classList.toggle('hide');
                        card_body_first.classList.remove('card-show');
                        card.classList.remove('card-show');
                    },300);
                }
            } else {
                card_image_first = card_image;
                card_body_first = card;
            }
            console.log(card_picked);
        } else {
            card_image.classList.add('hide');
            card_picked = [];
        }
        if (card_stored.length == ask_number){
            alert('Congratulations, You win');
        }
    });
}