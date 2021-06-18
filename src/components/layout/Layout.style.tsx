import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(4),
  },
  main: {
    margin: 0,
    borderTop: '1px solid #00000030',
    backgroundColor: '#00000005',
  },
}));

export default useStyles;
