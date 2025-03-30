import z from 'zod';

export const signupInput = z.object({
    email : z.string().email(),
    password : z.string().min(6),
    name     : z.string().optional()  
})

export type SignupInput = z.infer<typeof signupInput>;

export const signinInput = z.object({
    email : z.string().email(),
    password : z.string().min(6), 
})

export type SigninInput = z.infer<typeof signinInput>;

export const createBlogInput = z.object({
    title: z.string(),
    content: z.string(),
})



export const udpateBlogInput = z.object({
    title: z.string(),
    content: z.string(),
    id : z.string()
})

export type udpateBlogInput = z.infer<typeof udpateBlogInput>;
export type createBlogInput = z.infer<typeof createBlogInput>;