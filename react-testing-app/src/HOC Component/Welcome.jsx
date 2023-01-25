import React from 'react'
import { useState } from 'react'

const Welcome = () => {
    const [state,setState] = useState("Imad")
  return <>
    <h5>Welcome :{state} </h5>
  </>
}

export default Welcome