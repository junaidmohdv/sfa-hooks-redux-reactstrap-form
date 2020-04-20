import React from 'react';
import { Label, Input } from 'reactstrap';

const RadioInput = (props) => {

    return(
        <div className="custom-radio">
            <Input 
                type="radio" 
                name={props.name} 
                id={props.id} 
                checked={props.checked}
                value={props.value}
                onChange={props.changed}
                innerRef={props.innerRef}/>
            <Label for={props.id} check >{props.title}</Label>
      </div>
    );
}

export default RadioInput;