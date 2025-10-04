import * as Bluepeer from "bluepeer"
import { useEffect, useState } from "react";
import { View, Text, Pressable, Button } from "react-native"

export default function App() {
  const [theme,setTheme] = useState<string>(Bluepeer.getTheme());
  const nextTheme = theme === "dark" ? "light" : "dark";

  useEffect(()=>{
  const subscription = Bluepeer.addThemeListener(({ theme: newTheme }) => {
    setTheme(newTheme);
  });

  return () => subscription.remove();
  },[setTheme])

  return (
    <View style={{ flex:1, alignItems:"center", justifyContent:"center", backgroundColor: theme ? "light" : "dark" }}>
      <Text>Theme: {theme}</Text>
      <Button
      title="Change theme"
      onPress={() => Bluepeer.setTheme(nextTheme)}
      />
    </View>
  )
}