import type { UIMessage } from "ai";

import type { paths } from "./api.gen";

export * from "./api.gen";

export type Project =
  paths["/get-project"]["get"]["responses"]["200"]["content"]["application/json"];

export type Customer =
  paths["/customers/{appUserId}"]["get"]["responses"]["200"]["content"]["application/json"];

export type ChatsResponse =
  paths["/customers/{appUserId}/chats"]["get"]["responses"]["200"]["content"]["application/json"];

export type Message = Omit<
  paths["/customers/{appUserId}/chats/{chatId}"]["get"]["responses"]["200"]["content"]["application/json"]["messages"][number],
  "parts"
> & {
  parts: UIMessage["parts"];
};

export type Chat = Omit<
  paths["/customers/{appUserId}/chats/{chatId}"]["get"]["responses"]["200"]["content"]["application/json"],
  "messages"
> & {
  hasPendingInitial?: boolean;
  messages: Message[];
};

export type QnAsResponse =
  paths["/qnas"]["get"]["responses"]["200"]["content"]["application/json"];

export interface WidgetMessage {
  type: "open" | "close" | "identify" | "focus" | "track";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any; // Any additional data passed with the message
}
