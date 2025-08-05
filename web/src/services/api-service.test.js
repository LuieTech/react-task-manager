import { describe, expect, test, vi } from "vitest";
import { login } from "./api-service";
import axios from "axios";

vi.mock("axios", () => {
  return {
    default: {
      create: vi.fn().mockReturnThis(),
      post: vi.fn(),
      interceptors: {
        request: { use: vi.fn() },
        response: { use: vi.fn() },
      },
  
    }
  }
})


describe("API Service", () => {
  describe("login",  () => {
    test("happy case", () => {
      //given Parameter
      const data = {
        email: "lui@example.com",
        password: "12345678"
      };
      //when function receives cenrtain parameter
      login(data);
      //then we should expect an specific result
      expect(axios.post).toHaveBeenCalledWith("/login", data);
    });
    
  } )
})