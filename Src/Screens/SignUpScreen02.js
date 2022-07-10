import * as React from 'react';
import * as yup from 'yup';
import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../Core/theme';
import {Button, TextInput} from 'react-native-paper';
import {Formik} from 'formik';
import {AuthContext} from '../Core/Utils';

let signUpSecondSchema = yup.object().shape({
  password: yup
    .string()
    .min(8, ({min}) => 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .min(8)
    .when('password', {
      is: val => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref('password')], 'Both passwords need to be the same'),
    })
    .required('Confirm Password Required'),
});

function SignUpScreenTwo({navigation}) {
  const [showPassword, setShowPassword] = React.useState(true);
  const [showConfirmPassword, setShowCinfirmPassword] = React.useState(true);

  const {signUp} = React.useContext(AuthContext);
  return (
    <Formik
      initialValues={{email: '', firstName: '', lastName: '', dob: ''}}
      validateOnMount={true}
      onSubmit={values => {
        console.log(values);
        signUp();
      }}
      validationSchema={signUpSecondSchema}>
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
          <View
            style={{
              width: '90%',
              marginTop: '20%',
              justifyContent: 'flex-end',
            }}>
            <TextInput
              mode="outlined"
              label="Password"
              secureTextEntry={showPassword}
              right={
                <TextInput.Icon
                  name={showPassword ? 'eye' : 'eye-off'}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              outlineColor={theme.colors.primary}
              style={Styles.input}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password && (
              <Text style={Styles.error}>{errors.password}</Text>
            )}
            <TextInput
              mode="outlined"
              label="Confirm Password"
              outlineColor={theme.colors.primary}
              secureTextEntry={showConfirmPassword}
              right={
                <TextInput.Icon
                  name={showConfirmPassword ? 'eye' : 'eye-off'}
                  onPress={() => setShowCinfirmPassword(!showConfirmPassword)}
                />
              }
              style={Styles.input}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={Styles.error}>{errors.confirmPassword}</Text>
            )}
          </View>
          <Button
            style={Styles.Button}
            mode="contained"
            uppercase={false}
            disabled={!isValid}
            labelStyle={Styles.labelStyle}
            onPress={handleSubmit}>
            Sign Up
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

export default SignUpScreenTwo;
