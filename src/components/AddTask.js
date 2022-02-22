import React from 'react'
import { useState } from 'react';

const AddTask = ({onAdd, showAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd({text, day, reminder})
        
        return(
            setText(''),
            setDay(''),
            setReminder(false)
        )
    }

    return(
    <form className='add-form' onSubmit={onSubmit} style={!showAdd ? {display: 'none'} : {display: 'initial'}}>
        <div className='form-control'>
            <label>Task</label>
            {/* last time it was getelementbyid and then now its using events, so i dont quite get how the computer knows which element to look at? */}
            <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className='form-control'>
            <label>Day & Time</label>
            <input type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>
        <div className='form-control form-control-check'>
            <label>Reminder</label>
            <input type='checkbox' checked={reminder} onChange={(e) => setReminder(e.target.checked)}/>
        </div>
        <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
    )
}

export default AddTask;