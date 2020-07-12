import React from 'react';
import './Input.scss';
import { Input } from './Input';

export const UsernameInput = (props) => {
    const {
        ...restProps
    } = props;

    return (
        <Input {...restProps} placeholder={'Username'} />
    );
};
