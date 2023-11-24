import { z } from "zod"

export const AuthCredentialsValidor = z.object({
    email: z.string().email(),
    password: z.string().min(8, {
        message: 'Password must be at least 8 characters long.'
    })
})

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidor>