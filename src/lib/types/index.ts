export interface ChatMessage {
  id: string;
  content: string;
  role: "user" | "assistant" | "system";
  timestamp: Date;
  model?: string;
  metadata?: MessageMetadata;
}

export interface MessageMetadata {
  tokens?: number;
  cost?: number;
  duration?: number;
  attachments?: Attachment[];
  reactions?: Reaction[];
}

export interface Attachment {
  id: string;
  type: "image" | "file" | "audio" | "video";
  name: string;
  size: number;
  url: string;
  mimeType: string;
}

export interface Reaction {
  emoji: string;
  count: number;
  users: string[];
}

export interface ChatSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: Date;
  updatedAt: Date;
  model: LLMModel;
  settings: ChatSettings;
}

export interface ChatSettings {
  temperature: number;
  maxTokens: number;
  topP: number;
  frequencyPenalty: number;
  presencePenalty: number;
  systemPrompt?: string;
}

export interface LLMModel {
  id: string;
  name: string;
  provider: LLMProvider;
  contextWindow: number;
  costPer1kTokens: {
    input: number;
    output: number;
  };
  capabilities: ModelCapability[];
}

export type LLMProvider =
  | "openai"
  | "anthropic"
  | "google"
  | "local"
  | "huggingface";

export type ModelCapability =
  | "text"
  | "vision"
  | "function_calling"
  | "code_execution"
  | "web_search";

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  preferences: UserPreferences;
  subscription: SubscriptionTier;
  createdAt: Date;
}

export interface UserPreferences {
  theme: "light" | "dark" | "auto";
  language: string;
  defaultModel: string;
  autoSave: boolean;
  showTimestamps: boolean;
  compactMode: boolean;
}

export type SubscriptionTier = "free" | "pro" | "enterprise";

export interface ApiKey {
  id: string;
  name: string;
  provider: LLMProvider;
  key: string;
  createdAt: Date;
  lastUsed?: Date;
}

export interface ChatState {
  currentSession?: ChatSession;
  sessions: ChatSession[];
  isLoading: boolean;
  error?: string;
  streamingMessage?: Partial<ChatMessage>;
}

export interface AppState {
  user?: User;
  chat: ChatState;
  ui: UIState;
  settings: AppSettings;
}

export interface UIState {
  sidebarOpen: boolean;
  modalOpen: boolean;
  theme: "light" | "dark";
  notifications: Notification[];
}

export interface Notification {
  id: string;
  type: "info" | "success" | "warning" | "error";
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

export interface AppSettings {
  apiKeys: ApiKey[];
  defaultModel: string;
  autoSave: boolean;
  analytics: boolean;
  betaFeatures: boolean;
}

export interface StreamingResponse {
  choices: Array<{
    delta: {
      content?: string;
      role?: string;
    };
    finish_reason?: string;
  }>;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface ChatCompletion {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export interface ErrorResponse {
  error: {
    message: string;
    type: string;
    code?: string;
  };
}

export type EventType =
  | "message_sent"
  | "message_received"
  | "session_created"
  | "session_updated"
  | "model_changed"
  | "settings_updated";

export interface AnalyticsEvent {
  type: EventType;
  timestamp: Date;
  data: Record<string, unknown>;
  sessionId?: string;
  userId?: string;
}
