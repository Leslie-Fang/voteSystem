import {Provider} from 'react-redux';
import {store} from "../babel/store.js"
import Container1 from "../babel/container/container1.js";
import $ from 'jquery';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

export class Component1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className = "text-center">投票</h1>
                <img src="../../images/logo.png" className="img-responsive" alt="Logo"/>
            </div>
        );
    }
};

class Board extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Provider store={store}>
                <div className="container">
                    <Component1 />
                    <Container1 />
                </div>
            </Provider>);
    }
}

ReactDOM.render(<Board/>, document.getElementById('example'));


