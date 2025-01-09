import { User, UserType } from '@/domain/entities/User'
import { Vehicle } from '@/domain/entities/Vehicle'

export class TestFactory {
  static makeUser(overrides: Partial<{
    name: string
    email: string
    cpf: string
    password: string
    userType: UserType
    vehicle?: Vehicle
  }> = {}) {
    return User.create({
      name: overrides.name ?? 'John Doe',
      email: overrides.email ?? 'john@example.com',
      cpf: overrides.cpf ?? '123.456.789-00',
      password: overrides.password ?? 'validPass123',
      userType: overrides.userType ?? 'PASSENGER',
      vehicle: overrides.vehicle
    })
  }

  static makeVehicle(overrides: Partial<{
    plate: string
    model: string
    year: number
  }> = {}) {
    return new Vehicle(
      overrides.plate ?? 'ABC1234',
      overrides.model ?? 'Toyota Corolla',
      overrides.year ?? 2020
    )
  }
}