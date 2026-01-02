You are given a Template and you have make it ? let see how to make it.

we need a pdf but i dont have them so im gonna generate it with code.

now create a html file,css and link them and add google fonts of your choice

in our project we will be having all header,footer,main so lets add them 


Adding Header contents ! (add a h1 tag and an image)
now style the contents 
1) bg color, fonts to body
2) keep the header in center so the text and image will be in center and change the color of 
text and font size 
3) resize the image (header img) and no need to specify height because browser automatically 
adjust ratio sizes 

4) For header we have no padding which adds some space from inside.
5) Add Contents in main section
6) style the section as a box 
    -->cover the main with a bg color 
    --->give some spacing from inside with padding
    -->give some width so that it wont spread all around the screen
    -->how i want this is i want the <main> contexts in center but the (context) inside it would 
    be left aligned.
    ==IMP== : we cant center this with (text-align:center) becasue this is not an inline element
    So to center we can use a trick with margin (top bottom margin) and left right is auto
    margin : 32px auto;

    --> now border radius and color for text
7) style the links :<ul> remove margin,padding and list styling, <li> list contents inside the ul 
would look nice if they have some indentation and also add some padding from top and bottom 
    -->create an id for some <li> and apply color, border-left, color
8) Style the highlighter <span> (font weight bold)
9) style the anchor tag (remove text decoration,add a bg color and a color) 
--> now change the bg color when hover and clicked/active

10) finishing everything with a footer. Add a anchor tag with link of the pdf and open the pdf 
in new tab (target) and add a <p> tag. Then give some margin bottom 

the <p> in footer is all inline content we can center the text (text-align : center)
-->now style the <p> in footer,keep some space between the <a> and <p> use margin-top, 
--> then color the text, 
-->style the footer <a> make it look like button so add some padding,bgcolor,color,border radius
