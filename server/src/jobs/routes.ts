import express, {Request, Response} from 'express';
import axios from 'axios';
import { Log } from './model';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const {description, location} = req.query;

  if (!description || !location) {
    return res.status(400).send({msg: 'bad request'});
  }

  try {
    const response = await axios.get('https://jobs.github.com/positions.json', {
      params: {description, location}
    });

    Log.build({ 
      time: new Date(),
      ip: req.ip,
      location,
      description 
    }).save()

    res.send({ data: response.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({msg: 'internal server error'});
  }  
});

export {router};