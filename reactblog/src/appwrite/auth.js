import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js";
export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password
      );

      if (userAccount) {
        //call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      // If user is not logged in, just return null
      if (error.code === 401) {
        return null;
      }
      console.log("Appwrite service :: getCurrentUser :: error", error);
      return null;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
      console.log("sessions are deleted");
    } catch (error) {
      console.log("Appwrite serice :: getCurrentUser :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
