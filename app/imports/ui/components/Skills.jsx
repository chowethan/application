import React from 'react';
import { List, Container, Header, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';


/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
class Skills extends React.Component {
  render() {
    return (
        <Container>
          <Header as='h1'>Skills</Header>
          <List>
            {this.props.skills.map((skill) =>
                <List.Item key={skill._id}>
                  <Label size='tiny' key={skill._id} color='green'>{skill.name}</Label>
                </List.Item>)}
          </List>
        </Container>
    );
  }
}

/** Require a document to be passed to this component. */
Skills.propTypes = {
  skills: PropTypes.array.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default Skills;
