import React from 'react';
import './Header.css';
import Thumbnail from './ImageThumbnail';
import Title from './HeaderTitle';
import HeaderContent from './HeaderContent';

const HeaderContainer = props => {
    return (
        <div>
            <Thumbnail />
            <Title />
            <HeaderContent />
        </div>
    );
};

export default HeaderContainer
