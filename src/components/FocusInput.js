import React, { useEffect, useRef } from 'react'



export const FocusInput = () => {
   
    //ref create return type is ref
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return (
        <div>
            <input type='text' ref={inputRef} />
        </div>
    )
}
