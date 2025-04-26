# Playing a sound with the Audio element

The easiest way to get a sound playing on a webpage is with an `<audio />` element.

Like the `<img />`, or `<video />` elements, `<audio />` is a way of embedding multimedia
into HTML pages.

## Getting an audio element on the page

There are a few different ways to get an `<audio />` element into our page

### Method 1: Adding an audio element to our HTML

You can write this directly into your HTML file.
```html
<audio controls src="./whack-audio.wav" />
```
This will show an audio player on the page which a user can play or pause using the standard controls

Since we're trying to play sounds _programmatically_ we won't use the `controls` attribute, and we'll
give the tag an `id` so that it's easier for us to interact with it from JavaScript.
```html
<audio id="SfxElement" src="./whack-audio.wav" />
```
In our stylesheet we can hide this element so the user can't see it:
```css
#SfxElement { 
    display: none;
}
```
Now, in our JavaScript we can find this element using `.getElementById` or `.querySelector`, and whenever
we want to play the sound we can just call the `.play()` method on that element
```js
const sfx = document.querySelector('#SfxElement')

function playSound() {
    sfx.play()
}
```

### Method 2: Using document.createElement

Instead of creating an `<audio />` element in our HTML and finding it in our JavaScript, we can create one directly in the JavaScript.
```js
const sfx = document.createElement('audio')
```
... if we do this, we'll need to set the `src` attribute ourselves, and give it an id or class so we can style it
```js
sfx.src = './whack-audio.wav' // for src specifically we can set this using `.setAttribute('src' ...)` or with `.src = ...`
sfx.classList.add('sfx')
```
... or we can set the styles manually
```js
sfx.style.display = 'none'
```

### Method 3: Using the `Audio` constructor

There's also a constructor available to create an `<audio />`, this works more or less the same as the `.createElement()` method.
```js
const sfx = new Audio('./whack-audio.wav') // we can set the src in the constructor
```

> [!WARNING]
> 
> "new" is a keyword here and we need it when calling a constructor, we won't use it much during
> bootcamp but the standard Web APIs use it a lot so it's good to be aware of


## Playing at the right time

Get the audio working in your game first and play around with it a bit before coming back to this...

... so now you're back, I'm imagining your code looks a bit like this:

```js
function playSound() {
    sfx.play()
}
```

you might have noticed that your audio doesn't play _every time_ you click on
your mole. That's because often when you click on the mole the audio is _already
playing_.

So, again there's a couple of different strategies we can take here

### Stopping the audio on click and playing it from the start

We can set the `.currentTime` property of the `<audio />` to `0`, effectively
rewinding the audio to the start.

```js
function playSound() {
    sfx.currentTime = 0
    sfx.play()
}
```
This means that each time we click on our mole, the sound effect will immediately
start from the start, but also that the sounds won't overlap.

If we _do_ want that overlap, we can try ...

### Creating a new audio for each click

Instead of having a single shared `<audio />` tag, we can create one each time we want to 
play a sound
```js
function playSound() {
    const sfx = new Audio('./whack-audio.wav')
    sfx.play()
}
```
This method will play multiple sounds over each other, but it will also take up a bunch of memory

## The Glorious Future

`<audio />` elements are the easiest way to get a sound going, and do a lot for us out-of-the box.

_After Foundations_ if we want to explore a more sophisticated approach, we can look at the [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) 

This is a more complex API, and it's a lot more difficult to use but it can provide precise control over
how and when your sounds play.

---

### references

- [MDN Audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)
- [MDN currentTime](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime)
