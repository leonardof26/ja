import React from 'react';
import { StyleSheet } from 'react-native'

import {
  Picker,
  TextInput
} from 'react-native'

import RadioForm from 'react-native-simple-radio-button';
import CheckBox from 'react-native-check-box';
import DatePicker from 'react-native-datepicker';
import FileInput from 'react-simple-file-input';
import { TextInputMask } from 'react-native-masked-text';
import { TextField } from 'react-native-material-textfield';

import { colors } from '@/styles';



const FormGroup = ({ type, options, mask, tintColor, textColor, baseColor, labelTextStyle, customStyles, ...props }) => {
  switch (type) {
    case 'select':
      return (
        <Picker {...props}>
          <Picker.Item label="Selecione um valor" value="" />
          {options.map(item => (
            <Picker.Item label={item.label} value={item.value} />
          ))}
        </Picker>
      )
    case 'radio':
      return (
        <RadioForm
          buttonColor={colors.primary}
          animation={true}
          {...props}
        />
      )
    case 'checkbox':
      return (
        <CheckBox {...props} />
      )
    case 'date':
      return (
        <DatePicker
          {...props}
          mode="date"
          placeholder="Selecione a data"
          format="DD/MM/YYY"
          confirmBtnText="Confirmar"
          cancelBtnText="Cancelar"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
          }}
        />
      )
    case 'file':
      return (
        <FileInput
          {...props}

        />
      )
    default:
      // if (mask) {
      //   return (tes
      //     <TextInputMask {...props} style={styles.input} />
      //   )
      // }

      return (
        <TextField
          {...props}
          lineWidth={2}
          baseColor={baseColor || "rgba(221,229,230,0.5)"}
          tintColor={tintColor || colors.secundary}
          labelFontSize={16}
          fontSize={18}
          labelTextStyle={labelTextStyle || { color: "rgba(221,229,230,0.5)" }}
          textColor={textColor || colors.light}
          containerStyle={{
            marginBottom: 20,
            ...customStyles
          }}
        />
      )
  }
}

export default FormGroup;


const styles = StyleSheet.create({
  input: {
    marginBottom: 20
  }
})