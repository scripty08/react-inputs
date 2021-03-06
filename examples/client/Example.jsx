import React, { Fragment } from 'react';
import { PasswordInput, EmailInput , SearchInput, Input, UsernameInput} from '../../src';

export const Example = () => {

    return (
        <Fragment>
            <h2>Input</h2>
            <Input />

            <h2>Search Input</h2>
            <SearchInput />

            <h2>Username Input</h2>
            <UsernameInput />

            <h2>Email Input</h2>
            <EmailInput />

            <h2>Password Input</h2>
            <PasswordInput />

            <h2>Input with help link</h2>
            <UsernameInput
                helpLink={<a tabindex={-1} href={'#'}>FORGOT?</a>}
            />
        </Fragment>
    );
};
