import { faker } from '@faker-js/faker';

export const generateTicket = () => ({
  id: faker.string.uuid(),
  title: faker.lorem.sentence(),
  description: faker.lorem.paragraph(),
  status: faker.helpers.arrayElement(['Open', 'In Progress', 'Closed']),
  priority: faker.helpers.arrayElement(['Low', 'Medium', 'High']),
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
  assignee: faker.person.fullName(),
});

export const generateTickets = (count = 100) => {
    const storedTickets = localStorage.getItem('tickets');
    if (storedTickets) {
      return JSON.parse(storedTickets);
    } else {
      const tickets = [];
      for (let i = 0; i < count; i++) {
        tickets.push(generateTicket());
      }
      localStorage.setItem('tickets', JSON.stringify(tickets));
      return tickets;
    }
  };