import { UserType } from '@/domain/entities/User'

export interface SignUpDTO {
  name: string
  email: string
  cpf: string
  password: string
  userType: UserType
  vehicle?: {
    plate: string
    model: string
    year: number
  }
}