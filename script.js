function randomtext(){
    var randomtxt = [
        'DAWN<br/>OF A<br/>NEW TALE',
        'TO DO<br/>IS TO BE',
        'PIERCE<br/>THE VEIL',
        'THE FUTURE<br/>STARTS TODAY',
        'THE DIE<br/>IS CAST',
        'DO UNTO<br/>OTHERS',
        'EMBRACE<br/>YOUR<br/>FREEDOM',
        'KNOCK\'EM<br/>DEAD',
        'VANQUISH<br/>EVIL',
        'WHO<br/>AM I?',
        'CARPE<br/>DIEM',
        'FORGIVENESS<br/>IS<br/>DIVINE',
        'NOW OR<br/>NEVER',
        'END<br/>OF THE<br/>WORLD',
        'QUE SERA,<br/>SERA',
        'KNOW<br/>THE DEVIL<br/>INSIDE',
        'PENANCE<br/>OR<br/>PRETENSE?',
        'TRUST<br/>IN<br/>YOURSELF',
        'A LONG<br/>SHADOW<br/>CAST',
        'YOUR LIFE<br/>IS<br/>YOUR OWN',
        'THE COMEDY<br/>IS OVER',
        'FREEDOM<br/>TO CHOOSE',
    ];
    return randomtxt[Math.floor((Math.random() * 21.99))];
}

document.getElementById("bywhichallisrevealed").innerHTML = randomtext();