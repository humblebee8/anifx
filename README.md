# Anifx

with anifx you can animate almost everything on a webpage in the most easy way utilizing the web animation api.

## Installation

with your favorite package manager:

```bash
npm i p13rnd-anifx
```

## Usage

```js
import { Fx } from 'p13rnd-anifx';

// animate node
const myFx = new Fx();
myFx.animateNode(node, options);
```

### *node*
the dom node you want to animate

### *options*

an object of options can be passed to the function. See all possible options below. 

```js
const animations = 'color: [#aa0033, #00aa33, red, orange, rgba(117, 117, 117, 0.9), randomColor, randomColor] | transform: [translateX(-50%), scale(2), rotate(45deg)]';

const options = {
  myFx.animateNode(node, {
    animationString: animations, 
    timing: {
      duration: 1500,
      easing: 'linear',
      fill: 'none',
      direction: 'normal',
      iterations: 1,
      delay: 0
    },
    split: false,
    clean: true,
    retain: false,
    delayBetweenLetters: 0
  });
}
```

## **easing**
Add an easing function to your animation, linear, ease-in-out, cubic-bezier and more.  
See all [available Options](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function)  
*Default: 'linear'*  

## **duration**
The duration of the animation in milliseconds (ms)
*Default: 1500*

## **fill**
Sets the animation fill mode to control css properties before and after the animation.  
[Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode)  
*Default: 'none'*

## **direction**
The direction of the animation. Used to play backwards (flip the animation cycle)   
[Learn more](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction)  
*Default: 'normal'*

## **iterations**
The number of times an animation should run. Use 0 to run infinite.  
*Default: 1*

## **delay**
The delay before an animation starts playing. 
*Default: 0*

## **fullNode**
Wether to animate the entire node or it's single parts (letters). Does only work on nodes with text content.   

## **delayBetween**
The delay between each letter. Only works if fullNode is set to false.  
*Default: 0*

## **clean**
Decide if spans should continue to exist after the animation completes. Only works if fullNode is set to false. 
*Default: true*

## **retain**
You can retain specific properties, for example retain="color, transform" would retain both css properties last value of the animation independent of fill. If not set the node will fall back to it's initial styles. 
*Default: false*

## **animations**
The animations to run on the node or it's parts. The syntax is easy  
> property: [value1, value2, value3] | property2: [value4, value5, value6] | property3 ...  

Example:  

>color: [#aa0033, #00aa33, red, orange, rgba(117, 117, 117, 0.9), randomColor, randomColor] | transform: [translateX(-50%), scale(2), rotate(45deg)] | padding: [3px, 6px, 9px]  

**hint: *randomColor* applies a random color**  
*Default: ''*

There's even more possible options when using anifx with [X-Element](https://github.com/aFuzzyBear/astro-ui/tree/main/components/XElement) and [Astro](https://github.com/withastro/astro).  
You can see how it's been used [here](https://github.com/p13rnd/proxima/blob/master/src/components/x.astro).

## Contributing
Pull requests are welcome and discussions on further development and features are more than welcome.

## License
[MIT](https://github.com/p13rnd/anifx/blob/master/LICENSE.md)