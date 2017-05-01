import React, {Component} from 'react';
import '../css/Header.scss';
import Modal from 'react-modal'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as registerActions from '../actions/register-actions';

class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.registerUser = this.registerUser.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
    this.state = {
      userName: '',
      user: {},
      modalOpen: false
    }
  }
  registerUser(e) {
    e.preventDefault()
    this.props.actions.registerUser({name: this.state.userName})
    setTimeout(() => {
      this.setState({ modalOpen: false });
    }, 3000);
  }
  updateUserName(e) {
    this.setState({
      userName: e.target.value
    });
  }
  render() {
    let { title, text, buttons, user } = this.props
    let { userName, modalOpen } = this.state
    let { name } = user
    return (
      <div className="header-container container full-width-container">
          <div className="container">
            <div className="row">
              <div className="column">
                <p className="headline">{title}</p>
              </div>
              <div className="column">
                <p className="content">{text}</p>
                {buttons.map(button => {
                  if(button.button_type === 'primary') {
                    return <a href="#" 
                              className="header-button primary" 
                              key={Math.random()}>
                                {button.title}
                            </a>
                  }
                  else if(button.button_type === 'secondary') {
                    return <a 
                      href="#" 
                      onClick={() => this.setState({ modalOpen: true })} 
                      className="header-button secondary" 
                      key={Math.random()}>
                        {button.title}
                      </a>
                  }
                  return (
                    <a href="#" className="header-button" key={Math.random()}>{button.title}</a>
                  )
                })}
              </div>
          </div>
        </div>
        <Modal
          isOpen={modalOpen}
          contentLabel="Modal"
        >
          { name ? `Thanks ${name}, we've registered you!` : 
          <div className="row">
            <div className="column column-50 column-offset-25">
                <h1>Register</h1>
                <p>{user.length}</p>
                <form onSubmit={this.registerUser}>
                    <input 
                      type="text" 
                      value={userName} 
                      placeholder="Name" 
                      onChange={this.updateUserName.bind(this)} 
                    />
                    <input 
                      type="submit" 
                      className="header-button primary float-right" 
                      value="Register" 
                    />
                </form>
            </div>
          </div>
          }
        </Modal>
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(registerActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);