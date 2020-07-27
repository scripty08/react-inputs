import React from 'react';
import styled from 'styled-components';

export const AppContainer = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    padding: 10px;
`;

export const Container = styled.div`
    position: relative;
`;

export const StyledInput = styled.input`
    display: inline-block;
    width: 100%;
    padding: 5px;
    font-size: 1.0625rem;
    font-weight: 400;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
`;

export const HelpLink = styled.span`
    position: absolute;
    top: 0;
    right: 0px;
    padding: 5px 5px;
    margin-bottom: 0;
    color: #a1a8ae;
    cursor: pointer;
    transition: all .2s ease-in-out;
    a {
        text-decoration: none;
        color: #000;
    }
`;

export const Label = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    padding: .88rem 1rem;
    margin-bottom: 0;
    color: #a1a8ae;
    pointer-events: none;
    cursor: text;
    transition: all .2s ease-in-out;
`;
