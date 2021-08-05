import VideoTutorialRepository from '../../class/VideoTutorialRepository'
import { expect } from 'chai'
import 'mocha'
const fs = require('fs')
const path = require('path')

const testData = fs.readFileSync(path.join(__dirname, "test_input.csv"), "utf8") 
describe('VideoTutorialRepository Unit Test', () => {

  let repo = new VideoTutorialRepository(testData)

  it('Should map csv row to proper VideoInput', () => {
    let ret = repo.getVideoInputs(1)
    let data = ret.data
    expect(data[0]).to.have.property('id')
    expect(data[0]).to.have.property('title')
    expect(data[0]).to.have.property('category')
    expect(data[0]).to.have.property('imgUrl')
  })

  it('Should return correct number of rows', () => {
    let ret = repo.getVideoInputs(1)
    let data = ret.data
    expect(data.length).to.eql(10)
  })

  it('Should process search term correctly', () => {
    const searchTerm = 'math'
    let ret = repo.getVideoInputs(1, searchTerm)
    let data = ret.data
    expect(data[0].category.toUpperCase()).to.contain(searchTerm.toUpperCase())
  })

  it('Should return correct page data', () => {
    let ret = repo.getVideoInputs(2)
    expect(ret.currentPage).to.eql(2)
    expect(ret.lastPage).to.eql(3)
  })

})


