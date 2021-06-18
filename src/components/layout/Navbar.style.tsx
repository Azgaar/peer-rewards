import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  navbar: {
    padding: theme.spacing(2, 6, 0),
    '& a': {
      textDecoration: 'none',
      margin: theme.spacing(0.4, 2),
      display: 'inline-block',
    },
    '& a:visited': {
      color: theme.palette.text.primary,
    },
    '& a.active': {
      color: theme.palette.primary.main,
      borderBottom: '3px solid ' + theme.palette.primary.main,
      paddingBottom: theme.spacing(1),
    },
  },
}));

export default useStyles;
