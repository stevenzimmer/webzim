export type ISItemProp = {
  artist: string;
  title: string;
  cover: string;
  rank: number;
  position: {
    positionLastWeek: number;
    peakPosition: number;
    weeksOnChart: number;
  };
}