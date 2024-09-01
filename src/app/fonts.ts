// app/fonts.ts
import { Lato } from "next/font/google";

// const montserrat = Montserrat({
//   subsets: ["latin"],
//   variable: "--font-montserrat",
// });

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700", "900"],
});

export const fonts = {
  lato,
};
