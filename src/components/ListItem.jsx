import React, { memo } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ multiple, selectedNumber, children }) => {
    const description = `click the button to get the multiple numbers of ${children}`;

    return (
        <li className="list-item">
            <button data-testid="number-button" className={multiple ? 'active-number-btn' : 'number-btn'} value={children} onClick={selectedNumber} aria-label={description}>
                {children}
            </button>
        </li>
    );
};

ListItem.propTypes = {
    multiple: PropTypes.bool.isRequired,
    selectedNumber: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

export default memo(ListItem);
