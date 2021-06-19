import React from 'react';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from '@material-ui/core';
import { useUser } from '../../providers/AuthProvider';
import { IReward } from '../../../types';
import useStyles from '../Dialog.style';
import { CURRENCY } from '../../../config';

type AddRewardProps = {
  open: boolean;
  closeDialog: () => void;
};

const AddReward = ({ open, closeDialog }: AddRewardProps): JSX.Element => {
  const user = useUser();
  const classes = useStyles();

  const onSubmit = (values: IReward) => {
    console.log(values);
    formik.resetForm();
    closeDialog();
  };

  const initialValues = {
    id: 0,
    from: user,
    to: null,
    reward: 0,
    datetime: null,
    message: '',
  } as unknown as IReward;

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <Dialog open={open} onClose={closeDialog} aria-labelledby="add-reward-dialog">
      <Container maxWidth="xs">
        <DialogTitle>Reward a person</DialogTitle>
        <DialogContent>
          <form noValidate onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Person"
                  placeholder="Person to reward"
                  id="to"
                  name="to"
                  autoFocus
                  value={formik.values.to}
                  onChange={formik.handleChange}
                  error={formik.touched.to && Boolean(formik.errors.to)}
                  helperText={formik.touched.to && formik.errors.to}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Reward"
                  placeholder={'Reward amount, ' + CURRENCY}
                  id="reward"
                  name="reward"
                  type="number"
                  InputProps={{ inputProps: { min: 0 } }}
                  value={formik.values.reward}
                  onChange={formik.handleChange}
                  error={formik.touched.reward && Boolean(formik.errors.reward)}
                  helperText={formik.touched.reward && formik.errors.reward}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Message"
                  placeholder="Why person is rewarded"
                  id="message"
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={formik.touched.message && Boolean(formik.errors.message)}
                  helperText={formik.touched.message && formik.errors.message}
                />
              </Grid>
            </Grid>

            <Box mt={1} mb={2}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Button fullWidth variant="contained" color="primary">
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button type="submit" fullWidth variant="contained" color="primary">
                    Reward
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </form>
        </DialogContent>
      </Container>
    </Dialog>
  );
};
export default AddReward;
