import React from 'react';
import Button from 'react-bootstrap/Button'
import './index.css'


function ButtonPrimary({label}){
    return(
        <Button className="Button" variant="primary">
            {label}
        </Button>
    )
}

export {ButtonPrimary}