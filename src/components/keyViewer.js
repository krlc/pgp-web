import React from 'react';
import * as styles from './keyViewer.scss';
import {asyncReactor} from "async-reactor";

import isEligible from "../common/isEligible";
import {getKey, keyPath} from "../common/getKey";

async function KeyViewer() {
    const key = await getKey();

    return (
        <div className={styles.container}>
            <a href={keyPath} className={styles.keys}>
                <span className={styles.pgp}>
                    {[..."PGP"].map((e, i) => (
                        <span key={"_"+i} className={styles.char} data-original={e} data-placeholder={isEligible() ? "*" : e} />
                    ))}
                </span>
                <span key="d" className={styles.char} data-original=" " data-placeholder={isEligible() ? "*" : " "} />
                {[...key].map((e, i) => (
                    <span className={styles.char} key={i} data-original={e} data-placeholder={isEligible() ? "*" : e} />
                ))}
            </a>
        </div>
    )
}

export default asyncReactor(KeyViewer);