export type CityType = {
  id: string;
  name: string;
  voivodeship: VoivodeshipType;
  description: string;
  picture_url: string;
  known_places: string[];
  links: string[];
};

export type CityFormDataType = {
  id?: string;
  name: string;
  voivodeship: VoivodeshipType | "";
  description: string;
  picture_url: string;
  known_places: string;
  links: string;
};

export type VoivodeshipType =
  | "dolnośląskie"
  | "kujawsko-pomorskie"
  | "lubelskie"
  | "lubuskie"
  | "łódzkie"
  | "małopolskie"
  | "mazowieckie"
  | "opolskie"
  | "podkarpackie"
  | "podlaskie"
  | "pomorskie"
  | "śląskie"
  | "świętokrzyskie"
  | "warmińsko-mazurskie"
  | "wielkopolskie"
  | "zachodniopomorskie";
