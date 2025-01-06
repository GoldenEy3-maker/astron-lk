import { z } from "zod";
import { create } from "zustand";
import { schemas } from "../api/client";

type SessionStoreActions = {
  setToken: (token: string) => void;
  setUser: (user: z.infer<typeof schemas.Session>) => void;
  destroy: () => void;
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
  destroy() {
    set({ user: null, token: null });
  },
}));
