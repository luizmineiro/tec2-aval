import { EmailValidator } from './infra/services/EmailValidator';
import { UserRepository } from './infra/repositories/UserRepository';
import { SignUpUseCase } from './application/usecases/signup/SignUpUseCase';

const userRepository = new UserRepository();
const emailValidator = new EmailValidator();
const signUpUseCase = new SignUpUseCase(userRepository, emailValidator);

async function main() {
  try {
    const result = await signUpUseCase.execute({
      name: 'John Doe',
      email: 'john@example.com',
      cpf: '123.456.789-00',
      password: 'validPassword123',
      userType: 'PASSENGER'
    });
    console.log('User created:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
