var down = document.getElementById('topic');

var arr = [
    //"<img src=''/><p></p><p><span></span></p>",


    //INTO THIN AIR
    "<img src='https://m.media-amazon.com/images/I/51wiVLy1ydL._SY346_.jpg'/><p>But there are men for whom the unattainable has a special attraction. Usually they are not experts: their ambitions and fantasies are strong enough to brush aside the doubts which more cautious men might have. Determination and faith are their strongest weapons. At best such men are regarded as eccentric; at worst, mad. . . .</p><p><span>―Jon Krakauer, Into Thin Air</span></p>",

    "<img src='https://m.media-amazon.com/images/I/51wiVLy1ydL._SY346_.jpg'/><p>\"With enough determination, any bloody idiot can get up this hill,\” Hall observed. \“The trick is to get back down alive.\"</p><p><span>―Jon Krakauer, Into Thin Air</span></p>",

    //THE THIRD DOOR
    "<img src='https://m.media-amazon.com/images/I/41gOSnvq51L._SY346_.jpg'/><p>\"A tipping point only appears in hindsight,\” Elliott added. \“You don’t feel it when you’re in the trenches. Being an entrepreneur is about pushing, not tipping.\"</p><p><span>―Alex Banayan, The Third Door</span></p>",

    "<img src='https://m.media-amazon.com/images/I/41gOSnvq51L._SY346_.jpg'/><p>\"Luck is like a bus,\” he told me. \“If you miss one, there’s always the next one. But if you’re not prepared, you won’t be able to jump on.\"</p><p><span>―Alex Banayan, The Third Door</span></p>",

    //THE GIRL WITH THE LOWER BACK TATTOO
    "<img src='https://m.media-amazon.com/images/I/51dWGbt2yOL._SY346_.jpg'/><p>We all accept too easily that life has to be hard and forget to make sure we have the most fun we can.</p><p><span>―Amy Schumer, The Girl with the Lower Back Tattoo</span></p>",

    "<img src='https://m.media-amazon.com/images/I/51dWGbt2yOL._SY346_.jpg'/><p>I think for anyone to become good at something, they have to fail a lot too. And they have to be completely unafraid to fail or they'll never make it to the next level.</p><p><span>―Amy Schumer, The Girl with the Lower Back Tattoo</span></p>",

    //EVERBODY HAS A PODCAST (EXCEPT YOU)
    "<img src='https://m.media-amazon.com/images/I/51pxzzSiJ7L.jpg'/><p>The body of your podcast episode will be where the sausage gets made. The sausage of your... idea meat.</p><p>—Justin McElroy, Everybody Has A Podcast (Except You)<span></span></p>",

    //BITCOIN BILLIONAIRES
    "<img src='https://images-na.ssl-images-amazon.com/images/I/81kwCg+F-QL.jpg'/><p>As an entrepreneur, you had one, maybe two, but usually not more than three chances to catch lightning in a bottle; as a venture capitalist, however, you could chase lightning as long as you had cash to invest.</p><p><span>―Ben Mezrich, Bitcoin Billionaires</span></p>",

    "<img src='https://images-na.ssl-images-amazon.com/images/I/81kwCg+F-QL.jpg'/><p>Gold is valuable because of its naturally occurring properties: it’s scarce, durable, portable, divisible, fungible, hard to counterfeit, and easy to authenticate.</p><p><span>―Ben Mezrich, Bitcoin Billionaires</span></p>",

    //SAPIENS
    "<img src='https://m.media-amazon.com/images/I/51Sn8PEXwcL._SY346_.jpg'/><p>One of history’s few iron laws is that luxuries tend to become necessities and to spawn new obligations.</p><p><span>—Yuval Noah Harari, Sapiens</span></p>",

    //DARE TO LEAD
    "<img src='https://images-na.ssl-images-amazon.com/images/I/71+rNRLMbEL.jpg'/><p>We fail the minute we let someone else define success for us.</p><p><span>―Brené Brown, Dare to Lead</span></p>",

    "<img src='https://images-na.ssl-images-amazon.com/images/I/71+rNRLMbEL.jpg'/><p>At the end of the day, at the end of the week, at the end of my life, I want to say I contributed more than I criticized.</p><p><span>―Brené Brown, Dare to Lead</span></p>",

    //WHERE THE CRAWDADS SING
    "<img src='https://images-na.ssl-images-amazon.com/images/I/51NYjNgldSL._SX330_BO1,204,203,200_.jpg'/><p>The definition of a real man is one who cries without shame, reads poetry with his heart, feels opera in his soul, and does what’s necessary to defend a woman.</p><p><span>―Delia Owens, Where the Crawdads Sing</span></p>",

    //EXTREME OWNERSHIP
    "<img src='https://m.media-amazon.com/images/I/51yoHjJDQ3L._SY346_.jpg'/><p>Implementing Extreme Ownership requires checking your ego and operating with a high degree of humility. Admitting mistakes, taking ownership, and developing a plan to overcome challenges are integral to any successful team.</p><p><span>―Jocko Willink, Extreme Ownership</span></p>",
    
];


function Lets_Play() {
    var foo = arr[Math.floor(Math.random() * arr.length)];
    down.innerHTML = foo;
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