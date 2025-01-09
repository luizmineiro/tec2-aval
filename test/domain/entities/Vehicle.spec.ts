import { Vehicle } from '@/domain/entities/Vehicle'

describe('Vehicle Entity', () => {
  it('should create a valid vehicle', () => {
    const vehicle = new Vehicle('ABC1234', 'Toyota Corolla', 2020)
    expect(vehicle).toBeDefined()
    expect(vehicle.getPlate).toBe('ABC1234')
  })

  it('should throw error for invalid plate', () => {
    expect(() => {
      new Vehicle('INVALID', 'Toyota Corolla', 2020)
    }).toThrow('Invalid plate')
  })

  it('should throw error for invalid year', () => {
    expect(() => {
      new Vehicle('ABC1234', 'Toyota Corolla', 1800)
    }).toThrow('Invalid year')
  })
})