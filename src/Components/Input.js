import React from 'react';
import { Label, Input } from 'reactstrap';

const InputField = (props) => {
    return(
        <>
            <Label for={props.id}>{props.title}</Label>
            <Input 
                type={props.type} 
                name={props.name} 
                id={props.id} 
                autoComplete = {props.autocomplete}
                placeholder={props.placeholder} 
                value={props.value}
                onChange = {props.onChange}
                disabled  = {props.isDisabled}
                innerRef={props.innerRef}/>
        </>
    );
}

export default InputField;