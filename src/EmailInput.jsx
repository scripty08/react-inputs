import React from 'react';
import './Input.scss';
import { Input } from './Input';

export const EmailInput = (props) => {
    const {
        ...restProps
    } = props;

    return (
       <Input type={'email'} {...restProps} placeholder={'Email'} />
    );
};
