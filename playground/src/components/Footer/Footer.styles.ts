import { Styles } from 'jss';

import { theme } from '../../theme';

const styles: Styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    borderTop: `1px solid ${theme.color.border}`,
    padding: [4, 10],
    color: theme.color.content,
    fontSize: 12,
    fontFamily: theme.typography.content,
    backgroundColor: theme.color.section,
    userSelect: 'none',
    '& a': {
      color: theme.color.content,
      textDecoration: 'none',
      transition: 'color 150ms ease-out',

      '&:hover, &:focus': {
        color: theme.color.active
      }
    },
    '& a + a': {
      marginLeft: 10
    },

    [`@media (min-width: ${theme.breakpoints.tablet}px)`]: {
      fontSize: 14
    }
  }
};

export { styles };
