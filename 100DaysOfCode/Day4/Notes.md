Styling the anchor tag !

First lets check why the anchor tag has a underline : right click and inspect: you can see 
text-decoration : underline. 
its because by default anchor tag applied underline to the link, so now  

First lets remove the underline : 
text-decoration : none;

Then change the color of the link to red 

---------------------------------------------------------------------------------------------
when we hover to the link (move our cursor onto the link it do nothing) 
we can change the color when a user hover to the link. 


Pseudo Selectors : Are a type of css selectors that can be applied a html element 
when it changes its state, 

(ex: We can change the color and size of a link when a user hover on to it)

a:hover{
    font-size : large;
    color : orange;
    <!-- and also we can change the cursor when a user hover we can prank him by loading cursor -->
    cursor : progress;
}

-------------------------------------------------------------------------------------------------
It is called cascading style sheets ? because multiple styles effect a single selector

ex: the a:Hover is effected by more than 1 property

go to dev tools cntrl + shift + i/ right click and inspect

go to the anchor tag and you can see (:hov) on right bottom side, click and select hover
now you can see all the styles effecting the (a:hover)

(.i.e multiple css rules effecting the same/single element)
--------------------------------------------------------------------------------------------------
When to use External css?

as we can see our html code getting bigger and bigger. So we separate html, css into separate files

now move the styles part code into the styles.css
But if we dont mention the reference styles.css in html file browser dont render css
so use <link> element of html : <link rel="stylesheet" href="styles.css> 

it means we are linking a relation(stylesheet) with reference/link of file which is (styles.css)

The <link> element is a void element so it does not have a closing tag.
-------------------------------------------------------------------------------------------------

IMPORTANT : Multiple file requests : 

go to developer tools/ inspect and on top you can see network tab or an arrow marks (>>) click on it
you can see the network tab. 

here in the network tab you can see all the network requests caused by the current website.

(IMP) Task :
keep the network tab open and reload the browser you can see : html,css files,

we got 2 requests 1 for html, 1 for css
--------------------------------------------------------------------------------------------------
How to set different styling to a same tag ? we use Id's ?

Suppose we have more than one <P> tag and we need to apply different styles to different tags
so we use id's.


we can do it in two ways 1)applying style="" for each <p> tag
2)Using ID attribute to that <p> tag ex: <p id="first">hello </p>

now while styling a ID we use (#), and same as a id we have class(.) and a universal selector(*)


-------------------------------------------------------------------------------------------------
How to increase the font size ? 

to increase the font size we have : font-size : antis(px)10px and small,large,medium etc;
we use pixels because : 
A low resolution device portrays 1px as big and 
A high resolution device portrays 1px as small because it has more px in screen for clarity

so to deal with this problem we use (px) unit which automatically adjust the 
pixel size for each device.

font-weight: bold,light etc;



