import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {changeItem,submitSelectItem,submitTureItem} from '../../babel/action/index.js';

function mapStateToProps(state) {
    return ({
        items: state.items
    });
}


function matchDispatchToProps(dispatch){
    return bindActionCreators({changeItem:changeItem,submitSelectItem:submitSelectItem,submitTureItem: submitTureItem}, dispatch);
}

class Container2 extends React.Component {
    constructor(props) {
        super(props);
        var myitems = this.props.items.filter(function(item) {
            return item.initChecked !== false;
        });
        this.state = {select:myitems[0].id};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
       console.log(event.target.checked);
       console.log(event.target.id);
       this.setState({select: event.target.id},function(){
           console.log(this.state.select);
          // this.props.changeItem(this.state.select);
       });
      //this.props.changeItem();
    }

    handleSubmit(event){
        event.preventDefault();
        console.log('submit');
        //var dta = {selectItem : this.state.select};
        var dta = this.state.select;
        console.log(dta );
        submitSelectItem(dta,function(result){
            console.log(result);
            if(result.queryVoted == 'fail'){
                console.log('Ready to submit data!');
                submitTureItem(dta);
            }else{
                alert('Already Voted!');
            }
        });
    }

    render() {
        return(
            <div>
                <ul className="list-unstyled">
                    {this.props.items.map((item,i)=>{
                        return(
                        <div>
                            <li key={item.id} >
                                <div>
                                    <label style={{color:item.color}}>
                                        <input type="radio" name="radio" id={item.id} index={item.id} defaultChecked={item.initChecked} onChange={this.handleChange}/>
                                        {item.name}
                                    </label>
                                </div>
                                <br/><br/>
                            </li>
                        </div>
                    )})}
                </ul>
                <div className="text-center">
                     <button className="btn btn-primary" onClick={this.handleSubmit}>提交</button>
                </div>
            </div>
        );
    }
}

//store.dispatch({ type: 'INCREMENT' });

export default connect(mapStateToProps,matchDispatchToProps)(Container2);