const getAllDogs = require('../src/controllers/getAllDogs');
const getApiInfo = require('../src/controllers/getApiInfo');
const getDbInfo = require('../src/controllers/getDbInfo');

jest.mock('../src/controllers/getApiInfo');
jest.mock('../src/controllers/getDbInfo');

describe('getAllDogs', () => {
  beforeEach(() => {
    getApiInfo.mockImplementation(() => Promise.resolve([{ name: 'Poodle', id: 1 }]));
    getDbInfo.mockImplementation(() => Promise.resolve([{ name: 'Golden Retriever', id: 2 }]));
  });

  it('should return an array of dogs', async () => {
    const result = await getAllDogs();
    expect(result).toHaveLength(2);
    expect(result[0]).toHaveProperty('name', 'Poodle');
    expect(result[1]).toHaveProperty('name', 'Golden Retriever');
  });

  it('should call getApiInfo and getDbInfo', async () => {
    await getAllDogs();
    expect(getApiInfo).toHaveBeenCalled();
    expect(getDbInfo).toHaveBeenCalled();
  });
});
