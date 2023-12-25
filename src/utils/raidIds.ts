export enum RaidType {
  DEEP = 910380154,
  VOG = 3881495763,
  VOW = 1441982566,
  WISH = 2122313384,
  RON = 2381413764,
  GARDEN = 3458480158,
  KING = 1374392663,
}

export const getRaidName = (type: RaidType) => {
  switch (type) {
    case RaidType.DEEP:
      return "Deep Stone Crypt";
    case RaidType.VOG:
      return "Vault of Glass";
    case RaidType.GARDEN:
      return "Garden of Salvation";
    case RaidType.KING:
      return "King's Fall";
    case RaidType.RON:
      return "Root of Nightmares";
    case RaidType.VOW:
      return "Vow of the Disciple";
    case RaidType.WISH:
      return "Last Wish";
  }
};
