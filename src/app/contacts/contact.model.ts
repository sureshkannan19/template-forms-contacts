export interface Contact {
  id: string;
  personal: boolean;
  firstName: string;
  lastName: string;
  icon: string;
  dateOfBirth: Date | null;
  favoritesRanking: number | null;
  phones: Phone[];
  address: Address;
  notes: string;
}

export interface Phone {
  phoneNumber: string;
  phoneType: string;
}

export interface Address {
  streetAddress: string;
  city: string;
  state: string;
  postalCode: string;
  addressType: string;
}

export const phoneTypes = [
  { value: 'home', title: 'Home' },
  { value: 'work', title: 'Work' },
  { value: 'mobile', title: 'Mobile' },
  { value: 'other', title: 'Other' },
];
