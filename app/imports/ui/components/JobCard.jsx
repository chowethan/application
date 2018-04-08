import React from 'react';
import { Card, Icon, Label, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { distanceInWordsToNow } from 'date-fns';

class JobCard extends React.Component {
  render() {
    const { job, openModal } = this.props;
    return (
      <Card onClick={() => openModal(job._id) }>
        <Card.Content>
          <Image src='/images/uh_logo.png' size='mini' floated='right'/>
          <Card.Header>
            {job.title}
          </Card.Header>
          <Card.Meta>
            <Icon name='map pin' />
            {job.location}
          </Card.Meta>
          <Card.Meta>
            <Icon name='money' />
            Pay: ${job.pay}
          </Card.Meta>
          <Card.Meta>
            <Icon name='calendar' />
            Posted: {distanceInWordsToNow(job.postDate)} ago
          </Card.Meta>
        </Card.Content>
        <Card.Content
          description={job.description}
        />
        <Card.Content extra>
          Skills: {
            job.skills.map((skill, index) =>
              <Label size='tiny' key={index} color='green'>{skill.name}</Label>)
        }
        </Card.Content>
      </Card>
    );
  }
}

JobCard.propTypes = {
  job: PropTypes.object.isRequired,
  openModal: PropTypes.func,
};

export default JobCard;