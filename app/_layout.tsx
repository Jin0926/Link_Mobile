import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="alvin" options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="shaira" options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="harley" options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="angel" options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="rolino" options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="clien" options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name="index" options={{headerShown: false}}></Stack.Screen>
    </Stack>
  );
}
