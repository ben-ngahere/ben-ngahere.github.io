[Home](../README.md)|
---|

# Whack-a-Mole

### Learning Competencies

- Using Javascript to work with HTML tables
- onClick() method
- Playing audio with Javascript
- Conditional logic
- Working with Randomness and modules

## Summary

The Javascript Carnival has a mole problem! But it's the opposite problem to the one you're picturing; there aren't _enough_ moles. None in fact! We need you to use your Javascript skills to write functions that randomly pop up a mole, then pop it back up somewhere else again after it has been whacked.

#### Resources

[HTML Tables](https://www.w3schools.com/html/html_tables.asp)\
[Javascript onClick() method](https://www.w3schools.com/jsref/event_onclick.asp)\
[Playing sound with the Audio element](../doc/playing-sound-with-the-audio-element.md)
[Playing audio with Javascript (archive)](https://web.archive.org/web/20240313101000/https://gomakethings.com/how-to-play-a-sound-with-javascript/)

## Whack! That! Mole!

Let's get started.

First thing, go and have a look at your page and HTML code. 

Currently we have a table being drawn on our page, but no moles. We need to add some functionality to our page that will randomly select one of these table cells, and then add the image of a mole inside of it. At the end of this challenge, clicking on that mole will then make it choose a new spot to appear in.

There are three things we will need to make this game work, however as with all coding tasks there is more than one way to go about it:

- The ability to store or get references to the cells in the HTML table.
- A function to randomly select which cell should show the mole.
- A way to show a mole in the chosen cell.

If you would like to challenge yourself, we invite you to complete this exercise without reading the longer descriptions of these three steps below. They will give you some further hints on how to achieve each step, but first try your own hand and do some researching to complete each of these.

#### References to the cells

We need to find a way to _store references_ to all off the cells so we can then put a mole in one of them. 

There are multiple ways you could do this; you could [create an array and fill it with the cells](https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp), or read up on how to work with [HTML tables using Javascript](https://www.w3schools.com/jsref/coll_table_cells.asp) and create a variable equal to a _2D array_ (i.e. an array that holds arrays). If that is a daunting task, remember you can always *ask the internet how to do it*.

#### Random cell selector

Once you have a reference to all the cells, the next step is to write a function that will randomly select one to put the mole in. If you have stored the cells in an array, you can create an indexer function. 
It just so happens we've provided a module that you can use to generate a random number. You can import it like this:

`import { getRandomNumber } from './random-number.js'`

This function will generate and return a random number (within a certain range) that we can then use to get the corresponding cell from inside your array. ie, 

```
let randomIndex = getRandomNumber(0, 24)
let randomCell = cellsArray[randomIndex]
```

Note: This game board consists of 25 cells, stored in 5 rows of 5. Your random indexer should start at 0 and stop at the end of the array, otherwise it will try to access cells that don't exist and you will get an "indexer out of bounds" error. It would probably be better to use the length of the array instead of a hard coded number, like `let randomIndex = getRandomNumber(0, theNameOfYourArray.length - 1)`. We do `.length - 1`, again, to avoid accidentally overshooting the bounds of the array. Because arrays start counting at 0, an array with 
3 things in it (a `.length` of `3`) only has valid indexes at [0], [1] and [2]. 

#### Show the mole

Now you need to write a function that actually _puts_ the mole into that cell. Again, there are many ways you could do this. 

One way is to use JavaScript to create an image tag in the HTML and then in your `main.css`, style the `#mole` accordingly. ie, 

```
<img id="mole" src="mole.png">
```

But I hear you cry: "How to I make the image appear in the cell??!"

Try checking out the [appendChild method](https://www.w3schools.com/jsref/met_node_appendchild.asp), and remember that you can always find an abundance of information that you might need with a well crafted Google search. Something along the lines of: "add an HTML element with Javascript".

#### Whack that mole!

By this point you should have a mole that appears in a random cell when you load the page, and if you refresh your browser it should appear in a different cell (barring the 1/25 chance that it re-appears in the same cell again). 

Now you'll need to add an [onClick()](https://www.w3schools.com/jsref/event_onclick.asp) method for the mole that calls a function (say, named `whackedMole`) when you click on the image. 

The whackedMole function should remove the mole from the current cell and then, using a function that lets you re-use the code that you wrote earlier, add the mole to a new random cell.

#### Finishing touches

The last touch for our game is to add a [sound effect](https://www.developphp.com/lib/JavaScript/Audio) that plays when the mole is clicked. A hilarious _cartoon spring sound effect_ has been provided for you (`whack-audio.wav`).

You're done! Push your code up to GitHub and Whack! That! Mole!

## Reflection

Open `my-reflections-sprint-5.md` in VS Code and answer the questions under the `Whack-a-Mole` heading.

Commit and push to GitHub.

## Stretch

- Add a `counter` to the page that counts how many times you have whacked the mole!

- Add a `timer` to the page that gives you 10 seconds to whack as many moles as possible, and then pops up your score as a Javascript alert.

- Add a `high score` field that stores your highest score and replaces it if a new, higher score is achieved. _*Note:_ for now, this score will be reset when you refresh your browser. For it to last, you would need some form of _database_, which we  cover later during bootcamp.

- Rewrite your `random index` function so it can't give you the same index twice in a row. 
