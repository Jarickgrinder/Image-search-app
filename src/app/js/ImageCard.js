/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const ImageCard = ({ image }) => {
    return (
        <div class="img_block">
            <img class="img" src={image.webformatURL} />  
                <div class="author_font"> Photo by: {image.user}</div>
        </div>
    );
};


export default ImageCard;
