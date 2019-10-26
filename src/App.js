import React, { Component } from 'react';
import {
  grommet,
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  TextInput
} from 'grommet';

// mockup button colour: '#57BE9D'

class App extends Component {
  state = { value: '' };

  handleChange = event => {
    const {
      target: { value }
    } = event;
    this.setState({ value });
  };

  handleSubmit = event => {
    console.log('state on submit', this.state);
    event.preventDefault();
  };

  render() {
    return (
      <Grommet full theme={grommet}>
        <Box fill align="center" justify="center">
          <Box width="medium">
            <Form onSubmit={this.handleSubmit}>
              <FormField
                label="GitHub Username"
                htmlFor="username-input"
                {...this.props}
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
      </Grommet>
    );
  }
}

export default App;
