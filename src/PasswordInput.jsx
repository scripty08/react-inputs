import React from 'react';
import { Input } from './Input';

export const PasswordInput = (props) => {
    const {
        ...restProps
    } = props;

    return (
        <Input type={'password'} {...restProps} placeholder={'Password'} />
    );
};
