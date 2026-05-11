import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ChevronDown, Sparkles, Mail, Phone } from "lucide-react";
import ReactMarkdown from "react-markdown";
import {
  generateResponse,
  getWelcomeMessage,
  createInitialState,
  type ChatMessage,
  type ConversationState,
} from "@/chatbot/engine";

// ─── Helpers ───────────────────────────────────────────────────────────────

let msgCounter = 0;
function uid(): string {
  return `msg-${++msgCounter}-${Date.now()}`;
}

// ─── Component ─────────────────────────────────────────────────────────────

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [state, setState] = useState<ConversationState>(createInitialState);
  const [unread, setUnread] = useState(0);
  const [hasOpened, setHasOpened] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize welcome message
  useEffect(() => {
    if (!hasOpened && open) {
      setMessages([getWelcomeMessage()]);
      setHasOpened(true);
    }
  }, [open, hasOpened]);

  // Auto-scroll to bottom
  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      requestAnimationFrame(() => {
        el.scrollTop = el.scrollHeight;
      });
    }
  }, [messages, typing]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  // Clear unread when opened
  useEffect(() => {
    if (open) setUnread(0);
  }, [open]);

  const addBotMessage = useCallback(
    (msg: Omit<ChatMessage, "id" | "role">) => {
      setTyping(true);
      const delay = Math.min(400 + msg.text.length * 3, 1200);
      setTimeout(() => {
        setTyping(false);
        const botMsg: ChatMessage = {
          id: uid(),
          role: "bot",
          ...msg,
        };
        setMessages((prev) => [...prev, botMsg]);
        if (!open) setUnread((u) => u + 1);
      }, delay);
    },
    [open]
  );

  const handleSend = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      const userMsg: ChatMessage = { id: uid(), role: "user", text: trimmed };
      setMessages((prev) => [...prev, userMsg]);
      setInput("");

      const result = generateResponse(trimmed, state);
      setState({ ...result.state });
      addBotMessage({
        text: result.text,
        quickReplies: result.quickReplies,
        contactActions: result.contactActions,
      });
    },
    [state, addBotMessage]
  );

  const handleQuickReply = useCallback(
    (reply: string) => {
      handleSend(reply);
    },
    [handleSend]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  return (
    <>
      {/* ── Launcher Button ── */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-5 right-5 z-[9999] flex h-14 w-14 items-center justify-center
                       rounded-full bg-gradient-to-br from-[hsl(44,71%,58%)] to-[hsl(41,68%,45%)]
                       shadow-[0_4px_24px_rgba(210,170,60,0.35)] hover:shadow-[0_4px_32px_rgba(210,170,60,0.5)]
                       transition-shadow duration-300 group"
            aria-label="Open EMOR chat"
          >
            <MessageCircle className="h-6 w-6 text-[hsl(223,44%,8%)] group-hover:scale-110 transition-transform" />
            {unread > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center
                              rounded-full bg-red-500 text-[10px] font-bold text-white">
                {unread}
              </span>
            )}
            {!hasOpened && (
              <span className="absolute inset-0 animate-ping rounded-full bg-[hsl(44,71%,58%)] opacity-30" />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat Window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-0 right-0 z-[9999]
                       sm:bottom-5 sm:right-5
                       w-full sm:w-[400px]
                       h-[100dvh] sm:h-[min(600px,85vh)]
                       flex flex-col
                       rounded-none sm:rounded-2xl
                       border border-[hsl(222,23%,18%)] sm:border
                       bg-[hsl(223,48%,6%)]
                       shadow-[0_8px_48px_rgba(0,0,0,0.6),0_0_0_1px_rgba(210,170,60,0.08)]
                       overflow-hidden"
          >
            {/* ── Header ── */}
            <div
              className="flex items-center gap-3 px-4 py-3
                          bg-gradient-to-r from-[hsl(223,44%,10%)] to-[hsl(223,38%,12%)]
                          border-b border-[hsl(222,23%,18%)]"
            >
              <div className="relative flex h-9 w-9 shrink-0 items-center justify-center
                              rounded-full bg-gradient-to-br from-[hsl(44,71%,58%)] to-[hsl(41,68%,45%)]">
                <Sparkles className="h-4.5 w-4.5 text-[hsl(223,44%,8%)]" />
                <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full
                                bg-emerald-400 border-2 border-[hsl(223,44%,10%)]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[hsl(210,20%,98%)] leading-tight">
                  Asistenti EMOR
                </p>
                <p className="text-[11px] text-[hsl(44,71%,58%)] leading-tight">
                  Online — gati për t'ju ndihmuar
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg
                           hover:bg-white/5 transition-colors"
                aria-label="Close chat"
              >
                <X className="h-4.5 w-4.5 text-[hsl(220,11%,73%)]" />
              </button>
            </div>

            {/* ── Messages ── */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-3 space-y-3 scroll-smooth
                         [scrollbar-width:thin] [scrollbar-color:hsl(222,23%,22%)_transparent]"
            >
              {messages.map((msg) => (
                <div key={msg.id}>
                  {/* Message bubble */}
                  <div
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed
                        ${
                          msg.role === "user"
                            ? "bg-gradient-to-br from-[hsl(44,71%,58%)] to-[hsl(41,68%,48%)] text-[hsl(223,44%,8%)] rounded-br-md"
                            : "bg-[hsl(223,30%,12%)] text-[hsl(210,20%,90%)] border border-[hsl(222,23%,18%)] rounded-bl-md"
                        }`}
                    >
                      {msg.role === "bot" ? (
                        <div className="emor-chat-markdown">
                          <ReactMarkdown
                            components={{
                              a: ({ href, children }) => (
                                <a
                                  href={href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[hsl(44,71%,62%)] underline underline-offset-2 hover:text-[hsl(44,79%,71%)] transition-colors"
                                >
                                  {children}
                                </a>
                              ),
                              strong: ({ children }) => (
                                <strong className="font-semibold text-[hsl(210,20%,98%)]">
                                  {children}
                                </strong>
                              ),
                              table: ({ children }) => (
                                <div className="overflow-x-auto my-2 rounded-lg border border-[hsl(222,23%,18%)]">
                                  <table className="w-full text-xs">{children}</table>
                                </div>
                              ),
                              th: ({ children }) => (
                                <th className="bg-[hsl(223,34%,14%)] px-2 py-1.5 text-left font-semibold text-[hsl(44,71%,58%)] border-b border-[hsl(222,23%,18%)]">
                                  {children}
                                </th>
                              ),
                              td: ({ children }) => (
                                <td className="px-2 py-1.5 border-b border-[hsl(222,23%,20%)]">
                                  {children}
                                </td>
                              ),
                              hr: () => (
                                <hr className="my-3 border-[hsl(222,23%,20%)]" />
                              ),
                              em: ({ children }) => (
                                <em className="text-[hsl(220,11%,65%)] not-italic text-xs">
                                  {children}
                                </em>
                              ),
                            }}
                          >
                            {msg.text}
                          </ReactMarkdown>
                        </div>
                      ) : (
                        <span>{msg.text}</span>
                      )}
                    </div>
                  </div>

                  {/* Contact action buttons */}
                  {msg.role === "bot" && msg.contactActions && msg.contactActions.length > 0 && (
                    <div className="flex gap-2 mt-2.5 pl-1">
                      {msg.contactActions.map((action) => (
                        <a
                          key={action.href}
                          href={action.href}
                          target={action.icon === "mail" ? "_self" : undefined}
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 rounded-xl
                                     border border-[hsl(44,71%,58%,0.4)] bg-[hsl(44,71%,58%,0.08)]
                                     px-3 py-2.5 text-[13px] font-semibold text-[hsl(44,71%,62%)]
                                     hover:bg-[hsl(44,71%,58%,0.18)] hover:border-[hsl(44,71%,58%,0.6)]
                                     hover:text-[hsl(44,79%,71%)]
                                     active:scale-[0.97] transition-all duration-150"
                        >
                          {action.icon === "mail" ? (
                            <Mail className="h-4 w-4" />
                          ) : (
                            <Phone className="h-4 w-4" />
                          )}
                          {action.label.replace(/^[📧📞]\s*/, "")}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Quick replies */}
                  {msg.role === "bot" && msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2 pl-1">
                      {msg.quickReplies.map((qr) => (
                        <button
                          key={qr}
                          onClick={() => handleQuickReply(qr)}
                          className="rounded-full border border-[hsl(44,71%,58%,0.3)] bg-[hsl(44,71%,58%,0.06)]
                                     px-3 py-1.5 text-[12px] font-medium text-[hsl(44,71%,62%)]
                                     hover:bg-[hsl(44,71%,58%,0.15)] hover:border-[hsl(44,71%,58%,0.5)]
                                     active:scale-95 transition-all duration-150"
                        >
                          {qr}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex justify-start">
                  <div className="bg-[hsl(223,30%,12%)] border border-[hsl(222,23%,18%)] rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[hsl(44,71%,58%)] animate-bounce [animation-delay:0ms]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[hsl(44,71%,58%)] animate-bounce [animation-delay:150ms]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[hsl(44,71%,58%)] animate-bounce [animation-delay:300ms]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ── Scroll-to-bottom button ── */}
            <ScrollToBottom scrollRef={scrollRef} />

            {/* ── Input ── */}
            <div className="border-t border-[hsl(222,23%,18%)] bg-[hsl(223,44%,8%)] px-3 py-2.5">
              <div className="flex items-center gap-2 rounded-xl bg-[hsl(223,30%,11%)]
                              border border-[hsl(222,23%,18%)] px-3 py-1.5
                              focus-within:border-[hsl(44,71%,58%,0.4)]
                              transition-colors">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Pyetni çdo gjë..."
                  className="flex-1 bg-transparent text-[13.5px] text-[hsl(210,20%,90%)]
                             placeholder:text-[hsl(220,11%,50%)] outline-none"
                />
                <button
                  onClick={() => handleSend(input)}
                  disabled={!input.trim()}
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg
                             bg-gradient-to-br from-[hsl(44,71%,58%)] to-[hsl(41,68%,45%)]
                             text-[hsl(223,44%,8%)] disabled:opacity-30 disabled:cursor-not-allowed
                             hover:shadow-[0_2px_12px_rgba(210,170,60,0.3)]
                             active:scale-95 transition-all duration-150"
                  aria-label="Send message"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
              <p className="mt-1.5 text-center text-[10px] text-[hsl(220,11%,40%)]">
                Mundësuar nga EMOR
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Scroll-to-Bottom Button ───────────────────────────────────────────────

function ScrollToBottom({ scrollRef }: { scrollRef: React.RefObject<HTMLDivElement> }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const gap = el.scrollHeight - el.scrollTop - el.clientHeight;
      setShow(gap > 80);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [scrollRef]);

  if (!show) return null;

  return (
    <button
      onClick={() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
      }}
      className="absolute bottom-[60px] left-1/2 -translate-x-1/2
                 flex h-7 w-7 items-center justify-center rounded-full
                 bg-[hsl(223,34%,14%)] border border-[hsl(222,23%,22%)]
                 shadow-lg hover:bg-[hsl(223,34%,18%)] transition-colors"
      aria-label="Scroll to bottom"
    >
      <ChevronDown className="h-3.5 w-3.5 text-[hsl(220,11%,73%)]" />
    </button>
  );
}
