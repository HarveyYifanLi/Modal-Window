import React, {Component} from 'react';

class Modal extends Component {

    onModalConfirm = () => {
        //- send the confirmation back to parent
        this.props.handleDelete(true);
        //- then close the modal window
        this.props.handleClose(!this.props.show);
    }
    
    onModalClose = () => {
        this.props.handleClose(!this.props.show);
    }
    
    render(){
        if(!this.props.show){
            return null;
        }
        return (
            //- note on toggle css class through state as well!!! :)
            <div className={this.props.show ? 'modal-content': null}>
                <div>{this.props.children}</div>
                <br/>
                <div>Are you sure to delete this post?</div>
                <br/>
                <button className="btn btn-lg btn-warning" onClick={this.onModalConfirm}>Yes</button>
                <button className="btn btn-lg btn-info" onClick={this.onModalClose}>Cancel</button>
            </div>
        );
    }
}

export default Modal;