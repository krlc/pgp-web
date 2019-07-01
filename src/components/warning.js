import React from 'react';
import * as styles from './warning.scss';
import classNames from 'classnames/bind';
import isEligible from "../common/isEligible";

const cx = classNames.bind(styles);

const warningClass = cx({
    'warning': !isEligible(),
    'warning_hidden': isEligible(),
});

export default function Warning() {
    return (
        <div className={warningClass}>Open this page in desktop Chrome or Firefox</div>
    )
}