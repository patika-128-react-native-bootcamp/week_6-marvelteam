import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';
import fontSize from '../../styles/fontSize';
import spacing from '../../styles/spacing';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding: spacing.tiny,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.27,
  },
  thumbnail: {
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: 100,
    backgroundColor: colors.primaryExtraLight
  },
  title_container: {
    justifyContent: 'center',
    height: 50,
    padding: spacing.tiny,
  },
  title: {
    fontSize: fontSize.normal,
    flexWrap: 'wrap',
    color: colors.primaryLight,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
