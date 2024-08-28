import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {
  // const [Suma, setSuma] = useState(0);
  // //Funcion para sumar
  // const sumaCuenta = () => {
  //   setSuma(Suma + 1);
  // };
  // const restaCuenta = () => {
  //   setSuma(Suma - 1);
  // };
  const [Data, setData] = useState([]);
  const web = 'https://jsonplaceholder.typicode.com';
  const getAPi = () => {
    fetch(`${web}/todos`)
      .then((response) => response.json())
      .then((dataApi) => setData(dataApi))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      {/* <Button onPress={sumaCuenta} title='+1'></Button>
      <Button onPress={restaCuenta} title='-1'></Button> */}
      <Button onPress={getAPi} title='traer API'></Button>
      <view style={styles.conteinerDataApi}>
        {Data.map((item) => (
          <View style={styles.containerBooks}>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
          </View>
        ))}
      </view>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conteinerDataApi: {
    flex: 1,
    backgroundColor: '#fff',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  containerBooks: {
    width: 100,
    heigth: 100,
    backgroundColor: 'violet',
    marginBottom: 50,
  },
});
