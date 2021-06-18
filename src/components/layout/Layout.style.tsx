import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(4),
    fontSize: theme.spacing(2),
    border: '1px solid red',
  },
  main: {
    borderTop: '2px solid #00000050',
    backgroundColor: '#00000010',
  },
}));

export default useStyles;
