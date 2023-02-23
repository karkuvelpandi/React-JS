import React from 'react'

const Wrapper = (Component) => {
    const NewComponent = () => {
        return <>
            <h2>Wrapper Comp</h2>
            <Component />
        </>
    }
    return NewComponent
}

export default Wrapper