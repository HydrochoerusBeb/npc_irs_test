import { faker } from '@faker-js/faker';

export const generateCitizen = () => ({
  id: faker.string.uuid(),
  fullName: faker.person.fullName(),
  dateOfBirth: faker.date.birthdate({ min: 18, max: 80, mode: 'age' }),
  address: faker.location.streetAddress(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  occupation: faker.person.jobTitle(),
  education: faker.helpers.arrayElements(['High School', 'Bachelor', 'Master', 'PhD'], 1)[0],
  familyMembers: Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => ({
    name: faker.person.fullName(),
    relation: faker.helpers.arrayElement(['Spouse', 'Child', 'Parent', 'Sibling']),
    age: faker.number.int({ min: 1, max: 80 }),
  })),
});
export const generateCitizens = (count = 100000) => {
    const storedCitizens = localStorage.getItem('citizens');
    if (storedCitizens) {
      return JSON.parse(storedCitizens);
    } else {
      const citizens = [];
      for (let i = 0; i < count; i++) {
        citizens.push(generateCitizen());
      }
      localStorage.setItem('citizens', JSON.stringify(citizens));
      return citizens;
    }
  };