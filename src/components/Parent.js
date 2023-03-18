import React, { useCallback, useMemo, useState } from 'react'
import Child from './Child'

const Parent = () => {

    const [state, setState] = useState(0)
    const [newState, setNewState] = useState('hello world!')

    const handleClick = () => {
        setState(cool => cool+1)
        setNewState('hello Universe!')
    }

    console.log('This is Parent')

    const someFn = useCallback(() => {
        console.log(newState)
    }, [newState])

    const value = useMemo(() => {
        console.log('Heavy function is running')
        let val;
        for(let i =0 ; i<1000 ; i++){
            val = i
        }
        return val;
    }, [])

  return (
    <>
    <div>Parent</div>
    <h1>{value}</h1>
    <h3>Number: {state}</h3>
    <button onClick={handleClick}>CLick it to rerender this component alog with its children</button>
    <Child someFn={someFn} />
    </>
  )
}

export default Parent