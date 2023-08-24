import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import { Playfair_Display, Noto_Sans_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], style: "italic" });
const notoSans = Noto_Sans_Display({ subsets: ["latin"] });

const colors = {
  primary: {
    100: "#f7f3ee",
    200: "#e6dacc",
    300: "#d5c2aa",
    400: "#c4a988",
    500: "#b39165",
    600: "#9a774c",
    700: "#775d3b",
    800: "#55422a",
    900: "#332819",
  },
  accent: {
    50: "#eff3f6",
    100: "#cfdce3",
    200: "#afc5d0",
    300: "#8faebd",
    400: "#6f96aa",
    500: "#557d90",
    600: "#426170",
    700: "#2f4550",
    800: "#1c2a30",
    900: "#090e10",
  },
};

const theme = extendTheme(
  withDefaultColorScheme({
    colorScheme: "primary",
    components: ["Button"],
  }),

  {
    colors,
    fonts: {
      heading: "Wulkan Display",
      body: "Franklin Gothic Book",
      playfair: playfair.style.fontFamily,
      helvetica: notoSans.style.fontFamily,
    },

    styles: {
      global: {
        body: {
          overflowX: "hidden",
          backgroundColor: "neutral.white",
          color: "neutral.mateBlack !important",
        },
      },
    },

    components: {
      Button: {
        variants: {
          outline: (props: any) => ({
            ...props.theme.components.Button.variants.outline,
            _hover: { background: `${props.colorScheme}.800` },
          }),
        },
      },
    },
  }
);

export default theme;
