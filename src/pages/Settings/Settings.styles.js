import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontSize from '../../styles/fontSize';
import spacing from '../../styles/spacing';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.large,
    backgroundColor: colors.transparentLight
  },
  theme_container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: spacing.normal
  },
  text: {
      fontSize: fontSize.large,
      color: colors.primaryTextColor
  }
});
export default styles;
