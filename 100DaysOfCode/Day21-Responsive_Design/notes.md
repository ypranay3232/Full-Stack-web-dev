creating our first responsive design ? first lets create a website ! 

Structure : 
header
main
footer

1) inside <header id=main-header> add a <a id="logo"> and after that add a <nav>
two list elements <ul li> 

-->inside <main> <h1> ->browse meals --> then after create two sections that hold card layout
-->after <h1> --> <ul li> --> inside <li> --> <section> the section now contains a img,h2,a
keep h2 and a inside a <div> to style (name the div, li etc)
copy paste the <article> for <li>

-->add any fonts link and add a css file : 
NOTE : when importing fonts after pasting html while pasting css (dont forget to read comments)
-->i forgot and i had to change the width and the class name ! 
--> in style.css : select body and remove any margin : 0; add a bg color (light black)

2) remove text decoration for <a> inside header.

--> now select both (browse meals and my orders) and keep them right side.
-->select them using <#main-header> -->height 80px; display : flex;justify-content: space-between;
align items: center;bg color light black; padding 0 25px (for left and right)

3) Now style the (logo #food) -->font size, weight,color, transform them into uppercase;
-->done styling Logo now style the (<li>)
-->select them (#main-header ul) remove list styling: none, display flex, margin 0,padding 0;
-->now select then (#main-header li) --> add some margin to left,right.
-->#main-header nav a{} --> add a color to<a> and add a hover effect

4) styling the main. in main style the <h1> : increase font size, keep it in center,add color
-->now after that select the section : #latest-products : add width, margin 50px auto;
-->now to make the card layout side by side (we use grid) #latest-products ul { grid, cols :1fr 1fr}
gap : 20px; remove all padding and margin 

-->now select the image and adjust height and width, object-fit : cover; 

->now make the images into cards --> .food-tem{add a bg color,border radius,overflow : hidden }

->.food-item-content{ align the text in center, padding 16px }
-->now select the (<a> btn and style it)

---------------------------------------------------------------------------------------------------
5) What is responsive design ? 
An Approach where websites use media queries to automatically adapt and provide better view and 
experience across all devices 

-->Units : 
PX: are limited and wont help in responsive design.
% ==> relative to parent element size (not suitable because cascading inherits multiple parents)
em ==> related to parent font size
rem ==> is relative to <html> element font size 
