import express from 'express';

import { addSubmission } from '../../controllers/submissionController';
import { createSubmissionZodSchema } from '../../dtos/CreateSubmissionDto';
import { validate } from '../../validators/zodValidator';
// import { createSubmissionZodSchema } from '../../dtos/CreateSubmissionDto';
// import {validate}   from 

const submissionRouter = express.Router();

submissionRouter.post(
    '/',
    validate(createSubmissionZodSchema),
    addSubmission
);


export default submissionRouter;
