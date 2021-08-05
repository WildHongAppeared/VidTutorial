
export interface VideoInput { // interface to map input to actions
  id: number 
  title: string
  category: string
  imgUrl: string
  teacher: string
}

export interface VideoSearchReturn { // interface to map input to actions
  data: Array<VideoInput>
  currentPage: number
  lastPage: number
}