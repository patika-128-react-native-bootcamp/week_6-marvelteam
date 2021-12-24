import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import radius from '../../styles/radius';
import spacing from '../../styles/spacing';

export default StyleSheet.create({
  container: {
    paddingLeft: spacing.normal,
    borderColor: colors.primary,
    borderWidth: 0.7,
    borderRadius: radius.middle,
    height: 40,
    marginVertical: spacing.normal,
    marginHorizontal: spacing.normal,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
});
