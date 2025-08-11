"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import { Plus, Mic, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Copy,
  ThumbsUp,
  ThumbsDown,
  RotateCcw,
  Bookmark,
  Flag,
} from "lucide-react";

interface Message {
  id: string;
  content: string;
  timestamp: Date;
  role: "user" | "assistant";
}

interface ChatFeedProps {
  messages: Message[];
}

export function ChatFeed({ messages }: ChatFeedProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto max-h-[calc(100vh-200px)] px-4 py-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`space-y-4 ${message.role === "user" ? "flex justify-end" : ""}`}
          >
            <div
              className={`prose prose-invert max-w-none ${
                message.role === "user"
                  ? "rounded-lg p-4 max-w-md bg-primary text-secondary"
                  : ""
              }`}
            >
              <div className="whitespace-pre-wrap leading-relaxed">
                {message.content}
              </div>
            </div>

            {/* Message Actions - only show for assistant messages */}
            {message.role === "assistant" && (
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:text-white"
                >
                  <Copy className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:text-white"
                >
                  <ThumbsUp className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:text-white"
                >
                  <ThumbsDown className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:text-white"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:text-white"
                >
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:text-white"
                >
                  <Flag className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

interface ChatInputProps {
  onSendMessage: (content: string) => void;
}

export function ChatInput({ onSendMessage }: ChatInputProps) {
  const [inputValue, setInputValue] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 128)}px`; // max-h-32 = 128px
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    adjustTextareaHeight();
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue("");

      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (e.shiftKey) {
        e.preventDefault();
        handleSendMessage();
      }
      // If just Enter (no shift), allow default behavior to create new line
    }
  };

  return (
    <div className="border-t p-4">
      <div className="max-w-3xl mx-auto">
        <div className="relative flex items-end rounded-xl border">
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-3 bottom-3 h-8 w-8 p-0 hover:text-white"
          >
            <Plus className="h-4 w-4" />
          </Button>

          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything about your GitHub repositories..."
            className="flex-1  border-0 pl-12 pr-20 py-3 text-white focus-visible:ring-0 focus-visible:ring-offset-0 resize-none min-h-[44px] max-h-32 overflow-y-auto"
            rows={1}
          />

          <div className="absolute right-3 bottom-3 flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:text-white"
            >
              <Mic className="h-4 w-4" />
            </Button>
            <Button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              size="sm"
              className="h-8 w-8 p-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-center text-xs mt-3">
          GitHubGPT can make mistakes. Check important info.{" "}
          <a href="#" className="underline">
            Cookie Preferences
          </a>
        </p>
      </div>
    </div>
  );
}

interface Message {
  id: string;
  content: string;
  timestamp: Date;
  role: "user" | "assistant";
}

export default function Page() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: `Here are the key points about GitHub OAuth App tokens and their behavior:

**You explicitly revoke it**
• The app changes its scopes

That means there's no automatic token rotation like there is for GitHub Apps (those are a different type of app).

🔹 **Key points for OAuth App tokens**

• **No expiry**: GitHub's OAuth App access tokens are valid until revoked.
• **Revocation**: Users can revoke the token from their GitHub settings → **Settings** → **Applications** → **Authorized OAuth Apps**.
• **Security**: If compromised, you must regenerate by going through the OAuth flow again.
• **No refresh token**: You have to re-authorize to get a new one.

🔹 **When token rotation does apply**

Token rotation only exists for:

• GitHub Apps (with JWT + installation access tokens)
• GitHub's fine-grained personal access tokens in some contexts (those can have expiry dates)

If you want token rotation-like behavior for an OAuth App, you'd have to manually re-run the OAuth flow before using the token — for example, always request a new one every X days and store it securely.

If you want, I can explain how to switch your OAuth App to a GitHub App so you do get short-lived tokens and automatic rotation. That would also make PR fetching more secure.

Do you want me to walk through that conversion?`,
      timestamp: new Date(),
      role: "assistant",
    },
  ]);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      timestamp: new Date(),
      role: "user",
    };

    setMessages((prev) => [...prev, userMessage]);

    // Mock AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Hey Brandon — what's up?",
        timestamp: new Date(),
        role: "assistant",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);
  };

  return (
    <>
      <ChatFeed messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </>
  );
}
