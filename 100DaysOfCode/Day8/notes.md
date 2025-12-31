Styling inline and block elements ?

limitations of inline elements ?

==> First limitation is Margin
    top and bottom margin wont work for inline elements but left and right margin works ! 

    open anchor tag which is a inline element and apply margin top and bottom and apply left and right.
    Now lets try applying right and left margin which works (becasue inline element) takes space it requires

    so : margin : 50px 50px; (50px top bottom 50px right left)

===>Second limitation while working with inline elements is Padding.

when you apply padding to the inline element the padding covers (if any element is above the inline element)
but it does not move the element above or below it just cover/hides any other elements

ex: open anchor tag and increase the padding observe the <p> tag above <a> 
first remove margin for <P> which is applied by its id("insideheadder) and observe it hides <p> contents

But if we apply the same padding to the p, h1 elements their padding moves any elements down
if padding top bottom is applied 

How to fix ? 
Use display property, and making an inline element as block element 
display: block;

or we can use (inline-block) it contains both properties (allows a element to be inline but also allows
top and bottom margin properties of block elements)

This allows to overcome both the limitations of margin and padding for inline elements
------------------------------------------------------------------------------------------------------- 

Margin Collapse issue ?

For vertical margins we have this issue : when two margins (top bottom ) of both elements collapse 
and result into a single margin 

ex: h1 = margin-bottom : 50px and h2 margin-bottom: 20px
Now the total margin should be 70px but due to margin collapse it is 50px

how it helps ? 
looks at <li> here we defined margin 32px for each but applied as (32px) at end of each list and the
same 32px is also used as margin top, which make sense because we dont want 

32px at top


32px at bottom 
32px at top 


32px at bottom 

so for each <li> list we want 32px space not 32at top and 32 at bottom + 64px total space
---------------------------------------------------------------------------------------------------------
Box shadow styling ? 
allows to make the elements look more realistic 
box-shadow : horizontal shadow, vertical shadow, blue-radius, color
 