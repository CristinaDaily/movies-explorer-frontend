import { useState, useEffect } from 'react'

function isDefined (storedValue) {
    return storedValue !== null && storedValue !== 'undefined';
}

export function useLocalStorageState(key, initialValue){
    const [state, setState] = useState(() => {
        const storedValue = localStorage.getItem(key)
        
        return isDefined(storedValue) ? (JSON.parse(storedValue)) : initialValue 
    })

    useEffect(() => {
        if (key === 'isChecked')
            console.log('setting the state of ', key, 'to ', state)
        localStorage.setItem(key, JSON.stringify(state))
        if (key === 'isChecked')
            console.log(key, 'is now ', state)
    }, [key, state])

    return [state, setState]
};