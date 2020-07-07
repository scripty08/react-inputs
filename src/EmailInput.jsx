import React from 'react';
import './Input.scss';
import { Input } from '@src/Input';

export const EmailInput = (props) => {
    const {
        ...restProps
    } = props;

    return (
       <Input type={'email'} {...restProps} placeholder={'Email'} />
    );
};
