import React from 'react';
import './Input.scss';
import { Input } from '@src/Input';

export const PasswordInput = (props) => {
    const {
        ...restProps
    } = props;

    return (
        <Input type={'password'} {...restProps} placeholder={'Password'} />
    );
};
