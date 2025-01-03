import { z } from "zod";
import { create } from "zustand";
import { schemas } from "../api";

type SessionStoreActions = {
  setToken: (token: string) => void;
  setUser: (user: z.infer<typeof schemas.Session>) => void;
};

type SessionStore = {
  token: string | null;
  user: z.infer<typeof schemas.Session> | null;
} & SessionStoreActions;

export const useSession = create<SessionStore>((set) => ({
  token: null,
  user: null,
  setToken(token) {
    set({ token });
  },
  setUser(user) {
    const sessionSchemaPayload = schemas.Session.parse(user);
    set({ user: sessionSchemaPayload });
  },
}));
