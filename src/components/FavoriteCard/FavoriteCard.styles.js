import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: height / 1.7,
    resizeMode: 'cover',
    justifyContent: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    borderLeftWidth: 8,
    borderColor: colors.primary,
    borderBottomWidth: 7,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.transparentLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    position: 'absolute',
    right: 10,
    top: 10,
    height: 40,
    width: 40,
  }
});
export default styles;
