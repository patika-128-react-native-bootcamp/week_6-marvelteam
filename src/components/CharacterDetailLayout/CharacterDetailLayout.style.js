import {StyleSheet, Dimensions} from 'react-native';
import fontSize from '../../styles/fontSize';
import spacing from '../../styles/spacing';
import colors from '../../styles/colors';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryTransparentExtraLight
  },
  inner_container: {   
    alignItems: 'center',
    resizeMode: 'contain',
  },
  thumbnail: {
    width: width,
    height: height / 1.6,
    resizeMode: 'stretch',
  },
  title: {
    color: colors.primary,
    padding: spacing.small,
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: fontSize.large,
    textAlign: 'left',
  },
  description: {
    color: colors.primaryLight,
    padding: spacing.large,
    alignSelf: 'flex-start',
    fontSize: fontSize.normal,
    textAlign: 'left',
  },
});
