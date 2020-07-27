import React from 'react';
import '@atlaskit/css-reset';
import { hot } from 'react-hot-loader/root';
import { Example } from './Example';
import { AppContainer } from '../../src/Styles';


const App = () => {
    return (
        <AppContainer>
            <Example />
        </AppContainer>
    );
};

export default hot(App);
