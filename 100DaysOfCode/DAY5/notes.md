How to add an image to the webpage ? 

just link <link> the <img> is also a void type element meaning has no closing tag

The <img> tag contains two important attributes src="" and alt=""

src="" specify the source of the image location 
alt="" alterantive text used when a image is not loaded/ for special people we use alt

-----------------------------------------------------------------------------------------------
Now style the img (size : height and width )
Now to make it round we use (border - radius property : 100px)

Now lets try to center the image ? 
text-align : center; ? but no it wont work like that not because the image is not a text
Image is treated as a text but the 
text-align property canters the contents inside a text. (.i.e when we apply text-align to paragraph)
it's not the paragraph element that will be centered rather the contents inside it.

-----------------------------------------------------------------------------------------------
How to center a image ? 

There are many ways we see them in future but a simple way is to apply : text-align to body.
now you an remove text-align : center from all other elements because all elements comes under
body and if body has that property all elements automatically inherit them 

--------------------------------------------------------------------------------------------
Styling the background and making it pretty ? 
Use a bgcolor and add margin to it. 
margin : 50px; apply 50px margin to top,left,bottom,right positions 

Margin gives spaces to a webpage from outside of the webpage : 
IMP remember the order : 

margin 
border
padding
context 

-----------------------------------------------------------------------------------------------
How to add another html page to this page ? 
to do so : create a html page.
And what we do is we replace the anchor tag link with (google.com) with our second html filename
and inside the second html file name we redirect it with (google.com)

And create a separate css file so that it can have separate styles and have its own unique behavior
and if you want to have some common effects you can add the first css file  
---------------------------------------------------------------------------------------------
Organizing the files in a proper order ? 

The Better Practice is to maintain a separate folder for images and css 
so create a styles(folder) drop all css files into it, and images (folder and drop images in it)

and after doing it change the images,styles path.