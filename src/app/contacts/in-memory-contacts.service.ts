import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Contact } from './contact.model';

export class InMemoryContactsApi implements InMemoryDbService {
  createDb() {
    let contacts: Contact[] = [
      {
        id: '5CehW',
        firstName: 'Percival',
        lastName: 'Doodleplumb',
        dateOfBirth: new Date('1994/05/05'),
        icon: '',
        personal: false,
        favoritesRanking: 0,
        phones: [{ phoneNumber: '555-765-4321', phoneType: 'mobile' },
        { phoneNumber: '555-123-2244', phoneType: 'mobile' }
        ],
        address: {
          streetAddress: '777 Whimsy Lane',
          city: 'Gleeberg City',
          state: 'Colohoma',
          postalCode: 'A4321',
          addressType: 'home',
        },
        notes: '',
      },
      {
        id: 'A6rwe',
        firstName: 'Mortimer',
        lastName: 'Flungford',
        dateOfBirth: new Date('1988/10/05'),
        icon: '',
        personal: true,
        favoritesRanking: 0,
        phones: [{ phoneNumber: '555-877-5678', phoneType: 'mobile' }],
        address: {
          streetAddress: '543 Lullaby Lane',
          city: 'Sleepytown',
          state: 'Ulaska',
          postalCode: 'F2231',
          addressType: 'other',
        },
        notes: '',
      },
      {
        id: '3bNGA',
        firstName: 'Wanda',
        lastName: 'Giggleworth',
        dateOfBirth: new Date('1986/11/08'),
        icon: '',
        personal: true,
        favoritesRanking: 1,
        phones: [{ phoneNumber: '555-123-4567', phoneType: 'mobile' }],
        address: {
          streetAddress: '123 Merriment Avenue',
          city: 'Dorado City',
          state: 'Mezona',
          postalCode: 'Z2345',
          addressType: 'work',
        },
        notes: '',
      },
    ];

    return { contacts };
  }
}
