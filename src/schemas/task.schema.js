import {z} from 'zod';

export const createTaskSchema = z.object({
    title: z.string({
        required_error: 'Title is required',
        invalid_type_error: 'Title must be a string'
    }),

    description: z.string({
        invalid_type_error: 'Description must be a string',
        required_error: 'Description is required'
    }),

    date: z.string().datetime().optional()
})