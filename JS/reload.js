let data = [
    {
        name:'The Shawshank Redemption',
        image:'../images/movies_images/The Shawshank Redemption.jpg'
    },
    {
        name:'The Boy Who Harnessed The Wind',
        image:'../images/movies_images/THE BOY WHO HARNESSED THE WIND.jpg',
    },
    {
        name:'John Wick: Chapter 3 - Parabellum',
        image:'../images/movies_images/JOHN WICK CHAPTER 3 - PARABELLUM.jpg'
    },
    {
        name:'How To Train Your Dragon: The Hidden World',
        image:'../images/movies_images/How_To_Train_Your_Dragon_-_The_Hidden_World.jpg'
    },
    {
        name:'The Mustang',
        image:'../images/movies_images/The_Mustang.jpg',
    },
    {
        name:'Avengers: Endgame',
        image:'../images/movies_images/Avengers_Endgame.jpg'
    },
    {
        name:'Apollo 11',
        image:'../images/movies_images/Apollo11.jpg'
    },
    {
        name:'Small Foot',
        image:'../images/movies_images/small_foot.jpg',
    },
    {
        name:'22 July',
        image:'../images/movies_images/22_july.jpg'
    },
    {
        name:'Alpha',
        image:'../images/movies_images/Alpha.jpg'
    },
    {
        name:'Overload',
        image:'../images/movies_images/Overload.jpg'
    },
    {
        name:'Creed II',
        image:'../images/movies_images/Creed_II.jpg'
    },
    {
        name:'The Third Murder (Sandome No Satsujin)',
        image:'../images/movies_images/The_Third_Murder_(Sandome_No_Satsujin).jpg'
    },
    {
        name:'Avengers: Infinity War',
        image:'../images/movies_images/Avengers_-_Infinity_War.jpg'
    },
    {
        name:'Mountain',
        image:'../images/movies_images/Mountain.jpg'
    },
    {
        name:'The Price Of Everything',
        image:'../images/movies_images/The_Price_Of_Everything.jpg'
    },
    {
        name:'Mirai',
        image:'../images/movies_images/Mirai.jpg'
    },
    {
        name:'Incredibles 2',
        image:'../images/movies_images/Incredibles_2.jpg'
    },
    {
        name:'Gladiator',
        image:'../images/movies_images/Gladiator.jpg'
    },
    {
        name:'Godzilla: King of the Monsters',
        image:'../images/movies_images/Godzilla_-_King_Of_The_Monsters.jpg'
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
        
        img.setAttribute('class', 'image border');
        
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
