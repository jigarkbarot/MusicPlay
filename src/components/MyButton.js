import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../theme/colors';

const MyButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonView}>
      <Text style={styles.txtButton}>{props.buttonText}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: colors.white,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 8
  },
  txtButton: {
    marginVertical: 5,
    marginHorizontal: 30,
  },
});
