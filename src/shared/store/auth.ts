import { z } from "zod";
import { create } from "zustand";

export const authUserDto = z.object({
  email: z.string(),
  name: z.string(),
  patronymic: z.string().optional(),
  surname: z.string(),
});

export type AuthUserDto = z.infer<typeof authUserDto>;

type AuthStoreActions = {
  setToken: (token: string) => void;
  setUser: (user: AuthUserDto) => void;
};

type AuthStore = {
  token: string | null;
  user: AuthUserDto | null;
} & AuthStoreActions;

export const useAuth = create<AuthStore>((set) => ({
  token: null,
  user: null,
  setToken(token) {
    set({ token });
  },
  setUser(user) {
    const parsedDto = authUserDto.parse(user);
    set({ user: parsedDto });
  },
}));
