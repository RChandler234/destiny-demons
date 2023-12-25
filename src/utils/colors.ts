export const backgroundColor = (url: string) => {
  switch (url) {
    case "/VOW":
      return "rgba(81, 4, 0, 0.6)";
    case "/RON":
      return "rgba(248, 152, 128, 0.6)";
    case "/GARDEN":
      return "rgba(1, 50, 32, 0.6)";
    case "/LASTWISH":
      return "rgba(48, 25, 52, 0.6)";
    case "/VAULTOFGLASS":
      return "rgba(95, 108, 129, 0.6)";
    case "/TANIKS":
      return "rgba(96, 30, 249, 0.6)";
    case "/TOTEMS":
      return "rgba(9, 93, 85, 0.6)";
    default:
      return "#00008B";
  }
};
