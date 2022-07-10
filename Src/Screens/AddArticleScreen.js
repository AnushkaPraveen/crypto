import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { theme } from '../Core/theme';
import { AutoGrowingTextInput } from 'react-native-autogrow-textinput';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';

import storage from '@react-native-firebase/storage';



function AddArticleScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUri, setimageUri] = useState('')

  /* const openGallery = () => {
    const options = {
      storageOptions: {
        path: 'images',
        mediaType: 'photo',
      },
      includebase64: true,
    }

    launchImageLibrary(options, response => {
      console.log('Response = '.response);
      const source = { uri: 'data:image/jpeg;base64' + response.base64 };
      console.log(source);
     // setimageUri(source)
    })

  } */
  

  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      console.log(response);
      if (response) {
        console.log(response.assets[0].uri);
        setimageUri(response.assets[0].uri);
    
        //handleImageUpload(source)
      }
    });
    
  };


  const handleImageUpload = async(photo) => {
    console.log("test",photo)
      // const imageFile = {
      //   uri: imageUri,
      //   type: `test/${imageUri.split(".")[1]}`,
      //   name: `test.${imageUri.split(".")[1]}`,
      // };

      const formData = new FormData();
      formData.append("file",source);
      formData.append("upload_preset", "ml_default");
      formData.append("cloud_name", "vijitha-mahesh");

      await axios.post(
        "https://api.cloudinary.com/v1_1/vijitha-mahesh/auto/upload",
        formData
      ).then((reponse) => {console.log(reponse);
        // const lk = reponse["data"]["secure_url"];
        // console.log(lk);
        // onSubmit({ productData, lk });
      })
      .catch((err)=>{console.log(err.response)})
   
    // console.log("response",imageUri.assets[0].fileName);

    // if (imageUri) {
    //     console.log("file name-",imageUri.assets[0].fileName);
    //     const uploadTask = storage.ref(`${imageUri.assets[0].uri}`)
    //     const pathToFile = `${imageUri.assets[0].uri}`;
    //     uploadTask.putFile(pathToFile);
        /* uploadTask.on(
            (error) => {
                console.log(error);
            },
            () => {
                storage
                    .ref('images')
                    .child(imageUri.assets.fileName)
                    .getDownloadURL()
                    .then((url) => {
                        setUrl(url);
                    });
            }
        ); */
    // }
    // console.log('URL :' + url);
};


  function publishPressed() {

    console.log(title, content);
    const data = {
      userId: 3,
      title: title,
      description: content,
    }
    console.log(data)


    axios.post('https://crypto-ts6.conveyor.cloud/api/Blog/createBlogPost', data)
      .then(res => {
        console.log('response', res.data)
      })
      .catch(error => {
        console.log('error', error.response);
      })

  }
  return (
    <View style={Styles.container}>
      <View style={{ width: '98%', height: '70%', marginTop: 20 }}>
        <TextInput
          label="Article Title"
          underlineColor={theme.colors.primary}
          backgroundColor={theme.colors.white}
          // value={text}
          onChangeText={text => setTitle(text)}
        />
        <AutoGrowingTextInput
          style={Styles.textInput}
          placeholder={'Your content goes here'}
          onChangeText={text => setContent(text)}
        />
      </View>
      <View style={{ width: '100%', alignItems: 'center' }}>
        {/* <Button
          style={Styles.imageButton}
          mode="outlined"
          uppercase={false}
          labelStyle={Styles.labelStyle}
        // onPress={publishPressed}
        >
          Insert Image +
        </Button> */}

        <Button
          style={Styles.imageButton}
          mode="outlined"
          uppercase={false}
          labelStyle={Styles.labelStyle}
        onPress={handleChoosePhoto}
        >
          Insert Image +
        </Button>
        {/* <Image
        source={imageUri}
        style={{
          height: 100,
          width: 100,
        }}/> */}
        {imageUri?<Image style={{width:100,height:100}} source={{
          uri:imageUri
        }}/>:null}
        <Button
          style={Styles.publishButton}
          mode="outlined"
          uppercase={false}
          labelStyle={Styles.publishButtonlabelStyle}
          onPress={publishPressed}
        >
          Publish Article
        </Button>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: theme.colors.white,
    // justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '75%',
    marginTop: '90%',
  },
  imageButton: {
    marginTop: '1%',
    height: 70,
    width: '98%',
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.primary,
    borderWidth: 1.5,
    borderStyle: 'dashed',
  },
  labelStyle: {
    fontSize: 15,
    marginTop: 24,
    color: theme.colors.medium,
  },
  publishButton: {
    marginTop: '10%',
    marginBottom: '-15%',
    width: '70%',
    alignSelf: 'center',
    backgroundColor: theme.colors.primary,
  },
  publishButtonlabelStyle: {
    color: theme.colors.white,
  },
  textInput: {
    paddingLeft: 10,
    width: '100%',
    height: '50%',
    fontSize: 17,
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 4,
  },
});

export default AddArticleScreen;
