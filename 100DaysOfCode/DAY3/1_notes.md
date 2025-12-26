What is HEX-COLOR ? 
Imagine you want to add red color we use color : red;

But what if i want a shade of cherry red, how can i do it, Now comes Hex-color, 
There are 16 Billion color combinations so all color combinations cannot be stored inside color attribute

It starts with (#6digit value) hex-color = hex decimal value. 


-------------------------------------------------------------------------------------------------------
What is RGB Rgb is a color combination of (red,green,blue)

it is a way of applying colors to css properties it works as :

red,green,blue range starts from 0 - 255

when a color value is dominant than others that color reflects the shade overall
ex: rgb(255, 99, 71) reflects tomato color 

---------------------------------------------------------------------------------------------------------
What are developer tools ? 

Help to inspect,debug and  more can be done with this in browser : right click + inspect/ cntrl + shift + i

Just play around here, pick a element (h1/p) and add some css and change its properties change positioning etc, 
the changes are not applied to original code
"rather shows a preview of what might happen when that change is made"


--------------------------------------------------------------------------------------------------------- 
Adding a Link to a text (making webpages with Hypertext)

we use anchor tag  : <a href=""></a>
https://www.google.com and target=_blank (target=_blank opens the web page in new tab) and we use : 
HTTPS:// because its a protocol that enables communication between browser and server to access the google

--------------------------------------------------------------------------------------------------------- 
Types of styling 
We added a link so we want to style it, And We can style css in 3 ways 

1)inline css (which we use til now)
By using style="" property

2)Internal css : 
<style>
    context
</style>


3) external css : By creating a styles.css file and importing it into html
    <link rel="stylesheet" href="style.css">
-------------------------------------------------------------------------------------------------------
Instead of styling for each element each time we can style them at a time in internal and external css.


Css syntax : 
Here it contains (p) Where P is a selector and color:red == (property + value )
p{
    color: red;
}
ex :         /* styling every p tag */
        p{
            font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 
            Geneva, Verdana, sans-serif;
            text-align: center;
            color: gray;
            font-weight: 900;
        }
---------------------------------------------------------------------------------------------------------
Anatomy of a Valid Html Document Page. 

as we saw the h1,h2,p etc are visible in browser and show something but on the other hand <style> is not
visible because they are meta data, (data which provide additional information to existing data)

The Html format is : 
<!Doctype html>
<html>

<head>
<title>This is what shown at the top of a webpage </title>
</head>

<body>
<h1>Hello world</h1>
</body>
</html>

