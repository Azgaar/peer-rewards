import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    margin: theme.spacing(0, 0, 1, 3),
  },
  sectionTitle: {
    fontWeight: 'bold',
    padding: theme.spacing(1),
  },
  sectionValue: {
    fontSize: '20px',
  },
}));

export default useStyles;
