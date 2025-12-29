Beyond Basics ?

Understanding Lists ?

Lists are two types ordered lists and unordered lists

<ol></ol> inside we use <li></li> list elements and the <ol type="1,A,a,I,i"> are the order types
we can use the list items ex: 
if we choose <ol type="I"> <li>mango</li><li>apple</li></ol> this appears as a list items 
with roman numbers

On the other hand Ul does not have any order they just show as normal list elements

<ul>
    <li>Books</li>
    <li>pens</li>
</ul>

Lets remove the List styling (1,2,3/A,B,C/I,II,III )

li{
    list-style : None;
}

or you can also apply this css to the ol

ol{
    list-style : none;
}


---------------------------------------------------------------------------------------------
Understanding parents? 
what happens if we apply styling to both ol and li ?

ol{
    list-style : non;
}
li{
    list-style: square;
    list-style:none;
}

here because ol parent has list-style : none. so no other properties of styling can be applied 
here other than none.

it means Nesting of elements means certain rules are inherited from the elements. 
But things are different when you apply color: red to (OL) then it applies to (LI) but 
when you overwrite the color to blue then it will be changed. 

--------------------------------------------------------------------------------------------
Now let's style the page ?


because the li ---> inside --->OL and ol ----> is inside body body styles may effect ol. 
And we can overwrite them, but Li --->p the p styling effect li.

give the <li> a bg color and give space between (but body has margin 50px no need it will be applied)
