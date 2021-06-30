import React from 'react';
import Button from 'react-bootstrap/Button'


function ButtonPrimary({label}){
    return(
        <Button variant="primary">
            {label}
        </Button>
    )
}

export {ButtonPrimary}