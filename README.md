<div id="header" align="center">

  <img src="https://i.imgur.com/ByxEicn.png" width="800" height="400">

</div>

<div id="description" align="center">

# Simon Says

### [CLICK HERE TO DEMO](https://ultimoakim.github.io/simonsays/)

##### Created by Andy Kim

[![GitHub Badge](https://img.shields.io/badge/-@ultimoakim-junglegreen?style=flat&logo=GitHub&logoColor=black)](https://github.com/ultimoakim)
[![LinkedIn Badge](https://img.shields.io/badge/-@ultimoakim-blue?style=flat&logo=Linkedin&logoColor=black)](https://www.linkedin.com/in/ultimoakim/)


</div>

<br>

# Table of Contents
1. [Description](#✏️-description)
2. [Screenshots](#📸-screenshots)
3. [Technologies Used](#💻-technologies-used)
4. [How To Play](#🎮-how-to-play)
5. [Functionalities/Features](#🔋-functionalitiesfeatures)
6. [Bugs/Bug Fixes](#🐞-bugsbug-fixes)
7. [Possible Future Updates/Features](#🔧-possible-future-updatesfeatures)
8. [Updates](#📲-updates)
9. [My Biggest Problems And How I Solved Them](#⚠️-my-biggest-problems-and-how-i-solved-them)
10. [Things I Really Could Have Done Better/Skills to Improve For The Future](#💡-things-i-really-could-have-done-betterskills-to-improve-for-the-future)
11. [I hope you enjoyed this project!](#🎉-i-hope-you-enjoyed-this-project)


<br>

# :pencil2: Description

Simon Says is a game that tests a player's memory abilities. The computer will play a random sequence that the player must memorize and replicate. If the player makes even one mistake, the player loses the game automatically.

<br>


# :camera_flash: Screenshots

![Screenshot 1](https://i.imgur.com/MHk0IDZ.png)
![Screenshot 2](https://i.imgur.com/ISITXww.png)

<br>

# :computer: Technologies Used
![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)
![HTML5](https://img.shields.io/badge/-HTML5-05122A?style=flat&logo=html5)
![CSS3](https://img.shields.io/badge/-CSS-05122A?style=flat&logo=css3)
![Github](https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github)
![VSCode](https://img.shields.io/badge/-VS_Code-05122A?style=flat&logo=visualstudio)

<br>

# :video_game: How To Play

1. Click the "Start Game" button to begin the game!
2. The computer will play a sequence first. After the computer has finished, click on the buttons in the order that the computer has played the sequence.
3. If you incorrectly follow the sequence, you lose the game automatically!

<br>

# :battery: Functionalities/Features
* A start button that will begin the game. Due to the game's guards, clicking on anything else besides the button will not work.
* A "Play again!" button that will restart the game from scratch once the player loses.
* The game is endless until the player incorrectly inputs an input.
* The player is able to click the buttons as fast as he/she wants.
* The player will NOT be able to click on anything until the message "Alright, your turn!" appears on the screen.

<br>

# :lady_beetle: Bugs/Bug Fixes
1. Computer’s array was playing the sequence all at the same time instead of at separated intervals, one by one
   * Fixed after realizing that `setInterval()` could not be used on `for` loops

2. Colored buttons were still clickable after the game was over
   * Fixed by placing a guard on the condition that the game was over

3. Colored buttons were still clickable while the computer was playing its sequence
    * Fixed by placing a guard while the computer sequence was still playing


<br>

# :wrench: Possible Future Updates/Features
* Creating a jQuery version
* Creating a version of Simon Says with more than four buttons and giving the player a choice of how many buttons they would like in the game, from around 4-10 buttons
* Creating a version where the player has more chances/lives if he/she makes a mistake
* A feature where with each successful consecutive round, the computer sequence plays faster
* A more clean/organized layout
* A version of Simon Says where a winner function could be added after the player reaches a certain amount of rounds
* Some more responsive web design so the game can be played on smaller windows/screens
* Just better coding of this game in general (because my current code is awful!)
* Implementing better designs
* A feature where the player can choose other sounds beside the "boop-beep" sound that I have currently

<br>

# :calling: Updates
* 10.16.2022: Updated this README.md to include more information about the project, such as the "My Biggest Problems And How I Solved Them" section and the "Things I Really Could Have Done Better/Skills to Improve For the Future" section.

...and more to come in the future!


<br>

# :warning: My Biggest Problems And How I Solved Them

Let's talk about the three biggest things that I must never forget about so I don't end up wasting twenty-one hours of my time. Oh, and I DO believe that for anyone new to JavaScript who is reading this, this advice will be especially important for you as well so that you also don't waste another twenty-one hours of YOUR life like I did! 👍

Let's start off with the first most important thing out of the three:

## **1. An array can _NOT_ be equal to another array in JavaScript.**

There, I bolded it and made it large. PLEASE do NOT forget about this!

Let's look at an example here to see what I'm talking about.

```JavaScript
const firstArray = [1, 2, 3, 4];
const secondArray = [1, 2, 3, 4];
console.log(firstArray === secondArray);

// Console Output: false
```
Look at what happens when you compare two variables that are seemingly assigned to the same array and values.

It comes out as FALSE!

Why, though?

Because in JavaScript, arrays are **OBJECT DATA TYPES!** And thus, when you compare two object data types to get a Boolean statement, JavaScript will compare their REFERENCES instead.

But what's a reference?

Before we explain what a reference is, let's go over the two types of data in JavaScript:
* Primitive data types (booleans, strings, numbers & BigInt, null, undefined, symbols)
* Object types (arrays, dates, functions, RegExp, errors)

For primitive data types, when you store data in a variable, it will store it as a single value. But when you store OBJECT data types in a variable, it does something different: it stores something called a REFERENCE! And that reference holds data known as the "heap." That's where the actual data is being stored for your object types, and in this case, our arrays.

Which is why for my solution, I decided to create a function that not ONLY includes conditions where the lengths of the arrays must match, but I also included the `Array.prototype.every()` method, as well as the static method `Array.isArray()`. This is one way to solve the problem of an array not being able to be equal to another array.

```JavaScript
function arrayEquals(a, b) {
    return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

arrayEquals(playerChoice, computerChoice);
```

Another way is to use the `JSON.stringify()` method. The `JSON.stringify()` method works with not only arrays, but objects as well. So it can be convenient in a sense.

```JavaScript
return(JSON.stringify(playerChoice) === JSON.stringify(computerChoice));

// Use console.log if you want to see the result printed in the console instead.
```

The reason why learning about this was so important for me was because in my _Simon Says_ game, I had to figure out a way to make a conditional statement of the `playerChoice` array equaling the `computerChoice` array. That would determine how I would print out my `roundWinner` variable to determine if the player was clicking the right sequences or not. 

I was stuck on this for so long because as I mentioned earlier, I didn't realize that an array could not be equal to another array in JS.

At first, my solution was to simply create an `if` statement like this:

```JavaScript
// This code doesn't work the way that I intended. I wrote this to demonstrate incorrect code.

for (let i = 0; i < computerChoice.length; i++) {
    if (playerChoice[i] === computerChoice[i] && playerChoice.length === computerChoice.length && playerChoice === computerChoice) {
        return 0;
    }
}

// Note: In my code, returning 0 meant that the player won the round and could thus progress to the next round.
```

But that obviously doesn't work because again, as we said before, an array can't be equal to another array.

So now I know not to make this mistake again.

Let's talk about the second biggest thing that I learned and shouldn't forget about for the near future and beyond.

## **2. You can _NOT_ use `setInterval()` or `setTimeout()` methods on `for` loops.**

Why? Because this is a matter of closure scope. Unfortunately, `for` loops do **_NOT_** have closure scope! Only functions do.

Not only that, but the `setInterval()` and `setTimeout()` methods wouldn't even work if you used them for anything other than functions. That's just how the syntax works for these two methods.

But why is this topic important? It's important because for `for` loops, many beginners in JS are looking for a way to use `setInterval()` or `setTimeout()` where for every element that is being printed in the `for` loop, it will be delayed by a certain time period or printed at a certain interval.

This was my original code from before that turned out to be wrong:

```JavaScript
// Again, this code doesn't work the way that I intended. I wrote this to demonstrate incorrect code.

computerChoice.forEach(compNumPrint);

function compNumPrint(num) {
    console.log(num);
}

setTimeout(compNumPrint, 500);
```

So what would happen in the code above? What happens is that instead of printing `num` every 500 milliseconds, it just prints every element in the array without any delays or intervals. It's as if `setTimeout()` didn't even exist.

Again, as I explained above, that's why this code doesn't work because the `for` loop lacks closure scope. **So in order for this to work in a `for` loop, one must create a function _INSIDE_ of the `for` loop in order for this to work.**

That's what makes the `forEach()` method a bit complicated because one already needs a function inside the parameters of `forEach()`, but if we want to use `setInterval()` or `setTimeout()`, **then we would need _ANOTHER_ anonymous function INSIDE of the `forEach()` loop.**

Also, please don't forget about how the syntax works for the `forEach()` loop! The callback functions inside of a `forEach()` method work differently from regular functions! I'm specifically talking about the parameters INSIDE of the callback function. The first parameter represents each element, while the second parameter represents each index for every element.

```JavaScript
computerChoice.forEach(compNumPrint);

function compNumPrint(num, index) {
    setTimeout(function() {
        console.log(num);
    }, index * 500);
}
```

So that's how you would use `setTimeout()` or `setInterval()` in a `for` loop!

Let's move on to the next big problem I had.

## **3. Guards**
Figuring out how to create guards for _Simon Says_ turned out to be a big hurdle for me. The reason it was so difficult was that since the computer would always push a number into the `computerChoices` array one by one, it was hard to figure out how to set it up so that the player would not be able to click on anything UNTIL the sequence was over.

My solution to that, albeit not pretty, was to create a couple of states called `pauseNum` and `counterNum`. I put these at the very beginning of the event listener function so that the function would return, should the player click on anything while the computer's sequence played out.

Here's how those two states work:

`counterNum`'s purpose is to not let the player click on anything until it equals the length of the computer's array. It's always incrementing by one for each round.

```JavaScript
counterNum = counterNum + 1;
```

Then, AFTER `counterNum` is completed, that's where `pauseNum` comes in. I created a function called `renderPauser()` that would NOT return a `pauseNum` until the computer's sequence finished playing. And I made it a function because if I didn't, then I wouldn't be able to delay the player's clicks with `setTimeout()`.

```JavaScript
function renderPauser() {
    pauseNum = 1;
    reportMessage.style.visibility = 'visible';
    reportMessage.innerText = 'Alright! Your turn!'
    reportMessage.style.color = "aliceblue";
}
```

And then, inside of the `render()` function, that's where my `renderPauser()` function would go into, followed up with a `setTimeout()`.

```JavaScript
function render() {
    renderRound();
    setTimeout(renderHideReport, 1000);
    setTimeout(renderComputerChoice, 1000);
    setTimeout(renderPauser, computerChoice.length * 300 + 1800);
}
```

...And those were the three most challenging problems that came my way, and how I solved them! It certainly was one of the craziest learning experiences, but it was also fun to see it through until the end.

<br>

# :bulb: Things I Really Could Have Done Better/Skills to Improve For the Future

## 1. More concise code (avoiding DRY code)
It goes without saying, but I really screwed up on this.

For example, I did NOT need four separate event listeners for each colored button. I could have simply just created one event delegation while grabbing the DOM element that contained ALL the colored buttons. In this case, that was my `playGrid` element, which served as the CSS Grid for placing the elements. And using that, I could have just set up guards so that it would ignore anything that wasn't the colored buttons.

...Which really goes to show how important it is to properly prepare and plan out how you want to create your grid, as well as planning out which bigger body elements you want your child elements to be in for your HTML section.

## 2. Staying within the ranks of my code
I also failed miserably at this.

The `init()` function's purpose is to initialize ALL STATE variables. In other words, the `init()` function's purpose is to set the game up as if you're starting from the VERY beginning of the game.

For example, if you were making a game for chess, then we'd want all the pieces to be where they're supposed to be at the start of the game, right?

And yet, I wasn't able to put everything that I wanted to inside of the `init()` function because if I put everything inside of `init()`, then my whole code wouldn't work due to how my `init()` function also contained the `render()` function.

And that's the next thing. My `render()` function was also not used the right way. The purpose of `render()` is to update all DOM elements. And yet, there are many times I also had to write code outside of `render()` in order to make the code work. But we're supposed to avoid updating DOM elements outside of `render()`. The only time we'd break this rule is if we wanted to add eye-candy animations (for example, things like a time-ticking display). So that's why I also broke that rule for the very reason of making the colored buttons lighter and then darker.

...But I think we get the point here. Every part of the code has a certain purpose, and they should all be staying in their OWN lanes instead of breaking out of it. It's certainly something to look out for next time. Everything needs to stay within its own lane instead of breaking ranks.

## 3. Using more objects to store multiple-related data (in the constants section of the code, especially)
This is somewhat related to #1.

Because if I had used more objects to store related data, then I would've saved myself from writing so much code yet again.

But again, that is my fault because I was very nervous at the time and wasn't really thinking through about how I wanted to organize everything.

But I could have stored more things into objects besides JUST the numbers that would represent the colors. The sounds would be the best example of what I could have also stored into objects.

<br>

# :tada: I hope you enjoyed this project!

Thank you for sticking with me until the end!

I've already said it once and I will say it again. This was my first-ever project of building a browser game, and there were many challenges that came my way, but I can't lie. It was a very fun time, and seeing the end goal absolutely made all those hours of working on this project worth it.

Obviously, this code isn't great at all and there's much to be improved. When I have the time I will continue to work on it and include future features and updates! Thank you very much!

[Click here](#🔧-possible-future-updatesfeatures) to refer back to possible future updates for this game that may be added!

And [click here](#📲-updates) to refer back to updates that were added to the game.