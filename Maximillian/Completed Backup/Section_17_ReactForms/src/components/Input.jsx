import React from 'react'

export const Input = ({ label, id, error, ...props }) => {
    return (
        <div className="control no-margin">
            <label htmlFor={id}>{label}</label>
            <input id="email"{...props} />
            <div className="">{error && <p>{error}</p>}</div>
        </div>
    )
}
