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
                                item.name = '第一位演唱歌手';
                            }
                            if(item.name == 'orange'){
                                item.name = '第二位演唱歌手';
                            }
                            if(item.name == 'yellow'){
                                item.name = '第三位演唱歌手';
                            }
                            if(item.name == 'green'){
                                item.name = '第四位演唱歌手';
                            }
                            if(item.name == 'blue'){
                                item.name = '第五位演唱歌手';
                            }
                            if(item.name == 'purple'){
                                item.name = '第六位演唱歌手';
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