import { Dispatch, RefObject, SetStateAction } from "react";
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
  nofollow?: boolean;
  tech?: string[];
  sameTab?: boolean;
};

export type DictSkills = {
  [key: string]: string[];
}

export type Message = {
  content: string | "";
  role: string | "";
}


export interface Chat extends Message {
  title: string;
} 

export type ZimAppContext = {
  message: Message | null;
  setMessage: Dispatch<SetStateAction<Message | null>>;
  prompt: string;
  setPrompt: Dispatch<SetStateAction<string>>;
  previousChats: Array<Chat>;
  setPreviousChats: Dispatch<SetStateAction<Chat[] | []>>;
  currentTitle: string | null;
  setCurrentTitle: Dispatch<SetStateAction<string | null>>;
  mobileOpen: boolean;
  setMobileOpen: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  toggleMenu: ()  => void;
  ref: RefObject<HTMLInputElement>;
};

export type Todo =  {
  title: string;
  completed: boolean;
}
