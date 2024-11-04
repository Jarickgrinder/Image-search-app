import React, { useState } from 'react';

const ImageSearch = ({ setTerm }) => {
    const [text, setText] = useState('');
    const onSubmit = e => {
        e.preventDefault();
        setTerm(text);
        setText('');
    };
    return (
            <form onSubmit={onSubmit} class="form">
                <div>
                    <input onChange={e => setText(e.target.value)} class="input" type="text" placeholder="Search Image Term..." />
                    <button class="button"  type="submit">Search </button>
                </div>
            </form>

    );
};

export default ImageSearch;