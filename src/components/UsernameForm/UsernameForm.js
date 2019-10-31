import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Box, Button, Form, FormField, TextInput } from 'grommet';

import {
  setUserInput,
  setUsername,
  toggleShowUser
} from '../../store/actions/user.actions';

export class UsernameForm extends Component {
  handleChange = event => {
    const {
      target: { value }
    } = event;
    this.props.setInputValue(value);
    // this.props.setInputValue(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('props on submit', this.props);
    this.props.setUsername(this.props.value);
    this.props.toggleShowUser();
  };

  render() {
    return (
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form onSubmit={this.handleSubmit}>
            <FormField
              label="GitHub Username"
              htmlFor="username-input"
              // not necessary?
              // {...this.props}
            >
              <TextInput
                id="username-input"
                placeholder="Type something..."
                value={this.props.value}
                onChange={this.handleChange}
                required
                // TODO: figure out validation for no spaces, no special characters except - and _
                // validate={{ regexp: /^\S*$/ }}
              />
            </FormField>
            <Button primary type="submit" label="Get User"></Button>
          </Form>
        </Box>
      </Box>
    );
  }
}

const mapStateToProps = state => ({ value: state.user.inputValue });

const mapDispatchToProps = dispatch => ({
  setInputValue: value => dispatch(setUserInput(value)),
  setUsername: username => dispatch(setUsername(username)),
  toggleShowUser: () => dispatch(toggleShowUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsernameForm);
