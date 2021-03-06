import React, { useState, useCallback } from 'react';
import ListItem from './ListItem';
import { isMultipleNum } from '../utils/helpers';

const List = () => {
    // Keep track of the selected number box in the local state
    const [selectedNum, setSelectedNum] = useState(0);

    // Set the selected number with the value of the selected box
    const selectedNumber = useCallback((e) => {
        setSelectedNum(e.currentTarget.value);
    }, []);

    // Create a new array of components with set length of 144
    const numbersList = Array(144)
        .fill()
        .map((_, i) => {
            const multiple = isMultipleNum(i + 1, selectedNum);
            return (
                <ListItem key={i} selectedNumber={selectedNumber} multiple={multiple}>
                    {i + 1}
                </ListItem>
            );
        });

    return <ul className="list">{numbersList.map((listItem) => listItem)}</ul>;
};

export default List;
