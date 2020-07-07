import React from 'react';
import './Input.scss';

export const Input = (props) => {
    const {
        onChange = () => {},
        value,
        placeholder = '',
        name = '',
        type = '',
        helpLink
    } = props;

    const onInputChange = (e) => {
        onChange(e.target.name, e.target.value, e)
    };

    return (
        <div className={'input'}>
            <div className={'form-label-group'}>
                <input
                    defaultValue={value}
                    placeholder={placeholder}
                    id={name}
                    name={name}
                    type={type}
                    className={'form-control'}
                    onChange={onInputChange}/>
                <label htmlFor={name}> </label>
            </div>
            <span className={'help-link'}>{helpLink}</span>
        </div>
    );
};
