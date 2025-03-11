import { useFonts } from "expo-font";

 export const [loaded, error] = useFonts({    
    'Inter_regular': require('../../assets/fonts/Inter/static/Inter_18pt-Regular.ttf'),
    'Inter_bold': require('../../assets/fonts/Inter/static/Inter_18pt-Bold.ttf'),
  });
