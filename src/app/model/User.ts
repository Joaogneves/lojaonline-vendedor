export interface User {
    id?: string,
    firstName?: string,
    lastName?: string,
    cpf: string,
    password?: string
    role: string
}

export interface UserSalles {
    id?: string,
    firstName?: string,
    lastName?: string,
    cpf: string,
}

export interface UserLogin {
    cpf: string,
    password: string
}

export interface UserName {
    id?: string,
    firstName?: string,
    lastName?: string,
    role?: string
}

export interface UserPassword {
    id?: string,
    password: string
}