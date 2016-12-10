import { Router } from 'express';
import path from 'path';
import fs from 'fs';

const messagesRouter = Router();

const jangteo = path.resolve(__dirname, '../../../history/jangteo/');
var jangteoHistory = fs.readdirSync(jangteo).reverse();

const channelPaths = {
  jangteo: jangteo
}

const channelHistories = {
  jangteo: jangteoHistory
}

messagesRouter.get('/:channel/:id', (req, res) => {
  const id = req.params.id;
  const channel = req.params.channel;
  if (channelHistories[channel].length < id) {
    res.send('{}');
  } else {
    var jsonData = require(path.resolve(
      channelPaths[channel], 
      channelHistories.jangteo[id]))
    // console.log('name: ', jsonName);

    res.json(jsonData);
  } 
})

export default messagesRouter;


