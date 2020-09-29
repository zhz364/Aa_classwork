
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};
const dropDown = document.querySelector('.drop-down-dog-list');


export const dogLinkCreator = (dogs) => {
  let arr = [];
  // <li><a href="">Corgi</a></li>

  //iterating a hash obj
  for (let k in dogs){
    // document.getElementById("myLink").href = "style2.css";
    // create li tag
    let newLi = document.createElement("li");
    let key = document.createTextNode(k);  
    newLi.appendChild(key);
    //create a tag
    let newA = document.createElement("a");
    newA.href = dogs[k];
    
    newLi.appendChild(newA);
    // dropDown.appendChild(newLi);
    arr.push(newLi)
    
  }
  return arr
}

// dogLinkCreator(dogs);

export const attachDogLinks = () => {
  let dogLinks = dogLinkCreator(dogs);  
  // debugger
  dogLinks.forEach((el) => {
    // console.log(dropDown);
    // console.log(`ele1 ${el}`);
    dropDown.appendChild(el);
  })
}
attachDogLinks()
const dogNav = document.querySelector(".drop-down-dog-nav");
const hideDrop = (event) =>{
  event.target.style.display = "none";
}

const showDrop = (event) =>{
  event.target.style.display = "block";
}
dogNav.addEventListener("mouseleave",hideDrop)
dogNav.addEventListener("mouseenter",showDrop)

// export const handleEnter = () => {
//   let dogLinks = document.querySelectorAll(".dog-link");
//   for (let i = 0; i < dogLinks.length; i++) {
//     dogLinks[i].style.display = "block";
//   }
// };
// export const handleLeave = () => {
//   let dogLinks = document.querySelectorAll(".dog-link");
//   for (let i = 0; i < dogLinks.length; i++) {
//     dogLinks[i].style.display = "none";
//   }
// };
// attachDogLinks()

