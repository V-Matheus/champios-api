import express, { Request, Response, json } from 'express';
import createApp from './app';

const app = createApp();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
