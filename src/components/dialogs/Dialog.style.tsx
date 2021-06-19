import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(2, 1),
  },
  buttons: {
    marginTop: theme.spacing(1),
  },
}));

export default useStyles;
