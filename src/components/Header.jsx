import React from 'react';

export default function Header() {
    return (
        <header className="header">
            <img
                src="/assets/images/Troll Face.png"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Dynamic Web Page</h4>
        </header>
    );
}
