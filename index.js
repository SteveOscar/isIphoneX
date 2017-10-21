import { Dimensions, Platform } from 'react-native'
const { height, width } = Dimensions.get('window')

exports.isIphoneX = function() {
  const screenCheck = (height / width).toFixed(2) == 2.17
  const osCheck = Platform.OS === 'ios'
  return (screenCheck && osCheck)
}
