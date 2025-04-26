[Home](../README.md)|
---|

# Inflate The Unicorn

### Learning Competencies

- Using JavaScript to change HTML images
- Calling functions with the `onclick` method
- Conditionals
- String concatenation
- Use a module to celebrate your victory

## Summary

These unicorns have balloons for horns; but what good is a deflated horn? 

First you need to change the placeholder images to the deflated unicorns image. Then write logic so that whenever you click on one of the unicorns, each click changes the unicorn image to inflate the balloon (i.e. the balloon changes from deflated to inflated with each click).  

#### Resources
[HTML Images](https://www.w3schools.com/html/html_images.asp)\
[Javascript onclick() method](https://www.w3schools.com/jsref/event_onclick.asp)


## Help those unicorns! 

Let's get started.

1. Open the `inflate-the-unicorn.html` file in your browser and take a look. 

You'll notice that currently it's just placeholder images. The first step is going to be replacing those with pictures of the unicorn from the /images directory. 

2. With the `inflate-the-unicorn.html` open in your code editor, find the three placeholder `<img>` tags and replace their `src=` elements to the `unicorn-0.png` image. Check that this has updated by reloading your browser.

3. Using the onclick method to call it, you will need to write a function that gets called every time you click on one of the unicorns.

Once you have written your function, how do you know if it is being called or not? Often this is where we would use something like a `console.log` as it will show up in the Dev Tools console even if we haven't completed our function yet!

4. Now it's time to get one of the key features of your page working. When you click the button your function should change the image of the unicorn to one of the other images.

You might be asking yourself something like, "how do I change an HTML image using Javascript?" Instead of asking yourself that, try typing _those exact words_ into Google. In general, whenever you find yourself wondering how to do something specific while programming: *TYPE THE WORDS INTO GOOGLE!*

5. In order to change the unicorn to the correct next image, you're going to need to keep track of the current number that each unicorn is on and use this to decide which image to change to.

There are several ways you could do this, and it just depends what makes the most sense to you. You probably are going to want to create some variables (perhaps `let unicorn1 = 0`, or `let unicorn1 = "empty"`). You could choose to store all the unicorn states in a single object, or even an array! It's up to you!

6. When a unicorn gets to the fully inflated state, confetti should burst onto the screen! We're using [the confetti package from skypack](https://www.skypack.dev/view/canvas-confetti), import it at the top of your Javascript file (using just that import line from the link above, don't include the `<script>` tags it's wrapped in) and then call it as a function. 

7. If all three unicorns can cycle through all the images and their balloons are full, you've done! Congratulations! You've successfully fixed the unicorn game and the crowds are eager to give it a go!

Make sure you push your code up to GitHub so we can all enjoy it!

## Reflection

Open `my-reflections-sprint-5.md` from your reflections file in VS Code and answer the questions under the `Inflate The Unicorn` heading.

Make sure you commit and push to GitHub.

## Stretch

- Would adding some sound effects to this process make it more interesting? What sound does a unicorn make? 
- Could this game work as a massively online multiplayer game like World of Warcraft? Try doing that!