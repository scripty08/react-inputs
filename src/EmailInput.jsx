import React from 'react';
import { Input } from './Input';

export const EmailInput = (props) => {
    const {
        ...restProps
    } = props;

    return (
       <Input type={'email'} {...restProps} placeholder={'Email'} />
    );
};
