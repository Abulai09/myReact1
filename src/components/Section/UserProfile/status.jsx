import React, { useEffect, useState } from "react";

const ProfileStatus = (props) =>{
    let [editMode,setEditMode]=useState(false)

    let [status,setStatus]=useState(props.status)

    useEffect( ()=>{
        setStatus(props.status)
    },[props.status] )

    const activateMode = () =>{
        setEditMode(true)
    }

    const deActivateMode = () =>{
        setEditMode(false)
        props.updateStatusThunk(status)
    }

    const onStatusChange = (e) =>{
        setStatus(e.currentTarget.value);
    }

    return(
        <div>
        { !editMode &&
          <div>
            <span onClick={activateMode}>{props.status || "--" }</span>
        </div>
        }   
        {
            editMode && <div>
            <input onChange={onStatusChange} value={status} onBlur={deActivateMode} autoFocus={true} />
        </div>
        }
    </div>    
    )
}

export default ProfileStatus