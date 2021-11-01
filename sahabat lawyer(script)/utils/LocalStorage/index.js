import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    //Set Error
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return JSON.parse(value);
    }
  } catch (error) {
    //set Error
  }
};

export const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    //Set Error
  }
};
