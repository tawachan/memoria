import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { Dialog } from 'material-ui';

import SignUpForm from './sign_up_form';

class SignUp extends Component {

  handleClose() {
    this.props.switchSignUpModal(false);
  }

  handleOpen() {
    this.props.switchSignUpModal(true);
  }

  render() {

    return (
      <div>
        <Dialog
          title="Sign Up"
          modal={false}
          open={this.props.modalOpen || false}
          onRequestClose={ () => this.handleClose() }
        >
          <SignUpForm />
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    modalOpen: state.status.signUpModalOpen,
  }
}

export default connect(mapStateToProps, actions)(SignUp);
