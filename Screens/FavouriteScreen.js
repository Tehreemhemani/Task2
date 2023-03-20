import React from 'react';
import { StyleSheet, Text, View, } from 'react-native'
import { SliderBox } from "react-native-image-slider-box"
import Header from '../Components/Header'




export default function FavouriteScreen() {




  const images = [
    // "https://source.unsplash.com/1024x768/?nature",
    // "https://source.unsplash.com/1024x768/?water",
    // "https://source.unsplash.com/1024x768/?girl",
    // "https://source.unsplash.com/1024x768/?tree", // Network image

    require('../Assets/ModelS.jpeg'),
    require('../Assets/Model3.jpeg'),
    require('../Assets/ModelX.jpeg'),
    require('../Assets/ModelY.jpeg'),// Local image

  ]





  return (
    <View style={styles.container}>

      <View>
        <Header />
      </View>



      <View>





        <SliderBox

          images={images}

          sliderBoxHeight={800}
          onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
          dotColor="#1b05ab"
          inactiveDotColor="red"//"#90A4AE"
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
          resizeMethod={'resize'}
          resizeMode={'cover'}
          paginationBoxStyle={{
            position: "absolute",
            top: -550,
            // padding: 0,
            // alignItems: "center",
            // alignSelf: "center",
            // justifyContent: "center",
            // paddingVertical: 20
          }}
          dotStyle={{
            width: 15,
            height: 15,
            borderRadius: 10,
            marginHorizontal: 0,
            padding: 0,
            margin: 10,
            backgroundColor: "rgba(128, 128, 128, 0.92)"
          }}
          ImageComponentStyle={{ borderRadius: 20, width: '100%', marginTop: -10 }}
          imageLoadingColor="#2196F3"
        />


        <Text style={styles.Text}>

          The model of a car is its design, in the context of the manufacturer's
          range or series of cars. Different models are distinguishable by technology,
          components, underpinnings, and/or style and appearance.
          A car's make is the brand of the vehicle,
          while the model refers to the name of a car
          product and sometimes a range of products.
          For example, Toyota is a car make and Camry is a car model.
          The make, model, model year,
          body style and trim level all have
          implications on the cost of a vehicle and its insurance rates.
        </Text>













      </View>
    </View>



  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  Text: {
    position: 'absolute',
    zIndex: 999,
    color: 'white',
    marginVertical: 500,
    marginLeft: 10


  }


})