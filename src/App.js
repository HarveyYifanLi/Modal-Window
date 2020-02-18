import React, {Component} from 'react';
import Modal from './Component/Modal';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
      toDelete: false
    };
  }
    
  showModal = (dataFromChild) => {
    //- my definition allows it as an overloaded method (i.e. called with/without a parameter)! :)
    //alert("To show modal window or not: " + dataFromChild);
    if(dataFromChild !== 'true' && dataFromChild !== 'false'){//meaning this parameter has not been passed in at all
      this.setState({
          show: !this.state.show
      });
    } else {
        this.setState({
          show: dataFromChild
        });
    }
  }
  
  deleteSomePost = (dataFromChild) => {
    this.setState({
      toDelete: dataFromChild
    });
    //alert("Post has been deleted!");
  }
  
  render(){
    return (
      //- note on toggle css class through state as well!!! :)
      <div className="App">
        <button className="btn btn-lg btn-info" onClick={this.showModal}>Toggle Modal</button>
        <div className={this.state.show ? 'modal': null}>
          <Modal
            show={this.state.show}
            handleClose={this.showModal} 
            handleDelete={this.deleteSomePost}
          > Message in Modal Window regarding some update action 
          </Modal>
        </div>
      </div>
    );
  }
}

export default App;
