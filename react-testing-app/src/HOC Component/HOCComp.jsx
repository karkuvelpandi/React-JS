import React from 'react'
import Welcome from './Welcome'
import Wrapper from './Wrapper'

const HOCComp = () => {
    const AppComp = Wrapper(Welcome)
  return <>
    <h1>HOC Comp</h1>
    <AppComp />
  </>
}

export default HOCComp