import React from 'react';
import { Input } from './Input';

export const SearchInput = (props) => {
    const {
        ...restProps
    } = props;

    return (
        <Input {...restProps} placeholder={'Search...'} />
    );
};
