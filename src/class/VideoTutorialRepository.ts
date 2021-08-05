import { VideoInput, VideoSearchReturn } from "../interface"
import { PAGE_LIMIT } from "../constants"

export default class VideoTutorialRepository {
  private videoInputs: Array<VideoInput>

  constructor(fileContent: string){
    const rows = fileContent.split("\n")
    const filteredRows = rows.filter(row => row && row.length > 0) //remove empty rows
    this.videoInputs = filteredRows.map((row) =>  this.videoInputMap(row))
  }

  private videoInputMap(row: string):VideoInput{ //map input rows to ParkingInput type accepted by Parking class
    const formattedRow = row.split(',') //split based on , as csv format  
    return {
      id: Number(formattedRow[0].trim()),
      title: formattedRow[1].trim(),
      category: formattedRow[2].trim(),
      imgUrl: formattedRow[3].trim(),
      teacher: formattedRow[4].trim(),
    }
  }

  private processQuery(searchTerm: string):Array<VideoInput>{
    let arrayToFilter = [...this.videoInputs]
    arrayToFilter = arrayToFilter.filter((video:VideoInput) => {
      let stringToFilter = searchTerm.toUpperCase()
      if(video.category.toUpperCase().includes(stringToFilter)){
        return video
      }
      if(video.title.toUpperCase().includes(stringToFilter)){
        return video
      }
      if(video.teacher.toUpperCase().includes(stringToFilter)){
        return video
      }
      if(!isNaN(searchTerm as any)){
        if(video.id === Number(searchTerm)){
          return video
        }
      }
    })
    return arrayToFilter
  }

  public getVideoInputs(page: number, searchTerm?: string):VideoSearchReturn{
    const arrayToSearch:Array<VideoInput> = searchTerm && searchTerm.length > 0 ? this.processQuery(searchTerm) : [...this.videoInputs]
    let lastPage = Math.ceil(arrayToSearch.length/PAGE_LIMIT)
    let startPage = (page - 1) * PAGE_LIMIT
    let endPage = (page * PAGE_LIMIT) 
    if(endPage > arrayToSearch.length){
      endPage = arrayToSearch.length 
    }
    return {
      data: arrayToSearch.slice(startPage, endPage),
      currentPage: page,
      lastPage
    }
  }

  
}