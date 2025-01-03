import React from 'react';
import CheckBox from './CheckBox';

export default function TodoItem(props) {
    const { data, changeStatus } = props;
    const handleChange = (checked) => changeStatus(data.id, checked);
    const className = 'todo-item ui-state-default ' + (data.completed ? 'completed' : 'pending');
    
    return (
        <li className={className}>
            <div className="checkbox">
                <label>
                    <CheckBox checked={data.completed} onChange={handleChange} />
                    {data.text}
                </label>
            </div>
            <div className="task-details">
                
                <span>Priority: {data.priority || 'N/A'}</span><br />
               
                <span>Due Date: {data.dueDate || 'N/A'}</span><br />
                
                <span>Created: {data.createdTime || 'N/A'}</span>
            </div>
        </li>
    );
}
