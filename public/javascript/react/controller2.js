import {Provider} from 'react-redux';
import {store} from "../babel/store.js"
import Container2 from "../babel/container/container2.js";

export class Component1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className = "text-center">你最喜爱的东西</h1>
                <h5 >请选择<strong>一样</strong>你最喜欢的东西</h5>
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
                    <Container2 />
                </div>
            </Provider>);
    }
}

ReactDOM.render(<Board/>, document.getElementById('example'));