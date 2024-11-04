import React from 'react';

const ImageCard = ({ image }) => {
    return (
        <div class="img_block">
            <img class="img" src={image.webformatURL} />  
                <div class="author_font"> Photo by: {image.user}</div>
        </div>
    );
};




// let galleryImages = document.querySelectorAll(".img");
// let getLatestOpendImg;
// let windowWidth = window.innerWidth;

// if(galleryImages) {
//     galleryImages.forEach(function(image, index) {
//         image.onclick = function() {
//             // let getElementCss = window.getComputedStyle(image);
//             // let getFullImgUrl = getElementCss.getPropertyValue("background-image")
//             // let getImgUrlPos = getFullImgUrl.split("/img/thumbs/")
//             let setNewImgUrl = image.webformatURL
//             // getImgUrlPos[1].replace('")', '');
//             console.log(image)

//             // getLatestOpendImg = index + 1;

//             let container = document.body;
//             let newImgWindow = document.createElement("div");
//             container.appendChild(newImgWindow);
//             newImgWindow.setAttribute("class", "img-window");
//             newImgWindow.setAttribute("onclick", "closeImg()")

//             let newImg = document.createElement("img");
//             newImgWindow.appendChild(newImg);
//             newImg.setAttribute("src", + image);    
             
//             console.log(setNewImgUrl)
//             console.log(newImgWindow)
//             console.log(newImg) 
 
//         }  
//     });     
// }
 
// function closeImg () {
//     document.querySelector(".img-window").remove();
// }

export default ImageCard;
