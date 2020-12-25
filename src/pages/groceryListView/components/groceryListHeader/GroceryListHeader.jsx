import React from 'react';
import GroceryAddWrap from './components/groceryAdd/GroceryAddWrap'
import GroceryFilterWrap from './components/groceryFilter/GroceryFilterWrap.js'

const GroceryListHeader = () => {
    return (
        <div className="grocery-list-header">
            <GroceryAddWrap />
            <GroceryFilterWrap />
        </div>
    )
}

export default GroceryListHeader;
