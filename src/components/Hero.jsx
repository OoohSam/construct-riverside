import React from "react";
import HeroOriginal from "./HeroOriginal.jsx";
import HeroBlackNovember from "./HeroBlackNovember.jsx";

// ONE-SWITCH ROLLBACK: change true to false to restore your original homepage hero.
const BLACK_NOVEMBER_ENABLED = true;

export default function Hero(props) {
  return BLACK_NOVEMBER_ENABLED
    ? <HeroBlackNovember {...props} />
    : <HeroOriginal {...props} />;
}
