import React, { memo } from 'react';

const ListItem = ({ multiple, selectedNumber, children }) => {
    const description = `click the button to get the multiple numbers of ${children}`;

    return (
        <li className="list-item">
            <button className={multiple ? 'active-number-btn' : 'number-btn'} value={children} onClick={selectedNumber} aria-label={description}>
                {children}
            </button>
        </li>
    );
};

export default memo(ListItem);
