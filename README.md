# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **James A. Bosch**

Time spent: **5** hours spent in total

Link to project: https://glitch.com/edit/#!/patterns-memory-game

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Implemented difficulty options, which increase the amount of notes played to win. If no difficulty is selected when the page is loaded, the pattern will default to the one provided by the instructions.
- [X] Added a modifier that turns off the "clue" lights, adding a challenge for those who want to play based off sound memory
- [X] On top of the notes speeding up every turn, added a modifier that increases the overall speed of the game

## Video Walkthrough (GIF)

[My video walkthrough](https://recordit.co/KlH2hT9zKl)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

Outside of some prior knowledge (mostly of HTML and CSS), I used W3Schools.com, Stackoverflow.com as web resources, Jon Duckett's HTML/CSS and JavaScript/Jquery books for references, and lastly I communicated with my friend and fellow Lehman student, Amber Lewis. 


2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

For this project, I faced many challenges, some of which I was unable to overcome within the time that I allotted myself, and some where I was able to take a step back, think it through and come up with a solution. One of the challenges I faced was with the optional feature to speed up the game every turn. I wanted this feature to coexist with one that I had come up with on my own, which is a modifier that increases the overall speed of the game, to make it more engaging, but also more challenging. I had already implemented this feature, so when I attempted to also change the game speed every turn, I was running into issues where the notes would continuously get faster, and eventually the game would be unplayable. 

I combed through my code, and for a while this issue was stumping me. I had thought the issue lied with my implementation of increasing the overall speed of the game, so I tried modifying that, to no resolve. I started to notice this was frustrating me, and so I decided to step away from my code and took a long break. Taking a break allowed me to logically to think about my code and come back to it with a fresh mindset on the changes I can make to fix this issue. From there, using the console log, I was able to figure out that I had bad placement on my code, in relation to a loop, that was causing my clue time to decrement multiple times a turn. I fixed this, modified my speed code and in general this allowed me to create a much more engaging game.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

This project left me with many questions, of which I am eager to investigate and learn more about. Before attempting this project, I had some prior knowledge of HTML and CSS, and had only glanced at JavaScript a few times. This project opened my eyes to how JavaScript can be used to enhance your webpage, but also left me wondering what else I can do with it. 

For example, how can I use it for animations, or maybe dynamically resizing/moving things like images in the page. I am also eager to study different frameworks to see how other features could be implemented into a website, such as google services like locations and maps, or even payment services for a webstore. This project also left me with questions on back-end development, and how could we build a web server. Lastly, I will look at how other games could be made with JavaScript and put into a browser, as that seems like a fun and interactive way to develop and show off my programming skills.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If I had a few more hours to work on this project, there are a lot more features I would have liked to implement. One of the first things would be to finish the feature to implement button images that only show when pressed, as well as adding a different set of sound effects for the buttons. I was able to successfully add button images, but I had some trouble figuring out how to get them to hide appropriately. 

With the sounds, I wanted something a bit more dynamic, that people could use to help trigger their memory. I would even add a toggle so that they can select different types of sounds.

I also wanted to implement a way to keep track of how many rounds were cleared, and add an “unlimited” difficulty, so that players could challenge themselves even further by seeing how many rounds they can clear. With this implementation, and with some of the questions this project left me with, I would love to add a leaderboard for those who try “unlimited” and keep track of those records. 




## Interview Recording URL Link

[My 5-minute Interview Recording](https://youtu.be/5hvUTIGwfGY)


## License

    Copyright [JAMES A. BOSCH]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.