import React from 'react';
import {ListItem, ListItemText, ListItemSecondaryAction, Button, Divider} from '@material-ui/core';

export const JobItem = ({job, onViewMore}) => {
  const date = new Intl.DateTimeFormat('en-US', new Date(job.created_at)).format();
  const primary = `${job.title} at ${job.company}`;
  const secondary = `${job.location} - ${date}`
  return (
    <>
      <ListItem>
        <ListItemText primary={primary} secondary={secondary}></ListItemText>
        <ListItemSecondaryAction>
          <Button color="primary" variant="outlined" onClick={() => onViewMore(job)}>View More</Button>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
} 