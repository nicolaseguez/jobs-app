import React from 'react';
import axios from 'axios';

import {JobForm} from './JobForm';
import {JobList} from './JobList';
import {JobModal} from './JobModal';

export const Jobs = () => {
  const [jobs, setJobs] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [firstSearch, setFirstSearch] = React.useState(true);
  const [selectedJob, setSelectedJob] = React.useState(null);

  const handleViewMore = React.useCallback((job) => {
    setOpen(true);
    setSelectedJob(job);
  })

  const handleSubmit = React.useCallback(async (params) => {
    setLoading(true)
    
    if (firstSearch) {
      setFirstSearch(false);
    }

    try {
      const response = await axios.get(process.env.REACT_APP_ENDPOINT, {params});

      setJobs(response.data.data || []);
      setLoading(false);
    } catch {
      setJobs([]);
      setLoading(false);
    }
  });

  const handleClose = () => {
    setOpen(false);
    setSelectedJob(null);
  }

  let message = "Nothing Found";
  if (firstSearch) {
    message = "Complete the form to find Job Offers!"
  }

  return (
    <div>
      <JobForm onSubmit={handleSubmit} />
      <JobList jobs={jobs} loading={loading} onViewMore={handleViewMore} msg={message}/>
      <JobModal open={open} job={selectedJob} onClose={handleClose}/>
    </div>
  )
}