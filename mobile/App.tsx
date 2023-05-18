import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className="items-center justify-center bg-gray-900 p-4">
      <Text className="text-2xl text-white">Hello World</Text>
      <StatusBar style="light" />
    </View>
  )
}
