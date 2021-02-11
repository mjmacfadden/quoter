var down = document.getElementById('topic');

var arr = [
    //"<img src=''/><p></p><p><span></span></p>",

    "<img src='https://m.media-amazon.com/images/I/51pxzzSiJ7L.jpg'/><p>The body of your podcast episode will be where the sausage gets made. The sausage of your... idea meat.</p><p>—Justin McElroy, Everybody Has A Podcast (Except You)<span></span></p>",

    "<img src='https://images-na.ssl-images-amazon.com/images/I/81kwCg+F-QL.jpg'/><p>As an entrepreneur, you had one, maybe two, but usually not more than three chances to catch lightning in a bottle; as a venture capitalist, however, you could chase lightning as long as you had cash to invest.</p><p><span>―Ben Mezrich, Bitcoin Billionaires</span></p>",

    "<img src='https://images-na.ssl-images-amazon.com/images/I/81kwCg+F-QL.jpg'/><p>Gold is valuable because of its naturally occurring properties: it’s scarce, durable, portable, divisible, fungible, hard to counterfeit, and easy to authenticate.</p><p><span>―Ben Mezrich, Bitcoin Billionaires</span></p>",

    "<img src='https://m.media-amazon.com/images/I/51Sn8PEXwcL._SY346_.jpg'/><p>One of history’s few iron laws is that luxuries tend to become necessities and to spawn new obligations.</p><p><span>—Yuval Noah Harari, Sapiens</span></p>",

    "<img src='https://images-na.ssl-images-amazon.com/images/I/71+rNRLMbEL.jpg'/><p>We fail the minute we let someone else define success for us.</p><p><span>―Brené Brown, Dare to Lead</span></p>",

    "<img src='https://images-na.ssl-images-amazon.com/images/I/71+rNRLMbEL.jpg'/><p>At the end of the day, at the end of the week, at the end of my life, I want to say I contributed more than I criticized.</p><p><span>―Brené Brown, Dare to Lead</span></p>",

    "<img src='https://images-na.ssl-images-amazon.com/images/I/51NYjNgldSL._SX330_BO1,204,203,200_.jpg'/><p>The definition of a real man is one who cries without shame, reads poetry with his heart, feels opera in his soul, and does what’s necessary to defend a woman.</p><p><span>―Delia Owens, Where the Crawdads Sing</span></p>",

    "<img src='https://m.media-amazon.com/images/I/51yoHjJDQ3L._SY346_.jpg'/><p>Implementing Extreme Ownership requires checking your ego and operating with a high degree of humility. Admitting mistakes, taking ownership, and developing a plan to overcome challenges are integral to any successful team.</p><p><span>―Jocko Willink, Extreme Ownership</span></p>",
    
];


function Lets_Play() {
    down.innerHTML = arr[Math.floor(Math.random() * arr.length)];
}



var Inst = document.getElementById("instructions");
var Game = document.getElementById("game");

function instruct(){    
    Inst.classList.add("show");
    Inst.classList.remove("hide");
    Game.classList.add("hide");
    Game.classList.remove("show");
}

function no_instruct(){
    Inst.classList.remove("show");
    Inst.classList.add("hide");
    Game.classList.add("show");
    Game.classList.remove("hide");

}