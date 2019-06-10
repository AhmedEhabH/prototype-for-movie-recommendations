let data = [
    {
        name:'The Shawshank Redemption',
        image:'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
    },
    {
        name:'THE BOY WHO HARNESSED THE WIND',
        image:'https://resizing.flixster.com/z27wVhW1_zNanbOJwQGXx33BFKA=/fit-in/200x296.2962962962963/v1.bTsxMjk3NDkwOTtwOzE4MTA1OzEyMDA7ODU4OzEyNzI',
    },
    {
        name:'JOHN WICK: CHAPTER 3 - PARABELLUM',
        image:'https://resizing.flixster.com/J31B7Egii4yC79oLCG8L5KuJSq4=/fit-in/200x296.2962962962963/v1.bTsxMzAyNzExOTtqOzE4MTA1OzEyMDA7MzYwMDs1NTUw'
    },
    {
        name:'HOW TO TRAIN YOUR DRAGON: THE HIDDEN WORLD',
        image:'https://resizing.flixster.com/mbCiUcQKnLHGqsDM1tBZM-ZV348=/fit-in/200x296.2962962962963/v1.bTsxMjc1NjU5NztqOzE4MTAyOzEyMDA7NDgwOzc2MA'
    },
    {
        name:'THE MUSTANG',
        image:'https://resizing.flixster.com/KENiK9qnDTdOEZcEgKQONHyXYQk=/fit-in/200x296.2962962962963/v1.bTsxMjk0MjE1NDtqOzE4MTA0OzEyMDA7NDA1MDs2MDAw',
    },
    {
        name:'AVENGERS: ENDGAME',
        image:'https://resizing.flixster.com/IN7vCTU0NJYNOvUUEpFDFDiKvYc=/fit-in/200x296.2962962962963/v1.bTsxMzAxOTkzMjtqOzE4MTA1OzEyMDA7MTY4ODsyNTAw'
    },
    {
        name:'APOLLO 11',
        image:'https://resizing.flixster.com/FRLoBAy-TwU8oRFHWEfBG27UGVI=/fit-in/200x296.2962962962963/v1.bTsxMjk3ODk2MjtqOzE4MTA1OzEyMDA7ODEwOzEyMDA'
    },
    {
        name:'SMALLFOOT',
        image:'https://resizing.flixster.com/0ABAUDjptWUA82nzrcLfEFxvDBw=/fit-in/200x296.2962962962963/v1.bTsxMjg1NTc5MDtqOzE4MTAzOzEyMDA7Mjc2NDs0MDk2',
    },
    {
        name:'22 JULY',
        image:'https://resizing.flixster.com/63hmnC68v3YT-2xnbQTaUF6RU7g=/fit-in/200x296.2962962962963/v1.bTsxMjg1NjYyOTtqOzE4MTAzOzEyMDA7MTUwMDsyMjIy'
    },
    {
        name:'ALPHA',
        image:'https://resizing.flixster.com/j1Rz47DiE7b00B1FlfUher2HejA=/fit-in/200x296.2962962962963/v1.bTsxMjc3NTc0MjtqOzE4MTAyOzEyMDA7NjA3Mjs5MDAw'
    },
    {
        name:'OVERLORD',
        image:'https://resizing.flixster.com/hmVgyBHvER2BMArG43UP2F2Hc8M=/fit-in/200x296.2962962962963/v1.bTsxMjg1MDA0NDtqOzE4MTAzOzEyMDA7MTMxMTsyMDQ4'
    },
    {
        name:'CREED II',
        image:'https://resizing.flixster.com/TWCroHygAtCfoBUHxccodTcjzQI=/fit-in/200x296.2962962962963/v1.bTsxMjg2MTU0OTtqOzE4MTAzOzEyMDA7NjU4MTs5NzUw'
    },
    {
        name:'THE THIRD MURDER (SANDOME NO SATSUJIN)',
        image:'https://resizing.flixster.com/avfIu16XZ4mT9KUu8ZpcbdKmlW8=/fit-in/200x296.2962962962963/v1.bTsxMjc1NjYwNTtqOzE4MTAyOzEyMDA7MTA4MDsxNjAw'
    },
    {
        name:'AVENGERS: INFINITY WAR',
        image:'https://resizing.flixster.com/Tr0D14OrBFf6NVowaFOcO8snbv4=/fit-in/200x296.2962962962963/v1.bTsxMjcwMDQ5MztqOzE4MTAxOzEyMDA7MTY4ODsyNTAw'
    },
    {
        name:'MOUNTAIN',
        image:'https://resizing.flixster.com/iTxPXlayt0R9s1_IxoW0_PqFe2c=/fit-in/200x296.2962962962963/v1.bTsxMjcwMTI5MTtqOzE4MTAyOzEyMDA7MTAwMDsxNDgy'
    },
    {
        name:'THE PRICE OF EVERYTHING',
        image:'https://resizing.flixster.com/s6RQKTh5LXlkMBSfCAQpJUji7Fw=/206x305/v1.bTsxMjY0OTIwMztqOzE4MTAxOzEyMDA7NjQ4Ozk2MA'
    },
    {
        name:'MIRAI',
        image:'https://resizing.flixster.com/W0TdGEyJxk4uxRpEiwqRpW8p3AQ=/fit-in/200x296.2962962962963/v1.bTsxMzAzNjUzNjtqOzE4MTA1OzEyMDA7MTAwODsxNTEy'
    },
    {
        name:'INCREDIBLES 2',
        image:'https://resizing.flixster.com/kvWOtskggoyL7wHRPF3s27nfv3s=/fit-in/200x296.2962962962963/v1.bTsxMjcxMzEzMTtqOzE4MTAyOzEyMDA7MTA4NjsxNjA5'
    },
    {
        name:'Gladiator',
        image:'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
    },
    {
        name:'Godzilla: King of the Monsters',
        image:'https://m.media-amazon.com/images/M/MV5BOGFjYWNkMTMtMTg1ZC00Y2I4LTg0ZTYtN2ZlMzI4MGQwNzg4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
];

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function loadData ()
{
    data = shuffle(data);
    mainDiv = document.getElementById("main");
    data.forEach(movie => {
        var h4 = document.createElement('h4');
        var img = document.createElement('img');

        h4.textContent = movie.name;
        img.src = movie.image;
        
        img.setAttribute('class', 'image');
        
        var card = document.createElement('div');
        var cardBody = document.createElement('div');

        cardBody.setAttribute('class', 'container center');
        
        card.setAttribute("class", "card rounded");
        
        cardBody.appendChild(h4);
        
        card.appendChild(img)
        card.appendChild(cardBody);
        
        mainDiv.appendChild(card);
    });
    console.log(mainDiv);
}