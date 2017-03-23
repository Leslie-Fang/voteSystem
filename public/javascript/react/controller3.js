import {Provider} from 'react-redux';
import {store} from "../babel/store.js"
import Container3 from "../babel/container/container3.js";

export class Component1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className = "text-center">投票结果</h1>
                <br/>
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
                    <Container3 />
                </div>
            </Provider>);
    }
}

ReactDOM.render(<Board/>, document.getElementById('example'));