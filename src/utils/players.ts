export interface Player {
  memberShipId: string;
  characterIds: string[];
  name: string;
}

const player_1: Player = {
  memberShipId: "4611686018483715622",
  characterIds: [
    "2305843009403238606",
    "2305843009409022184",
    "2305843009409022189",
  ],
  name: "Grunk",
};

const player_2: Player = {
  memberShipId: "4611686018468163374",
  characterIds: [
    "2305843009413664852",
    "2305843010368564206",
    "2305843010392354110",
  ],
  name: "iderp",
};

const player_4: Player = {
  memberShipId: "4611686018485170162",
  characterIds: [
    "2305843009469825285",
    "2305843009409183437",
    "2305843010099644037",
  ],
  name: "Xiushak",
};

const player_5: Player = {
  memberShipId: "4611686018509548529",
  characterIds: [
    "2305843009727464914",
    "2305843010100304306",
    "2305843010108634022",
  ],
  name: "Tumble",
};

const player_6: Player = {
  memberShipId: "4611686018468066412",
  characterIds: [
    "2305843009389904364",
    "2305843009303054815",
    "2305843010372774008",
  ],
  name: "Lagoon",
};

const player_7: Player = {
  memberShipId: "4611686018467999161",
  characterIds: [
    "2305843010098394277",
    "2305843010232384317",
    "2305843010330324544",
  ],
  name: "Pot of Greed",
};

const player_8: Player = {
  memberShipId: "4611686018524314849",
  characterIds: [
    "2305843010105124048",
    "2305843010308874134",
    "2305843010332574553",
  ],
  name: "Pwaks the Glaive God",
};

export const PLAYERS: Player[] = [
  player_1,
  player_2,
  player_4,
  player_5,
  player_6,
  player_7,
  player_8,
];
