import React from 'react';
import {FormattedMessage} from 'react-intl';
import messages from './messages';
import Map from '../Map';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>
                    <FormattedMessage {...messages.header} />
                </h1>
                <div>
                    <Map />
                </div>
            </div>
        );
    }
}
