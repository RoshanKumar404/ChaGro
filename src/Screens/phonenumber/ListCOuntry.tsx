import { StyleSheet, Text, Button, View, TouchableOpacity, FlatList, TextInput } from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Modal from 'react-native-modal';
import { SafeAreaView } from 'react-native-safe-area-context';
import Countrylist from './Countrylist.tsx'; 
import PhoneNumber from './PhoneNumber.tsx';

export default function ListCountry({setphonenumber}) {
    const [listVisible, setListVisible] = useState(false);
    const [data, setData] = useState(Countrylist);
    const [selectedCountry, setSelectedCountry] = useState('tap the arrow to select your coutry')
    const [selectedcountrydialcode, setselectedcountrydialcode] = useState('  ')

    function countryModal() {
        setListVisible(!listVisible);
    }

    const selectcountry = (country) => {
        setSelectedCountry(country.name)
        setselectedcountrydialcode(country.dialCode)
        setListVisible(false)
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.CountryList}>
                <TouchableOpacity onPress={() => selectcountry(item)}>
                    <Text style={styles.countrtylistdata}>{item.name} ({item.dialCode})</Text>
                </TouchableOpacity>
            </View>
        );
    };

    const onViewableItemsChanged = ({ viewableItems, changed }) => {
        viewableItems.forEach(viewableItem => {
            console.log(viewableItem.item.name); // Log the viewable item
        });
    };

    const viewabilityConfig = {
        itemVisiblePercentThreshold: 30 // Percentage of item visibility required to consider it as viewable
    };

    return (
        <>
            <View style={styles.countryContainer}>
                <Text style={styles.countryText}>{selectedCountry}</Text>
                <TouchableOpacity onPress={countryModal}>
                    <MaterialCommunityIcons name="arrow-right" color="black" size={24} />
                </TouchableOpacity>
            </View>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Modal style={{ backgroundColor: "#fefefe", margin: 0 }} isVisible={listVisible}>
                        <View style={{ flex: 1 }}>
                            <View style={styles.headerContainer}>
                                <Text style={styles.header}>
                                    Select your Country with country code
                                </Text>
                                {/* <TouchableOpacity style={styles.doneButton} onPress={() => navigation.navigate(NavigationsStrings.OTPVERIFICATION)}>
                                    <Text style={styles.doneText}>{strings.DONE}</Text>
                                </TouchableOpacity> */}
                            </View>
                            <FlatList
                                data={data}
                                renderItem={renderItem}
                                keyExtractor={item => item.isoCode}
                                onViewableItemsChanged={onViewableItemsChanged}
                                viewabilityConfig={viewabilityConfig}
                            />
                            {/* <Button title="Hide modal" onPress={countryModal} /> */}
                        </View>
                    </Modal>
                    <View style={{ marginVertical: 10, flexDirection: "row", justifyContent: "space-evenly" }} >
                        <TextInput
                            placeholder='dial'
                            style={{ marginHorizontal: 10, color: "#49ace9", borderBottomColor: "black", borderBottomWidth: 1, width: "20%" }}
                            value={selectedcountrydialcode}
                            editable={false}
                        />
                        <TextInput
                            placeholder='enter your phone number'
                            style={{ borderBottomWidth: 1, borderBottomColor: "black", color: "black", width: "80%" }}
                            onChangeText={text=>setphonenumber(text)}
                            keyboardType='phone-pad'
                        />
                    </View>
                </View>

            </SafeAreaView>

            <TextInput />
        </>
    );
}

const styles = StyleSheet.create({
    countryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.8,
        paddingVertical: 10,
    },
    countryText: {
        fontSize: 16,
        color: '#49ace9',
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
        marginTop: 10,
    },
    doneButton: {
        marginTop: 4,
    },
    doneText: {
        color: '#cdd6c3',
        fontSize: 19,
        fontWeight: 'bold',
    },
    CountryList: {

        borderBottomWidth: 1.2,
        borderBottomColor: "black",


    },
    countrtylistdata: {
        fontSize: 16,
        color: "black",
        margin: 10,
    }
});
