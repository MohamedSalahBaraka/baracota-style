import { useContext } from "react";
import { StyleSheet } from "react-native";
interface colortype {
  Colors: {
    primary: string;
    secondary: string;
    success: string;
    info: string;
    warning: string;
    danger: string;
    light: string;
    dark: string;
    muted: string;
  };
}
const useColors = ({ Colors }: colortype) => {
  return StyleSheet.create({
    Primary: {
      color: Colors.primary,
    },
    Secondary: {
      color: Colors.secondary,
    },
    Success: {
      color: Colors.success,
    },
    Info: {
      color: Colors.info,
    },
    Warning: {
      color: Colors.warning,
    },
    Danger: {
      color: Colors.danger,
    },
    Light: {
      color: Colors.light,
    },
    Dark: {
      color: Colors.dark,
    },
    Muted: {
      color: Colors.muted,
    },
    bgPrimary: {
      backgroundColor: Colors.primary,
    },
    bgSecondary: {
      backgroundColor: Colors.secondary,
    },
    bgSuccess: {
      backgroundColor: Colors.success,
    },
    bgInfo: {
      backgroundColor: Colors.info,
    },
    bgWarning: {
      backgroundColor: Colors.warning,
    },
    bgDanger: {
      backgroundColor: Colors.danger,
    },
    bgLight: {
      backgroundColor: Colors.light,
    },
    bgDark: {
      backgroundColor: Colors.dark,
    },
    bgMuted: {
      backgroundColor: Colors.muted,
    },
    bgTransparent: {
      backgroundColor: "transparent",
    },
    btn: {
      backgroundColor: "transparent",
      borderRadius: 4,
      borderWidth: 1,
      borderColor: "transparent",
      opacity: 0.65,
      padding: 10,
      textAlign: "center",
      verticalAlign: "middle",
    },
    btnPrimary: {
      color: "#fff",
      backgroundColor: Colors.primary,
      borderColor: "#0a58ca",
    },
    btnSecondary: {
      color: "#fff",
      backgroundColor: Colors.secondary,
      borderColor: "#565e64",
    },
    btnSuccess: {
      color: "#fff",
      backgroundColor: Colors.success,
      borderColor: "#146c43",
    },
    btnInfo: {
      color: "#fff",
      backgroundColor: Colors.info,
      borderColor: "#25cff2",
    },
    btnWarning: {
      color: "#000",
      backgroundColor: Colors.warning,
      borderColor: "#ffc720",
    },
    btnDanger: {
      color: "#fff",
      backgroundColor: Colors.danger,
      borderColor: "#b02a37",
    },
    btnLight: {
      color: "#000",
      backgroundColor: Colors.light,
      borderColor: "#c6c7c8",
    },
    btnDark: {
      color: "#fff",
      backgroundColor: Colors.dark,
      borderColor: "#373b3e",
    },
    btnOPrimary: {
      color: Colors.primary,
      borderColor: Colors.primary,
    },
    btnOSecondary: {
      color: Colors.secondary,
      borderColor: Colors.secondary,
    },
    btnOSuccess: {
      color: Colors.success,
      borderColor: Colors.success,
    },
    btnOInfo: {
      color: Colors.info,
      borderColor: Colors.info,
    },
    btnOWarning: {
      color: Colors.warning,
      borderColor: Colors.warning,
    },
    btnODanger: {
      color: Colors.danger,
      borderColor: Colors.danger,
    },
    btnOLight: {
      color: Colors.light,
      borderColor: Colors.light,
    },
    btnODark: {
      color: Colors.dark,
      borderColor: Colors.dark,
    },
  });
};

export default useColors;
