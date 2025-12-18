How to write browser instruction to interact with browser : 
primarily we can use only 3 languages ? 
HTML ---> Hypertext markup language : a hypertext language (hypertext --> text with links and media)
The content and structure of webpages can be controlled and created

CSS --> cascading style sheets : to design and make website beautiful, 
Can edit the style of displayed webpages 

JS --> Allows to add interactivity with a webpage !
---------------------------------------------------------------------------
How Do We Instruct the Browser?

The browser understands ONLY three languages for the web.
Everything else (React, Next, Vue, Tailwind) compiles into these three.

If it doesn’t become HTML, CSS, JS, the browser ignores it.

The Only 3 Browser Instruction Languages
1️⃣ HTML — Structure & Content

HTML (HyperText Markup Language)
Purpose: WHAT exists on the page

Defines content

Defines structure

Defines meaning (semantics)

Hypertext = text with links + media

Example:

<h1>Learn Web</h1>
<p>This is a paragraph</p>
<a href="https://google.com">Go to Google</a>


What browser understands:

There is a heading

There is a paragraph

There is a link

❌ HTML does NOT care about:

colors,animations,interactions 


2️⃣ CSS — Presentation & Styling

CSS (Cascading Style Sheets)
Purpose: HOW it looks

Colors,Layout,Fonts,Spacing,Responsive design

Example:

h1 {
  color: blue;
  font-size: 32px;
}


What browser understands:

Paint heading blue,Set size to 32px,

❌ CSS does NOT:

Fetch data

Handle clicks logic

Change content meaning

3️⃣ JavaScript — Behavior & Logic

JavaScript
Purpose: WHAT happens when user interacts

Click handling,Fetching data,Updating UI dynamically.Logic & conditions

Example:

<button onclick="alert('Hello')">Click me</button>


Or:

document.querySelector("button")
  .addEventListener("click", () => {
    alert("Hello");
  });


What browser understands:

Listen for event,Execute logic,Modify DOM


