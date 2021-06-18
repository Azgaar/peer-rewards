import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginTop: -theme.spacing(2),
  },
  fullName: {
    width: theme.spacing(12),
    textAlign: 'center',
  },
}));

export default useStyles;
