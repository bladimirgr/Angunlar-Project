export interface Countries {
  id: 1,
  code: string,
  description: string
}

export interface Provinces {
  code: string;
  description: string;
  municipalities: Municipalities[];
}
  
export interface Municipalities {
  code: string;
  description: string;
}