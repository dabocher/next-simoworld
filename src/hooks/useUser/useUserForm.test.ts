import { act, renderHook } from "@testing-library/react";
import useUserForm from "./useUserForm";
import decodeToken from "jwt-decode";
import { Wrapper } from "../../utils/Wrapper";
import { demoUser, mockTokenPayload } from "../../data/mockdata";
import { loginActionCreator } from "../../store/feature/users/authSlice";
import { server } from "../../data/mockserver";
import { UserCredentials } from "../../data/types";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  jest.clearAllMocks();
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

const userCredentials: UserCredentials = {
  username: "dabocher",
  password: "blablabla",
};

const mockDispatcher = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockDispatcher,
}));

jest.mock("jwt-decode", () => jest.fn());

describe("Given a useUserForm hook", () => {
  describe("When a loginUser function is invoked with a username 'dabocher' and password'blablabla'", () => {
    test("Then it should call the action to login the user", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUserForm(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      await act(async () => loginUser(userCredentials));

      expect(mockDispatcher).toHaveBeenCalledWith(loginActionCreator(demoUser));
    });
  });
});
