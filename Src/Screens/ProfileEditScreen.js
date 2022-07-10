import React, {useState} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import {
  Avatar,
  IconButton,
  TextInput,
  RadioButton,
  Button,
} from 'react-native-paper';
import {theme} from '../Core/theme';
import DatePicker from 'react-native-date-picker';
import {nameValidator} from '../Core/helpers/nameValidator';
import {emailValidator} from '../Core/helpers/emailValidator';
import {phoneNumberValidator} from '../Core/helpers/phoneNumberValidator';

export default function ProfileEditScreen({navigation}) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [fDate, setFDate] = useState('');
  const [checked, setChecked] = React.useState('male');

  const [name, setName] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [phoneNumber, setPhoneNumber] = useState({value: '', error: ''});

  const onConfirm = selectedDate => {
    setOpen(false);
    const currentDate = selectedDate || date;
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      '/' +
      (tempDate.getMonth() + 1) +
      '/' +
      tempDate.getFullYear();
    setFDate(fDate);
    console.log(fDate);
  };
  const onSave = () => {
    const nameError = nameValidator(name.value);
    if (nameError) {
      setName({...name, error: nameError});
      return;
    }

    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({...email, error: emailError});
      return;
    }

    const phoneNumberError = phoneNumberValidator(phoneNumber.value);
    if (phoneNumberError) {
      setPhoneNumber({...phoneNumber, error: phoneNumberError});
      return;
    }
    if (checked === '') {
      return;
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{paddingHorizontal: 5}}>
        <View style={{alignItems: 'center', marginTop: 20}}>
          <Avatar.Image
            source={require('../Assets/profileImage.png')}
            size={150}
          />
          <IconButton
            icon="camera"
            size={40}
            color={theme.colors.medium}
            style={{marginTop: -50, marginLeft: 100}}
            onPress={() => {
              console.log('Upload Image');
            }}
            animated={true}
          />
        </View>
        <View style={{marginHorizontal: 10}}>
          <TextInput
            label="User Name"
            // mode="outlined"
            underlineColor={theme.colors.medium}
            backgroundColor={theme.colors.white}
            activeOutlineColor={theme.colors.medium}
            value={name.value}
            onChangeText={text => setName({value: text, error: ''})}
            error={!!name.error}
            style={Styles.textInput}
          />
          {name.error ? <Text style={Styles.Error}>{name.error}</Text> : null}
          <TextInput
            label="Email"
            underlineColor={theme.colors.medium}
            backgroundColor={theme.colors.white}
            style={Styles.textInput}
            activeOutlineColor={theme.colors.medium}
            keyboardType="email-address"
            value={email.value}
            onChangeText={text => setEmail({value: text, error: ''})}
            error={!!email.error}
          />
          {email.error ? <Text style={Styles.Error}>{email.error}</Text> : null}
          <TextInput
            label="Mobile Number"
            underlineColor={theme.colors.medium}
            backgroundColor={theme.colors.white}
            style={Styles.textInput}
            activeOutlineColor={theme.colors.medium}
            keyboardType="phone-pad"
            value={phoneNumber.value}
            onChangeText={text => setPhoneNumber({value: text, error: ''})}
            error={!!phoneNumber.error}
          />
          {phoneNumber.error ? (
            <Text style={Styles.Error}>{phoneNumber.error}</Text>
          ) : null}
          <View style={{flexDirection: 'row'}}>
            <Text style={{marginTop: 13, marginLeft: 12, fontSize: 16}}>
              Birthday
            </Text>
            <IconButton
              icon="calendar"
              size={27}
              onPress={() => setOpen(true)}
            />
          </View>

          <DatePicker
            modal={true}
            mode="date"
            open={open}
            date={date}
            maximumDate={new Date(Date.now() - 86400000)}
            onConfirm={onConfirm}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <Text
            style={{
              color: 'black',
              marginLeft: 12,
              fontSize: 17,
            }}>
            {fDate}
          </Text>

          <View style={Styles.gender}>
            <Text style={Styles.text}>Gender</Text>
            <View style={{flexDirection: 'row', marginLeft: 10}}>
              <RadioButton
                value="male"
                status={checked === 'male' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('male')}
              />
              <Text style={{marginTop: 8, color: 'black'}}>Male</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 10}}>
              <RadioButton
                value="female"
                status={checked === 'female' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('female')}
              />
              <Text style={{marginTop: 8, color: 'black'}}>Female</Text>
            </View>
          </View>
          <View style={{alignItems: 'flex-end', marginRight: 10}}>
            <Button
              mode="contained"
              style={{
                width: '30%',
              }}
              onPress={onSave}>
              SAVE
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const Styles = {
  textInput: {
    marginBottom: 20,
  },
  gender: {},
  text: {
    marginLeft: 12,
    fontSize: 17,
    marginBottom: 10,
    marginTop: 20,
  },
  Error: {
    color: 'red',
    marginTop: -18,
    marginLeft: 10,
  },
};
