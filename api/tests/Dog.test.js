const { Sequelize, DataTypes } = require('sequelize');
const Dog = require('../src/models/Dog');

const sequelize = new Sequelize('sqlite::memory:');

describe('Dog model', () => {
  beforeAll(async () => {
    await sequelize.authenticate();
    await sequelize.sync();
  });

  it('should create a Dog model instance', async () => {
    const dog = await Dog.init(sequelize).create({
      name: 'Poodle',
      height: '38-45 cm',
      weight: '20-32 kg',
      lifeSpan: '12-15 years',
    });

    expect(dog.id).toBeTruthy();
    expect(dog.name).toBe('Poodle');
    expect(dog.height).toBe('38-45 cm');
    expect(dog.weight).toBe('20-32 kg');
    expect(dog.lifeSpan).toBe('12-15 years');
  });

 it('should create a Dog model instance', async () => {
  const dog = await Dog.init(sequelize).create({
    name: 'Poodle',
    height: '38-45 cm',
    weight: '20-32 kg',
    lifeSpan: '12-15 years',
  });

  expect(dog.idBreed).toBeTruthy();
  expect(dog.name).toBe('Poodle');
  expect(dog.height).toBe('38-45 cm');
  expect(dog.weight).toBe('20-32 kg');
  expect(dog.lifeSpan).toBe('12-15 years');
});


  it('should not create a Dog instance without height, weight and lifeSpan', async () => {
    expect.assertions(3);
    try {
      await Dog.init(sequelize).create({
        name: 'Poodle',
      });
    } catch (error) {
      expect(error.message).toContain('notNull Violation: Dog.height cannot be null');
      expect(error.message).toContain('notNull Violation: Dog.weight cannot be null');
      expect(error.message).toContain('notNull Violation: Dog.lifeSpan cannot be null');
    }
  });
});
