# rn-awesome-switch

A customizable and animated toggle switch built using React Native Reanimated.

![Alt text](https://github.com/Dhia-Ben-Hamouda/rn-awesome-switch/blob/main/src/assets/preview.gif)

## ✨ Features

- Smooth animated transitions between states
- Customizable container and thumb styles
- Works with both Android and iOS
- Supports custom colors and thumb translation

## 📦 Installation

```bash
npm install rn-awesome-switch
# or
yarn add rn-awesome-switch
```

Then install the required peer dependencies:

```bash
npm install react-native-reanimated
```

## 🚀 Usage

```tsx
import Switch from "rn-awesome-switch";

function App() {
  const [value, setValue] = useState(false);

  return (
    <Switch
      value={value}
      onChange={(val) => {
        setValue(val);
      }}
    />
  );
}
```

## 🔧 Props

| Prop                     | Type                          | Default      | Description                              |
| ------------------------ | ----------------------------- | ------------ | ---------------------------------------- |
| `value`                  | `boolean`                     | **required** | Current state of the switch              |
| `onChange`               | `(newValue: boolean) => void` | **required** | Callback when the value changes          |
| `containerStyle`         | `StyleProp<ViewStyle>`        | `undefined`  | Custom style for the container           |
| `thumbStyle`             | `StyleProp<ViewStyle>`        | `undefined`  | Custom style for the thumb               |
| `customThumbTranslation` | `number`                      | `22`         | Custom translation value of the thumb    |
| `activeSwitchColor`      | `string`                      | `"#555"`     | Background color when switch is active   |
| `inactiveSwitchColor`    | `string`                      | `"#ccc"`     | Background color when switch is inactive |

---

## 📚 Contributing

Issues and pull requests are welcome! Please open an issue first to discuss major changes.

Made with ❤️ by Dhia Ben Hamouda
