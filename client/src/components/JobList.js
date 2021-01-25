import React from 'react';
import {List, CircularProgress} from '@material-ui/core';

import { JobItem } from './JobItem';

export const JobList = ({jobs, loading, onViewMore, msg}) => {
  let node;

  if (loading) {
    node = <div>
      <CircularProgress />
    </div>
  }

  if (!loading && jobs.length === 0) {
    node = <h3>{msg}</h3>
  }
  
  if (!loading && jobs.length > 0){
    node = <List>
      {
        jobs.map(job => <JobItem key={job.id} job={job} onViewMore={onViewMore} />)
      }
    </List>
  }

  return (
    <div>
      <h2>Results</h2>
      {node}
    </div>
  )
}