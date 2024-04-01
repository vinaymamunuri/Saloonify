import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList,TouchableOpacity, Image, Dimensions , SafeAreaView} from 'react-native';
import React, { useState} from 'react';

export default function HomeScreen({ navigation, route }) {

  const [data, setData] = useState([{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Date : 01-04-2024 08:00 AM',
    status: 'Available'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Date : 01-04-2024 10:00 AM',
    status: 'Available'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Date : 01-04-2024 03:00 PM',
    status: 'Available'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Date : 01-04-2024 05:00 PM',
    status: 'Available'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Date : 02-04-2024 07:00 AM',
    status: 'Available'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Date : 02-04-2024 10:00 AM',
    status: 'Available'
  },
  ]);

  const unsubscribe = navigation.addListener('focus', () => {
    setData(route.params?.data ? route.params?.data : data)
  });

  const Item = ({ item }) => (
    <View style={styles.item}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>Status : </Text>

          <Text style={{ color: item.status == "Available" ? 'green' : 'red', fontWeight: '700' }}>{item.status}</Text>
        </View>
      </View>
      <TouchableOpacity disabled={item.status === "Available" ? false : true} style={{ paddingVertical: 5, paddingHorizontal: 10, backgroundColor: item.status === "Available" ? "green" : '#ddd', borderRadius: 5 }} onPress={() => { navigation.navigate('Registration', { id: item.id, data }) }}>
        <Text style={{ color: "white" }}>Select</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor='#262626' />
      <Image style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height / 2 - 260, }} source={require('../Images/banner.jpg')} resizeMode='stretch' />
      <View style={{ backgroundColor: '#ddd', bottom: 36, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
        <Text style={{ color: "black", fontSize: 16, marginLeft: 20, marginTop: 30, fontWeight: "500" }}>Select Your Availiability Time :</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={item => item.id}
        style={{ bottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  item: {
    backgroundColor: '#262626',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10
  },
  title: {
    fontSize: 14,
    color: "white"
  },
});
