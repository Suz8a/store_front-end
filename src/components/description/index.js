import React from 'react';
import {TextBox} from "./styled";

export default function Description() {
    return (
        <div>
            <TextBox placeholder="Ingresar una descripción" maxLength="400" type="text" cols="40" rows="5"></TextBox>
        </div>
    )
}
