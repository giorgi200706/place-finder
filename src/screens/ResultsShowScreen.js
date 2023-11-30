import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.miniText}>{result.rating} Stars, {result.review_count} Reviews</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    borderRadius: 8,
    marginBottom: 12,
  },
  container: {
    marginTop: 35,
    paddingVertical: 10,
    height: '100%',
    alignItems: 'center',
    backgroundColor: "#F5F5F5",
  },
  name:{
    color: '#CC5500',
    marginTop: 15,
    fontSize: 24,
    fontWeight: '500',
  },
  miniText: {
    marginBottom: 15,
    color: '#4B4B4B',
    fontWeight: '500',
  }
});

export default ResultsShowScreen;
