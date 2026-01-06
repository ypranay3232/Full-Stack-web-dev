Today we build a Project Travel Goals !

Format of the site 

<header> --> inside <nav>

<main>  <section> , <section>

<footer>

---------------------------------------------------------------------------------------------------
we dont can either use a image inside the anchor tag to redirect which clicking on 
but i prefer here using an anchor tag, so it redirects to travel goals html 

1) add it inside <header> create a <div> and add anchor tag

2) Now create a shared css to apply css to all properties in common, and add (font-family) to body
and remove margin completely, now select id page-logo and remove padding,decoration, add font family
color, font size

Now we use (text-transform) this enables to define how letters are displayed, display in capital
now add a shadow (1px 1px 2px rgb)

3) add navigation from navbar, create two list items (ul) and inside each <li> add a anchor tag 
now remove the list styling : none, and remove padding, margin 

4) Css FlexBox : allow us to specify how elements are positioned such as a box inside a container

to use flex box we have to use (display : flex) and flexbox is used inside a container that has 
children, 
--> we can also change the direction of the flex from (row to column and column-reverse) etc 
--> by default flex has a property called (flex-wrap: nowrap) at by default what it does it when
you minimize your window the flex applied container wont shrink to match to the device width
but by applying (flex-wrap : wrap) we can achieve it.

4) align-items; is a property that helps to align items inside a container, such as center 
Justify-content : is another property used for contents of flexbox to adjust space

justify-content: space-between; provides space between two items
justify-content: space-around; provides space around two items
justify-content: space-evenly; provides space evenly between the items minimizing the gaps