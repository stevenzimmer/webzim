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

export type DictItem = {
  title: string;
  subtitle?: string;
  logo?: string;
  description?: string;
  demo?: React.ReactNode;
  href?: string;
  bullets?: string[];
  large?: boolean;
}

export type DictSkills = {
  [key: string]: string[];
}