import React from 'react';

class Header extends React.Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div class = "header">
                <div class = "logo">
                    Foodie
                </div>
                <div class = "profile">
                    <div class = "profile-name">Hi, People</div>
                </div>
            </div>
        );
    }
}

export default Header;
