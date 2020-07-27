import React from 'react';
import { Container, HelpLink, Label, StyledInput } from './Styles';

export const Input = (props) => {
    const {
        onChange = () => {},
        value,
        placeholder = '',
        name = '',
        type = '',
        helpLink,
        ...restProps
    } = props;

    const onInputChange = (e) => {
        onChange(e.target.name, e.target.value, e)
    };

    return (
        <Container>
                <StyledInput
                    defaultValue={value}
                    placeholder={placeholder}
                    id={name}
                    name={name}
                    type={type}
                    onChange={onInputChange}
                    {...restProps}
                />
                <Label htmlFor={name}> </Label>

                <HelpLink htmlFor={name}> {helpLink} </HelpLink>

        </Container>
    );
};
