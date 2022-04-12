import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainPage from './Screens/MainPage';
import { useFonts } from 'expo-font';
import { Image } from "react-native"
import { Asset } from 'expo-asset';

import Spc from "./Screens/Spc"
import DoporucenePostupy from './Screens/DoporucenePostupy';

//NEW Ryeqo - mechanismus účinku
import Relugolix from './Screens/Mechanismus/Relugolix';
import KombinovanaTerapie from './Screens/Mechanismus/KombinovanaTerapie';
import HladinyEstradiolu from './Screens/Mechanismus/HladinyEstradiolu';

//Ryeqo - menstruační krvácení
import Tyden52 from './Screens/Menstruacni/Tyden52';
import KlinickyVyznamne from './Screens/Menstruacni/KlinickyVyznamne';
import KrevniZtraty from './Screens/Menstruacni/KrevniZtraty';
import VetsinaPacientek from './Screens/Menstruacni/VetsinaPacientek';
import SnizeniObjemu from './Screens/Menstruacni/SnizeniObjemu';

import Bolest from "./Screens/Bolest/Bolest"

import NezadouciPrilohy from './Screens/Bezpecnost/NezadouciPrihody';
import ZmenyBMD from './Screens/Bezpecnost/ZmenyBMD';
import VlivLecby from './Screens/Bezpecnost/VlivLecby';

import QoL from "./Screens/QoL/QoL"

import Video1 from './Screens/Videa/Video1';
import Video2 from './Screens/Videa/Video2';

export default function App() {
  const Drawer = createDrawerNavigator();
  const [loaded] = useFonts({
    AkrobatBold: require("./assets/Akrobat-Bold.otf"),
    AkrobatRegular: require("./assets/Akrobat-Regular.otf")
  });

  if (!loaded) {
    return null;
  }

  cacheImages([
    "adaptive-icon.png",
    "bezpecnost_01.png",
    "bezpecnost_02.png",
    "bezpecnost_03.png",
    "bnahled1.png",
    "bnahled2.png",
    "bnahled3.png",
    "bolest.png",
    "icon.png",
    "mNahled1.png",
    "mNahled2.png",
    "mNahled3.png",
    "mechanismus_01.png",
    "mechanismus_02.png",
    "mechanismus_03.png",
    "men1.png",
    "men2.png",
    "men3.png",
    "men4.png",
    "men5.png",
    "menstruace_01.png",
    "menstruace_02.png",
    "menstruace_03.png",
    "menstruace_04.png",
    "menstruace_05.png",
    "qol.png",
    "ramecek_vzor.png",
    "ryeqo_bg_bigger.png",
    "ryeqo_bg_original.png",
    "ryeqo_main_bigger.png",
    "ryeqo_main_original.png",
    "splash.png",
    "video1.png",
    "video2.png",
  ])

  function cacheImages(images: string[]) {
    return images.map(image => {
      if (typeof image === 'string') {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={
        {
          drawerStyle: {
            width: 0
          },
          headerTransparent: true,
          headerShown: false,
        }
      }>
        <Drawer.Screen name="Main" component={MainPage} />
        <Drawer.Screen name="mechanismus-ucinku/relugolix" component={Relugolix} />
        <Drawer.Screen name="mechanismus-ucinku/kombinovanaterapie" component={KombinovanaTerapie} />
        <Drawer.Screen name="mechanismus-ucinku/hladinyEstradiolu" component={HladinyEstradiolu} />

        <Drawer.Screen name="menstruacni-krvaceni/52tyden" component={Tyden52} />
        <Drawer.Screen name="menstruacni-krvaceni/krevni-ztraty" component={KrevniZtraty} />
        <Drawer.Screen name="menstruacni-krvaceni/vetsina-pacientek" component={VetsinaPacientek} />
        <Drawer.Screen name="menstruacni-krvaceni/klinicky-vyznamne" component={KlinickyVyznamne} />
        <Drawer.Screen name="menstruacni-krvaceni/snizeni-objemu" component={SnizeniObjemu} />

        <Drawer.Screen name="bolest" component={Bolest} />
        <Drawer.Screen name="qol" component={QoL} />

        <Drawer.Screen name="bezpecnost/nezadouciPrihody" component={NezadouciPrilohy} />
        <Drawer.Screen name="bezpecnost/zmenyBMD" component={ZmenyBMD} />
        <Drawer.Screen name="bezpecnost/vlivLecby" component={VlivLecby} />


        <Drawer.Screen name="spc" component={Spc} />
        <Drawer.Screen name="doporucenePostupy" component={DoporucenePostupy} />

        <Drawer.Screen name="video3min" component={Video1} />
        <Drawer.Screen name="video5min" component={Video2} />


      </Drawer.Navigator>
      <StatusBar hidden={true} />
    </NavigationContainer>
  );
}

