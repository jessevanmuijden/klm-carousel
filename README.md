# KLM carousel

A custom carousel implementation according to specifications described here: [https://bitbucket.org/afklmdevnet/carousel](https://bitbucket.org/afklmdevnet/carousel).
The carousel is responsive and fetches data asynchronously. I chose the content carousel with dark and light background variation. 

## Specifications

 - Pins should not be clickable
 - Arrows are always visible
 - A given amount of text should always fit into the text container of a slide
 
The icon assets were not provided in the assignment repository, so I improvised. 

## Bonus

I had no time to actually create a second version without JavaScript. I would have used the approach demonstrated 
[here](https://codepen.io/trungk18/pen/EydyoL). I think it is better than [the solution](https://codepen.io/haykou/pen/vOyXYX) that leverages the CSS `:target`` because 
that relies on changing the fragment of the URL which can interfere with Angular routing or the general browsing experience 
of the user. 

## Considerations

 ### Animations

All animations are implemented in CSS instead of JavaScript, mainly because it is easier to maintain since there is no 
business logic involved that would require extra testing.
 
## Development server

Run `ng serve --open` to serve the app on `http://localhost:4200/` and view it in the browser.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
