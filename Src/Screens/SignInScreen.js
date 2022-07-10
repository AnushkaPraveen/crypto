import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';
import {theme} from '../Core/theme';
import {AuthContext} from '../Core/Utils';
import * as yup from 'yup';
import {Formik} from 'formik';

let loginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, ({min}) => 'Password must be at least 8 characters')
    .required('Password is required'),
});

function SignInScreen({navigation}) {
  const [showPassword, setShowPassword] = React.useState(true);
  const {signIn} = React.useContext(AuthContext);

  return (
    <Formik
      initialValues={{email: '', password: ''}}
      validateOnMount={true}
      onSubmit={values => {
        console.log(values);
        signIn();
      }}
      validationSchema={loginSchema}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
        <View
          style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
          <View style={{marginTop: '35%'}}>
            <Text style={Styles.title}>ATeam</Text>
            <Text style={Styles.title}>Software</Text>
          </View>
          <View style={{width: '90%', marginTop: '43%'}}>
            <TextInput
              mode="outlined"
              style={Styles.input}
              label="email"
              right={<TextInput.Icon name="email" />}
              outlineColor={theme.colors.primary}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              // error={touched.email && errors.email}
            />
            {touched.email && errors.email && (
              <Text style={Styles.error}>{errors.email}</Text>
            )}
            <TextInput
              mode="outlined"
              label="Password"
              secureTextEntry={showPassword}
              right={
                <TextInput.Icon
                  name={showPassword ? 'eye-off' : 'eye'}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              style={Styles.input}
              outlineColor={theme.colors.primary}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              // error={touched.password && errors.password}
            />
            {touched.password && errors.password && (
              <Text style={Styles.error}>{errors.password}</Text>
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
            Sign In
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
    // justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    width: '90%',
    height: 45,
    marginTop: 8,
    alignSelf: 'center',
    borderColor: theme.colors.primary,
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '75%',
    alignSelf: 'center',
  },
  Button: {
    marginTop: 20,
    height: 46,
    width: '60%',
  },
  labelStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    marginTop: 12,
    color: theme.colors.white,
  },
  error: {
    color: theme.colors.error,
    fontSize: 12,
    marginTop: 2,
    alignSelf: 'center',
  },
});

export default SignInScreen;
