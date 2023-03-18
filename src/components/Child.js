import React, {memo, useContext} from 'react'
import { MyContext } from '../App'

const Child = ({someFn}) => {

    console.log('This is Child')
    someFn()

    const obj = useContext(MyContext)

    return (
    <>
    <div>Child</div>
    <h1>{obj.name}</h1>
    </>
  )
}

export default memo(Child);