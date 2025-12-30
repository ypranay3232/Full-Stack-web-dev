CSS Box Model ?

An element contains some content with it. And around the content we have padding (space around the content)

    -->go to anchor tag add some padding so you can see what happens? 
    you get space around the content anchor tag holds

    -->Assume the Padding as : clock wise (top right bottom left) padding : 2px 5px 2px 9px;

And Around the Padding we have Border ? we saw it in border-radius 
but we can also set a border : it contains 3 definitions 
1) width of the border 2) type of border 3)color of the border
border : 1px solid gray

And Around the Border we have margin which binds all these together : The Margin is just space the 
element needs.
    ->go to h1 and add 100px; margin you can see the difference

margin 
border
padding
contents

-------------------------------------------------------------------------------------------------------
Applying the Box Model to css : 
for h1{add padding:12px 0px}

for ol list add some width, and to keep the text in center we use (margin : 36px auto 0 auto)
open dev tools select <ol> and you can see that the padding at left side is affecting its position 
so overwrite the padding to 0


and The text is aligned in center

Now the give some space to list elements with padding and they dont have margin around them so add some margin
--------------------------------------------------------------------------------------------------------
Adding the Structure of a webPage ?

we use <body> and inside it we add all other tags but as a webpage grows its hard to maintain the structure

example : <h1> to <h6> these all belongs to <header> tag
and the <ol> and <li> these are all the core contents of a webpage so we can bind them under <main>
and information at the end/bottom of the webpage called <footer>

now re structure the entire html accordingly
-------------------------------------------------------------------------------------------------------
Selectors and Combinators?

When we want to be more specific about applying a specific style to a specific element we use selectors
we know about ID,class, universal selectors + we also know that we can group (p,a,h1{ color:red}) different
tags and apply styles to the group


Combinators : 
1) Descendant (ex : li p {})    so the styles applied here apply to all <li> and <p> as ancestors
2) child : (h2 > p) : this styling apply to only <p> which are the direct child of <h2>


Lets implement them : to do so just create a list and h2 , p tags inside it.
---------------------------------------------------------------------------------------------------
inline vs Block Elements ?

Block element takes the full/entire space. ex: <div><p> <ol> etc
inline element takes the space it is necessary : <a><img> etc