In day-02 of 30DaysOfReact challenge, this is the introductory exercises which focues to get familiar with JSX elements and how to use react, reactDOM, and babel for the first time.

index.html:
-----------
In this file, I've create my first react app simply by using CDN links for react, ReactDOM, and babel.js libraries in index.html
and wrote my JSX inside the script tag inside the body tag of the index.html file which is very straight and simple way of starting writing react code. I've
learned the difference in naming conventions between HTML elements and JSX elements.
in this file I focused on how to include CDN links and how to start writing JSX elements and how to render them using render() method from the 
ReactDOM library which takes only 2 parameters, the first is the JSX element to be rendered, and the second is where it will be rendered in the html file. and
for the styling, I used inline styling inside the JSX elements by passing an object of CSS styles to the style attribute in the JSX element.
more details inside index.html is cleared.

index2.html:
------------
In this file, I've just updated index.html to use internal styling instead of inline styling, by adding style tag inside the head tag, and adding all the needed
CSS styling, then I used className attribute in JSX elements to add the internal styling.

index3.html:
------------
In this file, I started to inject data inside my JSX elements instead of hard coding it using {} to wrap any javascript code inside the HTML elements in the code.
I've learned that we can inject any kind of data as it is except Objects since we need to destructure it or extract properties values individually before
injecting it to the JSX elements.
