// EditProfile.js
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import strings from '../../constants/languages';
import NavigationsStrings from '../../constants/NavigationsStrings';
import RoundImage from '../../ReusableComponents/RoundImage';
import { moderateScale } from '../../constants/Responsivedesign';
import ImagePicker from 'react-native-image-crop-picker';
import { androidCameraPermission } from '../../constants/Permissions';
import { useNavigation } from '@react-navigation/native';
import { signup } from '../../ReduxPart/action/ActionAuth';

export default function EditProfile() {
  const [state, setState] = useState({
    image: "",
    name: ""
  });
  const navigation = useNavigation();

  const doneButton = async () => {
    let apiData = {
      ...state
    };
    try {
      const res = await signup(apiData);
      if (!!res?.data) {
        navigation.navigate(NavigationsStrings.TABROUTES, { data: { ...state } });
      }
    } catch (error) {
      console.log(error);
    }
    console.log(apiData, "api-data");
    return;
  };

  const addPicture = async () => {
    const permissions = await androidCameraPermission();
    if (permissions) {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
        setState(prevState => ({ ...prevState, image: image.path }));
      });
    }
  };

  const { image, name } = state;

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Complete your Profile!</Text>
          <TouchableOpacity style={styles.doneButton} onPress={doneButton}>
            <Text style={styles.doneText}>{strings.DONE}</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <RoundImage onPress={addPicture} image={image} size={100} />
          <Text style={{
            fontSize: 18,
            alignSelf: "center",
            fontWeight: "bold",
            color: "black",
            paddingHorizontal: moderateScale(20)
          }}>
            Add your WOW! picture here
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  doneButton: {
    marginTop: 4,
  },
  doneText: {
    color: '#cdd6c3',
    fontSize: 19,
    fontWeight: 'bold',
  },
});
