import React from 'react';
import './Input.scss';
import { Input } from '@src/Input';

export const SearchInput = (props) => {
    const {
        ...restProps
    } = props;

    return (
        <Input {...restProps} placeholder={'Search...'} />
    );
};
