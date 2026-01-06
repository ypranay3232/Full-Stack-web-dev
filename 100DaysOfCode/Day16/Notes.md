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

5) To implement the flex box in header : we start by adding display:flex to header in css, 
and now when we inspect the header from dev tools,we can see that we have extra unused space 
after two elements(travel goals,destination about) so to use the unused space we use (space between)

REMEMBER : whenever working with contents of a flex box we use justify-content


6) styling the <li> elements. To Keep them in order we make the <ul> as a flex container, But we 
already have styled <ul> so we select the <ul> from header ex: (.header ul{}) by this we can select 
ul and apply styles And now some margin is missing between destination and about so add some to <li>

7) adjusting spaces : inside .header{} align the items center and give a little padding from top
bottom and some to right and left. (navbar is finished) 

8) adding a bg image. we have two <section> in main(so we one (id="hero") another as "highlights")
-->first we have to add a bg image which kinda looks behind the navbar and all the texts 
--> on top of the image we add a popup first lets add this popup(h1,p with text and anchor tag 
linked to places.html)

--> we can add a image from css to a specific element so lets style from styles.css 
-->increase hero height : 800px to fit the bg image in it and add bgimage using url()
Now we can see that the image is behind the <section> contents, the image is not center
bg-positoin :center, and bg-size: cover; to cover the entire element <section>

9) Now we just have to style the hero into container box to keep all the contents inside it
inside<section id=hero> is for bgimage so for contents, we need to create a div id = herocontent
and place the contents inside it

-->now style the hero contents : width 900px, bg color rgba(rgba a= alpha allows to add transparency)
-->now add box shadow, border radius. Now to keep them in center text align.
--> Now add some padding to the contents so they wont look like sticked to top
-->now try to center the box/popup : we can try ( margin: 0 auto;) but it wont work

----> More styling for hero-content : select the herocontent h1: add color,transform text into uppercase
increase fontsize to 50px, font family,margin 0;

10) To Center it we need to first understand positions : 
Position : relative; 
top: 200px;

to keep the element in center. By using (position) we can work with top,bottom,left,right we can 
move a element by our own will.

same style the <p> and anchor tag and make it look like a button so add a bg color 

