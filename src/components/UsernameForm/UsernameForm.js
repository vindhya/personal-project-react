import React, { Component } from 'react';
import { Box, Button, Form, FormField, TextInput } from 'grommet';

export class UsernameForm extends Component {
  state = { value: '' };

  handleChange = event => {
    const {
      target: { value }
    } = event;
    this.setState({ value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('state on submit', this.state);
    this.props.onUsernameSubmission(this.state.value);
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
                value={this.state.value}
                onChange={this.handleChange}
                required
                // TODO: figure out validation for no spaces, no special characters except - and _
                // validate={{ regexp: /^\S*$/ }}
              />
            </FormField>
            <Button
              primary
              color="accent-1"
              type="submit"
              label="Get User"
            ></Button>
          </Form>
        </Box>
      </Box>
    );
  }
}

export default UsernameForm;
