import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import { Button, Container, Grid, TextField } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useUser } from '../../providers/AuthProvider';
import { CURRENCY } from '../../../config';
import { fetchJSON, getFullName } from '../../../utils';
import { IReward, IRewardForm, IUser } from '../../../types';
import useStyles from '../Dialog.style';

const AddReward = ({ closeDialog }: { closeDialog: () => void }): JSX.Element => {
  const from = useUser();
  const [users, setUsers] = useState([] as IUser[]);
  const usersOptions = users.filter((user) => user.email !== from.email);
  const classes = useStyles();

  useEffect(() => {
    fetchJSON('/mockups/users.json', (json) => setUsers(json));
  }, []);

  const onSubmit = (values: IRewardForm) => {
    const { to, reward, message } = values;
    if (!to) return;

    const id = 999;
    const datetime = new Date().toISOString();
    const newReward: IReward = { id, from, to, reward, datetime, message };
    console.log(newReward);
    closeDialog();
  };

  const handleAutocompleteChange = (event: object, value: IUser | null) => {
    setFieldValue('to', value);
  };

  const initialValues = { to: null, reward: 0, message: '' };
  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  const { values, touched, errors, handleChange, handleSubmit, setFieldValue, isValid } = formik;

  return (
    <Dialog open onClose={closeDialog} aria-labelledby="add-reward-dialog">
      <Container maxWidth="xs" className={classes.container}>
        <DialogTitle>Reward a person</DialogTitle>
        <DialogContent>
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Autocomplete
                  id="to"
                  fullWidth
                  options={usersOptions}
                  getOptionLabel={(user) => getFullName(user)}
                  value={values.to}
                  onChange={handleAutocompleteChange}
                  renderInput={(params) => (
                    <TextField
                      variant="outlined"
                      label="Person"
                      placeholder="Person to reward"
                      name="to"
                      {...params}
                      required
                      error={touched.to && Boolean(errors.to)}
                      helperText={touched.to && errors.to}
                    />
                  )}
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
                  value={values.reward}
                  onChange={handleChange}
                  error={touched.reward && Boolean(errors.reward)}
                  helperText={touched.reward && errors.reward}
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
                  value={values.message}
                  onChange={handleChange}
                  error={touched.message && Boolean(errors.message)}
                  helperText={touched.message && errors.message}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2} className={classes.buttons}>
              <Grid item xs={12} sm={6}>
                <Button onClick={closeDialog} fullWidth variant="contained" color="secondary">
                  Cancel
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={!isValid}
                >
                  Reward
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
      </Container>
    </Dialog>
  );
};
export default AddReward;
