// export default function TabButton(props){
//     // props by default has a children which represents to the content between the component ex : <tabButton>text</tabButton> the text between the component is the child.
//     return <li><button>{props.children}</button></li>
// }

// or we can follow this approach : here we cant select the dom elements like we do in js (document.getelementbyID(button) then addeventlistener etc...) rather we let react handle it we anchor to button as : 

// export default function TabButton({children}){
//     function HandleClick(){
//         console.log("Button Clicked")
//     }

//     return (
//         <li>
//             <button onClick={HandleClick}>{children}</button>
//         </li>
//     )
// }

// or rather we can handle it by creating a onselect in component itself and define the function inside app.jsx

export default function TabButton({ children, onSelect, isSelected }) {
    // 4. We receive 'isSelected' boolean from App.jsx's state comparison.
    // If it's true, we assign the 'active' class to highlight the button, 
    // otherwise we don't assign any class (or use undefined).

    return (
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
                {children}
            </button>
        </li>
    )
}