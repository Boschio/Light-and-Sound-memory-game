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

If you recorded multiple GIFs for all the implemented features, you can add them here:
![](gif1-link-here)
![](gif2-link-here)
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
Outside of some prior knowledge (mostly of HTML and CSS), I used W3Schools.com, Stackoverflow.com as web resources, Jon Duckett's HTML/CSS and JavaScript/Jquery books for references, and lastly I communicated with my friend and fellow Lehman student, Amber Lewis. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
For this project, I faced many challenges, some of which I was unable to overcome within the time that I allotted myself, and some where I was able to take a step back, think it through and come up with a solution. One of the challenges I faced was with the optional feature to speed up the game every turn. I wanted this feature to coexist with one that I had come up with on my own, which is a modifier that increases the overall speed of the game, to make it more engaging, but also more challenging. I had already implemented this feature, so when I attempted to also change the game speed every turn, I was running into issues where the notes would continuously get faster, and eventually the game would be unplayable. 

I combed through my code, and for a while this issue was stumping me. I had thought the issue lied with my implementation of increasing the overall speed of the game, so I tried modifying that, to no resolve. I started to notice this was frustrating me, and so I decided to step away from my code and took a long break. Taking a break allowed me to logically to think about my code and come back to it with a fresh mindset on the changes I can make to fix this issue. From there, using the console log, I was able to figure out that I had bad placement on my code, in relation to a loop, that was causing my clue time to decrement multiple times a turn. I fixed this, modified my speed code and in general this allowed me to create a much more engaging game.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
[YOUR ANSWER HERE]

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
[YOUR ANSWER HERE]



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


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