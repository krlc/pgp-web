import * as React from 'react';
import * as ReactDOM from 'react-dom';

import KeyViewer from "./components/keyViewer";
import Warning from "./components/warning";
import Footer from "./components/footer";

const App = () => (
    <React.Fragment>
        <Warning />
        <KeyViewer />
        <Footer />
    </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));