const express = require( "express" );
const app = express();
const port = 8080;
const cors = require('cors');
const fs = require('fs')
const path = require('path')
import { Response, Request} from 'express'
import VideoTutorialRepository from './class/VideoTutorialRepository'

let videoTutorialRepo: VideoTutorialRepository
const inputData = fs.readFileSync(path.join(__dirname, "input.csv"), "utf8") // This blocks read from csv file input and parse it to the video tutorial repo
videoTutorialRepo = new VideoTutorialRepository(inputData)                   // In ideal scenario would initialize database and model into repo


app.use(cors());
app.options('*', cors());

app.get('/health', ( req:Request, res:Response ) => { //for health check
  const data = {
    uptime: process.uptime(),
    message: 'Ok',
    date: new Date()
  }
  res.status(200).send(data);
});

app.get( "/api/v1/tutorial", ( req:Request, res:Response ) => { //in ideal scenario would use router for different "microservices"
  let page = Number(req.query.page) || 1
  let search = req.query.search as string
  let data = videoTutorialRepo.getVideoInputs(page, search)
  res.send(data);
} );

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );