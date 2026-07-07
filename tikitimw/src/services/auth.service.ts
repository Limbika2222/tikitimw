import bcrypt from "bcrypt";
import { userRepository } from "@/repositories/user.repository";

export class AuthService {
  async login(email: string, password: string) {
    const user = await userRepository.findByEmail(email);

    if (!user) {
      throw new Error("Invalid email or password.");
    }

    const validPassword = await bcrypt.compare(
      password,
      user.passwordHash
    );

    if (!validPassword) {
      throw new Error("Invalid email or password.");
    }

    return user;
  }
}

export const authService = new AuthService();