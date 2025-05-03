import { StyleProp, ViewStyle } from "react-native";

export interface SwitchProps {
  thumbStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onChange: (newValue: boolean) => void;
  customThumbTranslation?: number;
  value: boolean;
  activeSwitchColor?: string;
  inactiveSwitchColor?: string;
}
