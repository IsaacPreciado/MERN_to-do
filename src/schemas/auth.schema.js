import {z} from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username required',
        invalid_type_error: 'Username must be a string'
    }),

    email: z.string({
        required_error: 'Email required'
    }).email({
        required_error: 'Email must be a valid email'
    }),

    password: z.string({
        required_error: 'Password required'
    }).min(6, {
        message: 'Password must be at least 6 characters long'
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email required'
    }).email({
        message: 'Email must be a valid email'
    }),

    password: z.string({
        required_error: 'Password required'
    }).min(6, {
        message: 'Password must be at least 6 characters long'
    })
})