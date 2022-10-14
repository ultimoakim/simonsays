<div id="header" align="center">

  <img src="https://i.imgur.com/ByxEicn.png" width="800" height="400">

</div>

<div id="description" align="center">

# Simon Says

### [CLICK HERE TO DEMO](https://ultimoakim.github.io/simonsays/)

##### Created by Joonsik Andy Kim

[![GitHub Badge](https://img.shields.io/badge/-@ultimoakim-junglegreen?style=flat&logo=GitHub&logoColor=black)](https://github.com/ultimoakim)
[![LinkedIn Badge](https://img.shields.io/badge/-@ultimoakim-blue?style=flat&logo=Linkedin&logoColor=black)](https://www.linkedin.com/in/ultimoakim/)


</div>

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
* A "play again" button that will restart the game from scratch once the player loses.
* The game is endless until the player incorrectly inputs an input.
* The player is able to click the buttons as fast as he/she wants.
* The player will NOT be able to click on anything until the message "Click start to begin!" appears on the screen.

<br>

# :lady_beetle: Bugs/Bug Fixes
1. Computer’s array was playing the sequence all at the same time instead of at separated intervals, one by one
   * Fixed after realizing that setInterval() could not be used on for loops

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