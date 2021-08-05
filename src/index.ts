const express = require( "express" );
const app = express();
const port = 8080;
const fs = require('fs')
const path = require('path')
import { Response, Request} from 'express'
import VideoTutorialRepository from './class/VideoTutorialRepository'
let videoTutorialRepo: VideoTutorialRepository
const inputData = fs.readFileSync(path.join(__dirname, "input.csv"), "utf8") 
videoTutorialRepo = new VideoTutorialRepository(inputData)

app.get( "/", ( req:Request, res:Response ) => {
  let page = Number(req.query.page) || 1
  let search = req.query.search as string
  let data = videoTutorialRepo.getVideoInputs(page, search)
  res.send(data);
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );