# odin-tictactoe
The Odin Project's JS path "Tic Tac Toe" exercise, à la 1970s videogames like Pong or Odyssey. 

## Observations and lessons learnt

Setting up a root font-size in _vw_ units really makes everything more responsive.

To refer to the <body> element itself from JS, `document.body` is all you need.

## To Do
Right after the first functional version, some improvements were clearly due:

- [X] Review of the Board/Game objects responsibilities; possible optimization
- [X] OO modularization of the Screen and BoardView functions
- [X] Allow selection of human or computer for the player B role - **press F2**
- [X] Allow selection of a "B&W" and a "color" mode - **press F1**
- [X] Possible grouping of the two selectors above and the SPACE start command into a "Console" module or something alike
- [ ] A _real_ algorithm for the computer player
- [ ] Mobile (no keyboard) support
