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


--------------------------------------------------------------------------------------------------
1) What is Box-sizing: border-box;

This is crucial property allowing us to change the width and height of element 
By default css box model is set to : border-box: content-box; --> what it does is when you set 
an element width to 1000px. The value is applied to container area and any padding,border applied
are applied outside the width !  making the element total size more than 1000px.

But when we use box-sizing : border-box; we tell the browser to keep in mind to include the
padding and border inside the width/ total element rendering size on page shouldn't exceed 1000px
-----------------------------------------------------------------------------------------------

11) Now to make the header look like behind the bg image : 
Go to shared css ->header -->position absolute. Now we achieved the <header> + <section> both are
inside a bg image.

Now we can see a problem that the header moves along when we scroll to fix we fix the position 
position : fixed;

But we have a problem the width of the navbar is shrinked to make it evenly spread in the window
we can use (width : 100%) and (box-sizing: border-box) 

12) style the Navbar (anchor tags) they are bland from starting
select them from <header> --> <a> then change color, remove text-decoration , font size,padding
text shadow 
---> now lets add a hover effect and make it look like button when we hover on to it, and add 
border radius to the
--------------------------------------------------------------------------------------------

From Now on we work with another section (Highlights).
create a <h2> add text as "highlights"
and now create a <ul> list so that we can add images into it
-->now inside the (name the <ul> as destination from id) and for <li class="destination">
-->inside each <li> add an image, and now after images now add a <P> and name the places and country

13) Now lets style the (flex container so that all images are in order)
Style these from (styles.css) which contains all the styles which are displayed in landing page

-->Select .destination img which selects all the <li> --><img>
now set height to 200px
-->Now select the parent of <img>--><li> --><ul> select <ul> by id (#destination) and make it flex
and add width 90% or width 50% to center of total and margin auto, margin bottom 
{We have an issue the 3rd image ration is small compared to remaining so add a separate id to it 
and now select it and add width to it (width : 350px) this worked}

14) spacing the images and making them look like cards --> select the .destination parent
and margin 0 20px; and to make them look like cards add shadow in (destination img)

-->as we can see that the images are squished (and re sized) and not in the original form 
so we can use a property (object-fix: contain) this keeps the original dimensions inside a box
but when we want to cover space with the img (we use object-fit: cover) which we used for bgimg

15) now style the text below them : create .destination p {} to access p from destination 
now keep the text in center,increase font size,color, margin

(now inside .destination{ text-transform: uppercase})
-->to change the color of the <strong> text inside <p> add some color

-->everything is good here but we need to style the highlight : create and select #highlight h2
keep it in center,inc font size,transform into upper case, color,give some margin: 24px 0; 

-------------------------------------------------------------------------------------------------
now open dev tools observe this (click on both <section>) you can see that there is a problem 
we can see a space between both the sections (after first <section> of bgimg when second <section>)
starts we have some space.

-->it's because of the (margin collapse) issue because the <h2> element inherits the margin from 
<section> the <h2> inherits margin from <section>

-->How to fix ? 
we can add some padding to the parent to fix this -->create #highlights : add padding:28px;
now add a bg color to it .
-->This is the standard way of doing, now we add bg color using (linear-gradient)
it contains two parts of a color (top and bottom) line and splits a color into two separate parts
ex: background : linear-gradient(45deg, rgb(),rgb());

-->The 45deg, degree defines the angle of color transition.
-->Assume clock wise (0deg ==top, 90 == right, 100deg == bottom, 270deg == left)
--------------------------------------------------------------------------------------------------
16) Working with <Footer>
create a <ul> <li> to add footer links busied <li> <a> --> <img> and add the images 

-->now style the footer add a bg color from linear gradient. in sharedcss.
-->now lets apply width to the (<li> from footer) footer li {} so both images can be of same size
-->now add 100% width and height to the <img> select it from <footer>

-->now keep the images in order header img {}(display:flex), now how to center the images, 
-->we can use (justify-content:center) it centers the contents of a tag
-->now lets add some space to the logos (margin 0 40px) from <footer li>
--> and some padding directly to the footer  
--------------------------------------------------------------------------------------------------
17) Now the homepage work is done we now work with (destination i.e.places.html) it can be accessed
via two links (destination, discover pages)

in places.html : copy index.html file contents upto <header> and <footer> now in between add <main>
-->create a new css file and link it, places.css

--> now styling the cards layout in this page: create a <ul> <li> --> it contains img,context etc
-->inside <main> --> <ul> --><li> --><img>
-->now create a <div class="item-content"> --> <h2, <p>
-->now create another div with class name = actions, add a <a> tag

-->now lets style the static content: open places.css --> select img(main li img)
add some height,width to it.

-->as we can see that the header is overlapping with the image, its because we used position
--> so overwrite this as (header{position :static}), position static is default styling.

-->same now overwrite the bg color for this places page.
-----------------------------------------------------------------------------------------------
18) now to make the card layout first we have to limit the space given to the <ul>
-->select --><main ul> add some width, margin : 0 auto;

-->the image and the contents are in separate (.actions)  keep it inside (.item-content)div
-->now select <main li> and display:flex;
-->The card layout is handled by (div = item-content) select it add some padding so     

-->Now lets make it look like a card, select it using dev tools the <li> contains the card layout
so add box-shadow. (main li), and add some border radius

-->Observe that at image side, we can no longer see the border radius even after applying the 
border radius its becasue of overflow. its hidden in our case. 

-->The image is not fit because of the container, so use object-fit 

-->Now add some padding to the card layout (#item-content)display flex,flex direction col, 
justify content space between 

-->we have an issue here we want the the button <a> to be separate( outside of #item-content)
so create a new div inside (#item-content) add h2,<P> inside it so we can isolate the <a>

-->use dev tools to check on <h2> below we can see that we have (h2,p) and space and <a>

-->now just the <a> we can select it using its (class) and just move it accordingly
-->now remove the text decoration and add padding and some color and add hover effects.
-->now add some color to body{color: rgb(68,68,68)} so the text gets color

19) creating multiple cards (go to <ul>) inside it select <li> copy paste it 10 times, change images
-->now the <li> can have separate width of (500px)
-->now increase the card layout width (<main ul>) == 1500px, instead of using 
display flex,flex wrap: wrap. we have grids which allows us to make 2d layouts
-------------------------------------------------------------------------------------------------
CSS Grids?
Css grid is a default layout : we use flex box in 1d layouts, but grid for 2d layouts(row, cols)

-->grid follows the same layout as flexbox (a container and children inside it)
-->(display: grid) creates a grid flexibility to the container
-->(grid-template-column: height) -->creates columns with height and width of 400.
-->But when we want to apply same width for both groups of columns we use (1fr) fraction
property which divides total width into 1 part. so (1fr, 1fr)

-->how to select a specific property for a nth column/row : we have (nth type selector)
-->li:nth-of-type(3){} -->selects 3rd column. 
-->li::first-of-type{}
--------------------------------------------------------------------------------------------------
20) implementing grid : inside  <main ul> display : flex, flex-wrap : wrap; remove these 
becasue we are using grid (display:grid) and we have to mention to css that how many columns we need
grid-template-column : 1fr 1fr; gap : 20px 20px; to provide gap between card layouts.

inside <main li> remove the predefined width : 500; which causes to shrink the card layout

-->we need the 3rd card to be double size so we use nth selector to select 3rd card layout
li:nth-of-type(3){grid-column: 1 / span 2} means we are working with 3rd card column originally it 
is (1) we are converting it to (span of 2 so (1 / span 2))

-->now to add the arrow icon here in card after (explore) we use UTF charset 
so we use (&#x2192) after explore text

--> lets remove the (hover animation which is applied from sharedcss to places.css) 
got to sharedcss --> <header a :hover> instead of selecting all headers <a> select <a> which
is inside nav bar (the only index.html is inside navbar)
