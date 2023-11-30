import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <View style={styles.miniCon}>
        <Text style={styles.name}>{result.name}</Text>
        <Text style={styles.rating}>
          {result.rating} Stars, {result.review_count} Reviews
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    marginRight: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 6,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  rating: {
    fontSize: 12,
  },
  miniCon: {
    marginLeft: 8,
    marginBottom: 8,
  }
});

export default ResultsDetail;
