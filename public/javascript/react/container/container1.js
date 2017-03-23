import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectUser, submitData} from '../../babel/action/index.js';

function mapStateToProps(state) {
    return ({
        users: state.users
    });
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser,submitData:submitData}, dispatch);
}

class Container1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: "请输入验证码",defaultValue: "请输入验证码"};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        // console.log(event.target.value);
        // console.log(this.state.value);
    }
    handleSubmit(event) {
        event.preventDefault();
        var codedata = this.state.value;
        if(!/^[A-Za-z0-9]+$/.test(codedata))
        {
            alert("只能含有数字有字母!");
            return false;
        }
        //alert("不能含有汉字！");
        this.props.submitData(this.state.value);
        //return true;
    }
    handleFocus(event){
       // console.log('Onfocus');
        this.setState({value: ""});
    }
    render() {
        return(
            <div>
                <form className = "text-center" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputPassword1">验证码</label><br/>
                        <input type="text" className="form-control" id="exampleInputPassword1"
                               ref="verify"
                               value={this.state.value} onChange={this.handleChange}
                               placeHolder={this.state.defaultValue} onFocus={this.handleFocus}/>
                    </div>
                    <button type="submit" className="btn btn-primary">登入</button>
                </form>
            </div>
        );
    }
}

//store.dispatch({ type: 'INCREMENT' });

export default connect(mapStateToProps,matchDispatchToProps)(Container1);