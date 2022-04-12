import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { Video } from 'expo-av'
import Layout from '../../components/Layout';
const { width, height } = Dimensions.get("screen");
import { useFocusEffect } from '@react-navigation/native';
const Video2 = () => {

    const video = React.useRef(null);
    const [loadComponent, setLoadComponent] = useState<boolean>(false)

    useFocusEffect(() => {
        setLoadComponent(true)
        return () => {
            setLoadComponent(false)
        }
    })
    return (
        <Layout>

            {loadComponent && <View style={{ justifyContent: "center", alignItems: "center" }}>

                <Video
                    ref={video}
                    style={styles.video}
                    source={require("../../assets/5minsm.mp4")}
                    useNativeControls
                    resizeMode="contain"
                />

            </View>}
        </Layout>
    )
}

export default Video2

const styles = StyleSheet.create({
    video: {
        width: width - 150,
        height: height - 150,
        zIndex: 1
    },
})