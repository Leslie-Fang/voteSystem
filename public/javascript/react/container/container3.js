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
                <div>
                    <ul>
                        {this.props.voteResults.map((item)=>{
                            if(item.name == 'red'){
                                item.name = '红色';
                            }
                            if(item.name == 'orange'){
                                item.name = '橙色';
                            }
                            if(item.name == 'yellow'){
                                item.name = '黄色';
                            }
                            if(item.name == 'green'){
                                item.name = '绿色';
                            }
                            if(item.name == 'blue'){
                                item.name = '蓝色';
                            }
                            if(item.name == 'purple'){
                                item.name = '紫色';
                            }
                            return(
                            <div>
                                <li>
                                    <div>
                                        <label>
                                            {item.name}    得票数:{item.count}
                                        </label>
                                    </div>
                                </li>
                            </div>
                        )})}
                    </ul>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps,matchDispatchToProps)(Container3);