
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    // var node = document.createElement("LI");                 // Create a <li> node
    // var textnode = document.createTextNode("Water");         // Create a text node
    // node.appendChild(node);   
    Array.from(htmlElement.children).forEach((el,idx) => {
        htmlElement.removeChild(el);
    })

    let newP = document.createElement("p");
    let text = document.createTextNode(string);  
    newP.appendChild(text);
    htmlElement.appendChild(newP);
};
{/* <p>party time </p> */}
// htmlGenerator('Party Time.', partyHeader);