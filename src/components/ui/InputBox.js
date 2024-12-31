

import React from 'react';
import enhance from '../hoc/wrapInputBox';

function InputBox(props) {
    const { value, handleChange, handleKeyUp, handlePriorityChange, handleDateChange } = props;

    return (
        <div>
            <input
                autoFocus
                type="text"
                className="form-control add-todo"
                value={value}
                onKeyUp={handleKeyUp}
                onChange={handleChange}
                placeholder="Add New"
            />
            <select onChange={handlePriorityChange} className="form-control">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <input
                type="date"
                onChange={handleDateChange}
                className="form-control"
            />
        </div>
    );
}

export default enhance(InputBox);

