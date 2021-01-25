import React from 'react';
import { 
  Dialog, 
  DialogTitle, 
  DialogActions, 
  DialogContent, 
  IconButton, 
  makeStyles, 
  createStyles 
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) =>
  createStyles({
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    }
  })
)

export const JobModal = ({open, job, onClose}) => {
  const classes = useStyles();

  if (job == null) return <></>;

  return (
    <Dialog open={open} handleClose={onClose}>
      <DialogTitle>
        {job.title}
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dangerouslySetInnerHTML={{__html: job.description}}></DialogContent>
      <DialogActions dangerouslySetInnerHTML={{__html: job.how_to_apply}}></DialogActions>
    </Dialog>
  )
}