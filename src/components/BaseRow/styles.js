// Dependencies
import { StyleSheet } from 'react-native';

/**
 * @file styles.js
 * @author Daniel Mejia.
 * @description Styles definition for component.
 */
const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    paddingHorizontal: 16,
    minHeight: 50,
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLeft: {
    paddingRight: 15,
  },
  text: {
    flex: 6,
    flexDirection: 'row',
    fontSize: 15,
    color: 'black',
  },
  rightContent: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default styles;
