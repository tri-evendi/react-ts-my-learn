import cors from 'cors';
import express, { Express, Request, Response } from 'express';

const app: Express = express()

const corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.get('/available-classes', (req: Request, res: Response) => {
  res.status(200).json({
    items: [
      {
        id: 1,
        name: "Belajar Javascript Dasar"
      },
      {
        id: 2,
        name: "Belajar CSS Dasar"
      }
    ]
  });

  res.status(500).json({
    code: 40168402,
    message: "mollit officia magna anim"
  });
});

app.get('/learning-class', (req: Request, res: Response) => {
  const id = Number(req.query.id);
  if (id === 1) {
    res.status(200).json({
      id: 1,
      name: "Belajar Javascript Dasar",
      mentors: [
        {
          id: 1,
          name: "Andi",
          description: "Engineer Company 1"
        },
        {
          id: 2,
          name: "Budi",
          description: "Engineer Company 2"
        }
      ],
      description: "Belajar Javascript Dasar bersama Andi dan Budi"
    });
    res.status(404).json({
      code: 404,
      message: "Class not found"
    });
  };
  if (id === 2) {
    res.status(200).json({
      id: 2,
      name: "Belajar CSS Dasar",
      mentors: [
        {
          id: 3,
          name: "Caca",
          description: "Engineer Company 3"
        },
        {
          id: 4,
          name: "Dian",
          description: "Engineer Company 2"
        }
      ],
      description: "Belajar CSS Dasar bersama Caca dan Dian"
    });
    res.status(404).json({
      code: 404,
      message: "Class not found"
    });
  };
});

app.post('/join-class', (req: Request, res: Response) => {
  res.status(200).json({
    message: "You are successfully registered"
  });
  res.status(400).json({
    code: 400,
    message: "Could not join"
  });
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
