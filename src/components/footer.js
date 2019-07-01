import * as React from 'react';
import {keyPath} from "../common/getKey";
import * as styles from './footer.scss';

export default function Footer() {
    return (
        <ul className={styles.footer}>
            <li><a target="_blank" href="https://github.com/krlc/resume-paper/releases/download/v1.0/resume.pdf">Resume</a></li>
            <li><a target="_blank" href="https://github.com/krlc/resume-code/">GitHub</a></li>
            {/*<li><a href="#" onClick={e => {e.preventDefault(); alert("Not yet.")}}>Twitter</a></li>*/}
            {/*<li><a target="_blank" href="mailto:">Email</a></li>*/}
            <li><a target="_blank" href={keyPath}>Public key</a></li>
        </ul>
    )
}