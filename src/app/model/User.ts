export interface User {
    id?: number,
    firstName?: string,
    lastname?: string,
    cpf: string,
    password: string
    role: string
}

export interface UserLogin {
    cpf: string,
    password: string
}

export interface UserName {
    firstName?: string,
    lastName?: string,
}