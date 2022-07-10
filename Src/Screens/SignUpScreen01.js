import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../Core/theme';
import {TextInput, Button} from 'react-native-paper';
import * as yup from 'yup';
import {Formik} from 'formik';
import {AuthContext} from '../Core/Utils';

let signUpFirstSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  dob: yup.number('invalid date').required('Date of Birth is required'),
});

function SignUpScreen({navigation}) {
  return (
    <Formik
      initialValues={{email: '', firstName: '', lastName: '', dob: ''}}
      validateOnMount={true}
      onSubmit={values => {
        console.log(values);
        navigation.navigate('SignUpSecond');
      }}
      validationSchema={signUpFirstSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        isValid,
        touched,
        errors,
      }) => (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{marginBottom: '45%'}}>
            <Text style={Styles.title}>ATeam</Text>
            <Text style={Styles.title}>Software</Text>
          </View>
          <View style={{width: '90%'}}>
            <View style={{flexDirection: 'row', width: '50%'}}>
              <TextInput
                mode="outlined"
                outlineColor={theme.colors.primary}
                style={Styles.firstNameInput}
                label="First Name"
                onChangeText={handleChange('firstName')}
                onBlur={handleBlur('firstName')}
                values={values.firstName}
              />
              <TextInput
                mode="outlined"
                outlineColor={theme.colors.primary}
                style={Styles.lastNameInput}
                label="Last Name"
                onChangeText={handleChange('lastName')}
                onBlur={handleBlur('lastName')}
                values={values.lastName}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginLeft: '7%',
              }}>
              {touched.firstName && errors.firstName && (
                <Text style={Styles.error}>{errors.firstName}</Text>
              )}
              {touched.lastName && errors.lastName && (
                <Text style={Styles.error}>{errors.lastName}</Text>
              )}
            </View>
            <TextInput
              mode="outlined"
              outlineColor={theme.colors.primary}
              style={Styles.input}
              right={<TextInput.Icon name="email" />}
              label="Email"
              keyBoardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              values={values.email}
            />
            {touched.email && errors.email && (
              <Text style={Styles.error}>{errors.email}</Text>
            )}
            <TextInput
              mode="outlined"
              outlineColor={theme.colors.primary}
              style={Styles.input}
              label="Date of Birth"
              right={<TextInput.Icon name="calendar" />}
              keyBoardType="numeric"
              onChangeText={handleChange('dob')}
              onBlur={handleBlur('dob')}
              values={values.dob}
            />
            {touched.dob && errors.dob && (
              <Text style={Styles.error}>{errors.dob}</Text>
            )}
          </View>
          <Button
            style={[
              Styles.Button,
              {
                backgroundColor: isValid
                  ? theme.colors.primary
                  : theme.colors.disabled,
              },
            ]}
            mode="contained"
            uppercase={false}
            disabled={!isValid}
            labelStyle={Styles.labelStyle}
            onPress={handleSubmit}>
            Next
          </Button>
        </View>
      )}
    </Formik>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    width: '90%',
    height: 43,
    alignSelf: 'center',
    marginTop: 15,
  },
  firstNameInput: {
    height: 43,
    width: '80%',
    marginLeft: 17,
  },
  lastNameInput: {
    height: 43,
    width: '100%',
    marginRight: 17,
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '75%',
    alignSelf: 'center',
  },
  Button: {
    marginTop: 20,
    height: 44,
    width: '60%',
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginTop: 10,
    color: theme.colors.white,
  },
  error: {
    color: theme.colors.error,
    fontSize: 12,
    marginTop: 2,
    alignSelf: 'center',
  },
});

export default SignUpScreen;
