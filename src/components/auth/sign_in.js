import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { Dialog } from 'material-ui';

import SignInForm from './sign_in_form';

class SignIn extends Component {

  handleClose() {
    this.props.switchSignInModal(false);
  }

  handleOpen() {
    this.props.switchSignInModal(true);
  }

  onSubmit(values) {
    this.props.signIn(values, () => {
     this.props.history.push('/manage')
   });
 }

  render() {

    return (
      <div>
        <Dialog
          title="Sign In"
          modal={false}
          open={this.props.modalOpen || false}
          onRequestClose={ () => this.handleClose() }
          style={{ height: '1000px'}}
        >
          <SignInForm />
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    modalOpen: state.status.signInModalOpen,
  }
}

export default connect(mapStateToProps, actions)(SignIn);
