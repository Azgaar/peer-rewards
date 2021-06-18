import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  navbar: {
    padding: theme.spacing(2, 6, 0),
    '& a': {
      fontWeight: 'bold',
      color: theme.palette.text.secondary,
      textDecoration: 'none',
      margin: theme.spacing(0.4, 2),
      display: 'inline-block',
      transition: '0.2s ease color',
    },
    '& a:visited': {
      color: theme.palette.text.primary,
    },
    '& a:hover': {
      color: theme.palette.text.primary,
    },
    '& a.active': {
      color: theme.palette.primary.main,
      borderBottom: '3px solid ' + theme.palette.primary.main,
      paddingBottom: theme.spacing(1),
    },
  },
  addButton: {
    backgroundColor: theme.palette.background.default,
    float: 'right',
    height: '56px',
    width: '56px',
    top: '9px',
  },
}));

export default useStyles;
