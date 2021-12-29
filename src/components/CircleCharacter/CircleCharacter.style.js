import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';
import fontSize from '../../styles/fontSize';
import spacing from '../../styles/spacing';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding: spacing.tiny,
    marginHorizontal: spacing.normal,
    justifyContent: 'center',
    width: width * 0.27,
  },
  thumbnail: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: 100,
    backgroundColor: colors.primaryExtraLight
  },
  title_container: {
    justifyContent: 'center',
    height: 50,
    flexDirection: 'row',
    padding: spacing.tiny,
  },
  title: {
    fontSize: fontSize.normal,
    flexWrap: 'wrap',
    color: colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
