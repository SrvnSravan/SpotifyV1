import React, { useState } from 'react'
import { View, Text } from 'react-native'
import DatePicker from 'react-native-date-picker'

const Datepicker = () => {
  const [date, setDate] = useState(new Date())

  return<DatePicker date={date} onDateChange={setDate} textColor='#ffffff'
  locale='us'
  mode='date'
  fadeToColor='none' 
  androidVariant='nativeAndroid'/>
}
export default Datepicker;