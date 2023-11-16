interface Cliente {
    id: string;
    fullName: string;
    rg: string;
    cpf: string;
    cnh: string;
    birthdate: string;
    whatsapp: string;
    email: string;
    motherName: string;
    fatherName: string;
    citizenship: string;
    maritalStatus: string;
    gender: string;
    isServed: boolean;
}

interface Address {
    id: string;
    cep: string;
    streetName: string;
    streetNumber: string;
    city: string;
    neighborhood: string;
    uf: string;
    complement?: string;
}

export interface DataCliente {
    id: string;
    cliente: Cliente;
    address: Address;
}