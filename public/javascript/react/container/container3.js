import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {queryResult} from '../../babel/action/index.js';

function mapStateToProps(state) {
    return ({
        voteResults: state.voteResults,
        showItems: state.showItems
    });
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({queryResult:queryResult}, dispatch);
}

class Container3 extends React.Component {
    constructor(props) {
        super(props);
        this.props.queryResult();
    }
    render() {
        return(
            <div>
                <h3>物品和编号:</h3>
                <ul>
                    {this.props.showItems.map((item)=>{return(
                        <div>
                            <li key={item.id} >
                                <div>
                                    <label>
                                         {item.id} {item.name}
                                    </label>
                                </div>
                            </li>
                        </div>
                    )})}
                </ul>
                <br/><br/>
                <h3>得票数量:</h3>
                <ul>
                    {this.props.voteResults.map((item)=>{return(
                        <div>
                            <li>
                                <div>
                                    <label>
                                        选项: {item.voteNumber} 得票数量: {item.count}
                                    </label>
                                </div>
                            </li>
                        </div>
                    )})}
                </ul>
                <div className="text-center">
                    <button className="btn btn-primary">提交</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,matchDispatchToProps)(Container3);