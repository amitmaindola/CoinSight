import { ActivityIndicator, View } from "react-native";

const Loader = () => (
    <View style={{ paddingVertical: 20 }}>
      <ActivityIndicator size="large" color="#efefff" />
    </View>
  );

export default Loader