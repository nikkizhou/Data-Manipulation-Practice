const expect = require('chai').expect
const { parseStringToObject, parseObjectToString } = require('./index.js')

describe('parseStringToObject', () => {
  it('parseStringToObject is exported', () => {
    expect(parseStringToObject).to.be.a('function')
  })
  it('parseStringToObject should return array of heroes', () => {
    const data = "heroName|heroId|HP\nJosephine,007,97\nOssian,404,98\nMarcus,001,100\nOscar,123,5\nJohan,200,36"
    const actual = parseStringToObject(data)
    const expected = [
      { name: 'Josephine', id: '007', hp: '97' },
      { name: 'Ossian', id: '404', hp: '98' },
      { name: 'Marcus', id: '001', hp: '100' },
      { name: 'Oscar', id: '123', hp: '5' },
      { name: 'Johan', id: '200', hp: '36' },
    ]
    expect(actual).to.deep.equal(expected)
  })
})

describe('parseObjectToString', () => {
  it('parseObjectToString is exported', () => {
    expect(parseObjectToString).to.be.a('function')
  })
  it('parseObjectToString should return array of heroes', () => {
    const object = [
      { name: 'Josephine', id: '007', hp: '7' },
      { name: 'Ossian', id: '404', hp: '98' },
      { name: 'Marcus', id: '001', hp: '100' },
      { name: 'Oscar', id: '123', hp: '5' },
      { name: 'Johan', id: '200', hp: '36' },
    ]
    const expected = "heroName|heroId|HP\nJosephine,007,7\nOssian,404,98\nMarcus,001,100\nOscar,123,5\nJohan,200,36"
    const actual = parseObjectToString(object)
    expect(actual).to.deep.equal(expected)
  })
})
