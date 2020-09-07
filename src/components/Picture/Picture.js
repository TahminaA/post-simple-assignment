import React from 'react';


const Picture = (props) => {
    const{thumbnail}=props.images;
    
    return (
        <div>
            
            <img src={thumbnail} alt=""/>
       
        </div>
    );
};

export default Picture;