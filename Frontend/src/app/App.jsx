import { useState, useRef, useEffect } from 'react';

import { MarkdownRenderer } from '../utils/markdownRenderer.jsx';
import { PRESET_RESPONSES } from '../utils/mockData.js';
import { AuthPage } from '../components/AuthPage.jsx';
import { authAPI, aiAPI, chatAPI } from '../services/api.js';

export default function App() {
  // ───────────────────────────────────────────
  // Authentication State
  // ───────────────────────────────────────────
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('ai_arena_user');
    if (savedUser) {
      try {
        return JSON.parse(savedUser);
      } catch (e) {
        console.error("Error parsing saved user", e);
      }
    }
    return null;
  });

  const [showAuthModal, setShowAuthModal] = useState(false);

  // Check existing session from backend on mount
  useEffect(() => {
    authAPI.getMe()
      .then((res) => {
        if (res.success && res.user) {
          setUser(res.user);
        }
      })
      .catch(() => {
        // No active session or unauthenticated
      });
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('ai_arena_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('ai_arena_user');
    }
  }, [user]);

  const [activeTab, setActiveTab] = useState('arena'); // 'arena' | 'leaderboard' | 'models'
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Load saved chats from database when user is authenticated
  useEffect(() => {
    if (user && !user.isGuest) {
      chatAPI.getChats()
        .then((res) => {
          if (res.success && Array.isArray(res.chats) && res.chats.length > 0) {
            const dbChats = res.chats.map((c) => ({
              id: c._id,
              title: c.title || 'Chat',
              createdAt: c.createdAt ? new Date(c.createdAt).getTime() : Date.now(),
              messages: c.messages || [],
            }));
            setChats(dbChats);
            setActiveChatId(dbChats[0].id);
          }
        })
        .catch((e) => {
          console.error("Error fetching user chats from backend:", e);
        });
    }
  }, [user]);

  const handleLogin = (userObj) => {
    setUser(userObj);
    setShowAuthModal(false);
  };

  const handleGuestLogin = () => {
    const guestUser = {
      name: 'Guest User',
      email: 'guest@ai-arena.io',
      isGuest: true
    };
    setUser(guestUser);
    setShowAuthModal(false);
  };

  const handleGoogleLogin = (googleUser) => {
    setUser(googleUser || {
      name: 'Google User',
      email: 'user.google@gmail.com',
      provider: 'Google'
    });
    setShowAuthModal(false);
  };

  const handleLogout = async () => {
    try {
      await authAPI.logout();
    } catch (e) {
      console.error("Logout request error:", e);
    } finally {
      setUser(null);
    }
  };
  // ───────────────────────────────────────────
  // Chat Sessions State with localStorage persistence
  // ───────────────────────────────────────────
  const [chats, setChats] = useState(() => {
    const saved = localStorage.getItem('ai_arena_chats_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {
        console.error("Failed loading saved chats from localStorage", e);
      }
    }
    return [
      {
        id: 'session-default',
        title: 'Factorial function in Python',
        createdAt: Date.now(),
        messages: [PRESET_RESPONSES.factorial]
      }
    ];
  });

  const [activeChatId, setActiveChatId] = useState(() => {
    const savedActiveId = localStorage.getItem('ai_arena_active_chat_id_v2');
    if (savedActiveId && chats.some(c => c.id === savedActiveId)) {
      return savedActiveId;
    }
    return chats[0]?.id || 'session-default';
  });

  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ai_arena_chats_v2', JSON.stringify(chats));
      localStorage.setItem('ai_arena_active_chat_id_v2', activeChatId);
    } catch (e) {
      console.error("Failed saving to localStorage", e);
    }
  }, [chats, activeChatId]);

  // Current active chat session
  const activeChat = chats.find(c => c.id === activeChatId) || chats[0];
  const messages = activeChat ? activeChat.messages : [];

  // Auto scroll to bottom when messages update
  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats, activeChatId, isLoading]);

  // ───────────────────────────────────────────
  // Actions: New Chat, Delete Chat, Send Query
  // ───────────────────────────────────────────
  const handleNewChat = () => {
    const newId = 'chat-' + Date.now();
    const newChat = {
      id: newId,
      title: 'New Chat',
      createdAt: Date.now(),
      messages: []
    };
    setChats((prev) => [newChat, ...prev]);
    setActiveChatId(newId);
  };

  const handleDeleteChat = (e, chatIdToDelete) => {
    e.stopPropagation();
    if (user && !user.isGuest && !chatIdToDelete.startsWith('session-') && !chatIdToDelete.startsWith('chat-')) {
      chatAPI.deleteChat(chatIdToDelete).catch((err) => {
        console.error("Error deleting chat from database:", err);
      });
    }
    setChats((prev) => {
      const filtered = prev.filter((c) => c.id !== chatIdToDelete);
      if (filtered.length === 0) {
        const freshId = 'chat-' + Date.now();
        const freshChat = {
          id: freshId,
          title: 'New Chat',
          createdAt: Date.now(),
          messages: []
        };
        setActiveChatId(freshId);
        return [freshChat];
      }
      if (activeChatId === chatIdToDelete) {
        setActiveChatId(filtered[0].id);
      }
      return filtered;
    });
  };

  const handleSend = async (textToSend) => {
    const query = (textToSend || inputQuery).trim();
    if (!query || isLoading) return;

    setIsLoading(true);
    setInputQuery('');

    // Ensure we are operating on a valid chat session ID
    const targetChatId = activeChatId;
    const isDbId = targetChatId && !targetChatId.startsWith('chat-') && !targetChatId.startsWith('session-');

    try {
      const data = await aiAPI.invoke(query, isDbId ? targetChatId : undefined);
      console.log("Raw Backend Response Data:", data);

      const messageItem = extractMessageItem(data, query);

      setChats((prevChats) =>
        prevChats.map((chat) => {
          if (chat.id === targetChatId) {
            const updatedMessages = [...chat.messages, messageItem];
            const updatedTitle =
              chat.title === 'New Chat' || !chat.title
                ? query
                : chat.title;
            return {
              ...chat,
              id: data.savedChatId || chat.id,
              title: updatedTitle,
              messages: updatedMessages
            };
          }
          return chat;
        })
      );
      if (data.savedChatId && targetChatId !== data.savedChatId) {
        setActiveChatId(data.savedChatId);
      }
    } catch (err) {
      console.error("Error communicating with backend:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#090d14] text-slate-100 flex flex-col font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* ─────────────────────────────────────────── */}
      {/* Header */}
      {/* ─────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-[#0d1117]/85 backdrop-blur-xl border-b border-white/10 z-50 flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 md:hidden transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileSidebarOpen ? 'close' : 'menu'}
            </span>
          </button>

          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <span className="material-symbols-outlined text-slate-950 font-bold text-xl">bolt</span>
          </div>
          <div>
            <h1 className="text-lg font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
              AI Arena
            </h1>
            <p className="text-[11px] text-slate-400 font-mono tracking-wider uppercase -mt-1">
              Dual Solution & Judge Arena
            </p>
          </div>
        </div>

        {/* Center info */}
        <div className="hidden md:flex items-center gap-3 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-slate-300">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="font-mono text-slate-400">Models Active:</span>
          <span className="font-semibold text-cyan-300">Model A</span>
          <span className="text-slate-600">vs</span>
          <span className="font-semibold text-purple-300">Model B</span>
          <span className="text-slate-600">|</span>
          <span className="font-mono text-slate-400">Judge:</span>
          <span className="font-semibold text-amber-300">Gemini 3.6 Flash</span>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleNewChat}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all cursor-pointer shadow-sm active:scale-95"
          >
            <span className="material-symbols-outlined text-base">add</span>
            <span className="hidden sm:inline">New Chat</span>
          </button>

          {user ? (
            <div className="flex items-center gap-3 pl-2 border-l border-white/10">
              <div className="flex items-center gap-2" title={user.email}>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-purple-500 text-slate-950 font-extrabold flex items-center justify-center text-xs shadow-inner uppercase">
                  {user.name ? user.name.charAt(0) : 'U'}
                </div>
                <div className="hidden lg:block text-left text-xs">
                  <p className="font-bold text-white leading-tight">{user.name}</p>
                  <p className="text-[10px] text-slate-400 font-mono truncate max-w-[110px]">{user.email}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
                title="Sign Out"
              >
                <span className="material-symbols-outlined text-lg">logout</span>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowAuthModal(true)}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-slate-950 font-bold text-xs transition-all cursor-pointer shadow-md active:scale-95 flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-base">account_circle</span>
              <span>Sign In / Register</span>
            </button>
          )}
        </div>
      </header>

      {/* ─────────────────────────────────────────── */}
      {/* Mobile Drawer Overlay & Sidebar */}
      {/* ─────────────────────────────────────────── */}
      {isMobileSidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex animate-fadeIn">
          {/* Backdrop */}
          <div
            onClick={() => setIsMobileSidebarOpen(false)}
            className="fixed inset-0 bg-[#090d14]/80 backdrop-blur-sm transition-opacity"
          ></div>

          {/* Drawer Sidebar */}
          <aside className="relative w-72 max-w-[80vw] bg-[#0c1017] border-r border-white/10 p-4 flex flex-col h-full z-50 overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-950 font-bold text-sm">bolt</span>
                </div>
                <span className="font-bold text-sm text-white">AI Arena Menu</span>
              </div>
              <button
                onClick={() => setIsMobileSidebarOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 cursor-pointer"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <div className="mb-4">
              <button
                onClick={() => {
                  handleNewChat();
                  setIsMobileSidebarOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 text-xs font-bold shadow-md cursor-pointer"
              >
                <span className="material-symbols-outlined text-base">add_circle</span>
                <span>Start New Chat</span>
              </button>
            </div>

            <div className="mb-4">
              <h2 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">
                Navigation
              </h2>
              <nav className="space-y-1">
                <button
                  onClick={() => {
                    setActiveTab('arena');
                    setIsMobileSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold text-left transition-all ${
                    activeTab === 'arena'
                      ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">swords</span>
                  <span>Arena Battleground</span>
                </button>
                <button
                  onClick={() => {
                    setActiveTab('leaderboard');
                    setIsMobileSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold text-left transition-all ${
                    activeTab === 'leaderboard'
                      ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">leaderboard</span>
                  <span>Leaderboard</span>
                </button>
                <button
                  onClick={() => {
                    setActiveTab('models');
                    setIsMobileSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold text-left transition-all ${
                    activeTab === 'models'
                      ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">smart_toy</span>
                  <span>AI Models</span>
                </button>
              </nav>
            </div>

            {/* Chat History */}
            <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar">
              <div className="flex items-center justify-between px-3 mb-2">
                <h2 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                  Chat History
                </h2>
                {chats.length > 0 && (
                  <button
                    onClick={() => {
                      localStorage.removeItem('ai_arena_chats_v2');
                      handleNewChat();
                      setIsMobileSidebarOpen(false);
                    }}
                    className="text-[10px] text-slate-500 hover:text-red-400 transition-colors"
                  >
                    Clear All
                  </button>
                )}
              </div>

              <div className="space-y-1.5">
                {chats.map((chat) => {
                  const isActive = chat.id === activeChatId;
                  return (
                    <div
                      key={chat.id}
                      onClick={() => {
                        setActiveChatId(chat.id);
                        setActiveTab('arena');
                        setIsMobileSidebarOpen(false);
                      }}
                      className={`group flex items-center justify-between px-3 py-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                        isActive
                          ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-200 font-semibold'
                          : 'bg-white/[0.02] border-white/5 text-slate-400'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <span className="material-symbols-outlined text-base text-slate-500">
                          chat_bubble_outline
                        </span>
                        <span className="truncate">{chat.title || 'New Chat'}</span>
                      </div>

                      <button
                        onClick={(e) => handleDeleteChat(e, chat.id)}
                        className="p-1 text-slate-500 hover:text-red-400 transition-all rounded hover:bg-white/10"
                        title="Delete chat"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      )}

      <div className="flex flex-1 pt-16">
        {/* ─────────────────────────────────────────── */}
        {/* Desktop Sidebar */}
        {/* ─────────────────────────────────────────── */}
        <aside className="fixed left-0 top-16 bottom-0 w-64 bg-[#0c1017] border-r border-white/5 p-4 hidden md:flex flex-col z-40 overflow-y-auto">
          <div className="mb-4">
            <button
              onClick={handleNewChat}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 border border-cyan-500/30 text-cyan-300 text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              <span className="material-symbols-outlined text-base">add_circle</span>
              <span>Start New Chat</span>
            </button>
          </div>

          <div className="mb-6">
            <h2 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest px-3 mb-2">
              Navigation
            </h2>
            <nav className="space-y-1">
              <button
                onClick={() => setActiveTab('arena')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold text-left transition-all ${
                  activeTab === 'arena'
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                <span className="material-symbols-outlined text-base">swords</span>
                <span>Arena Battleground</span>
              </button>
              <button
                onClick={() => setActiveTab('leaderboard')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold text-left transition-all ${
                  activeTab === 'leaderboard'
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                <span className="material-symbols-outlined text-base">leaderboard</span>
                <span>Leaderboard</span>
              </button>
              <button
                onClick={() => setActiveTab('models')}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-semibold text-left transition-all ${
                  activeTab === 'models'
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]'
                }`}
              >
                <span className="material-symbols-outlined text-base">smart_toy</span>
                <span>AI Models</span>
              </button>
            </nav>
          </div>

          {/* Chat History Sessions */}
          <div className="flex-1 overflow-y-auto pr-1 custom-scrollbar">
            <div className="flex items-center justify-between px-3 mb-2">
              <h2 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                Chat History
              </h2>
              {chats.length > 0 && (
                <button
                  onClick={() => {
                    localStorage.removeItem('ai_arena_chats_v2');
                    handleNewChat();
                  }}
                  className="text-[10px] text-slate-500 hover:text-red-400 transition-colors"
                >
                  Clear All
                </button>
              )}
            </div>

            <div className="space-y-1.5">
              {chats.map((chat) => {
                const isActive = chat.id === activeChatId;
                return (
                  <div
                    key={chat.id}
                    onClick={() => setActiveChatId(chat.id)}
                    className={`group flex items-center justify-between px-3 py-2.5 rounded-xl border text-xs cursor-pointer transition-all ${
                      isActive
                        ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-200 font-semibold shadow-md'
                        : 'bg-white/[0.02] border-white/5 text-slate-400 hover:text-slate-200 hover:bg-white/[0.05]'
                    }`}
                  >
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <span className="material-symbols-outlined text-base text-slate-500 group-hover:text-cyan-400">
                        chat_bubble_outline
                      </span>
                      <span className="truncate">{chat.title || 'New Chat'}</span>
                    </div>

                    <div className="flex items-center gap-1">
                      {chat.messages.length > 0 && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-white/10 text-slate-400 font-mono">
                          {chat.messages.length}
                        </span>
                      )}
                      <button
                        onClick={(e) => handleDeleteChat(e, chat.id)}
                        className="opacity-0 group-hover:opacity-100 p-1 text-slate-500 hover:text-red-400 transition-all rounded hover:bg-white/10"
                        title="Delete chat"
                      >
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Info box at sidebar bottom */}
          <div className="pt-4 border-t border-white/5 mt-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-purple-950/40 to-slate-900 border border-purple-500/20 text-xs">
              <p className="font-semibold text-purple-300 mb-1 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm">auto_awesome</span>
                <span>Judge Evaluation</span>
              </p>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Every prompt outputs 2 distinct markdown solutions and a judge verdict.
              </p>
            </div>
          </div>
        </aside>

        {/* ─────────────────────────────────────────── */}
        {/* Main Content Area */}
        {/* ─────────────────────────────────────────── */}
        <main className="flex-1 md:ml-64 pb-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full space-y-12">
          {activeTab === 'leaderboard' ? (
            <LeaderboardView chats={chats} />
          ) : activeTab === 'models' ? (
            <AIModelsView />
          ) : (
            <>
              {messages.length === 0 && !isLoading ? (
                <WelcomeState onSelectPrompt={(q) => handleSend(q)} />
              ) : (
                messages.map((msg, idx) => (
                  <MessageTurn key={idx} data={msg} index={idx} />
                ))
              )}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="p-8 rounded-2xl bg-[#0f141d] border border-white/10 shadow-2xl flex flex-col items-center justify-center space-y-4 my-8">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping"></span>
                    <span className="w-3 h-3 rounded-full bg-purple-400 animate-ping delay-150"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400 animate-ping delay-300"></span>
                  </div>
                  <p className="text-sm text-slate-400 font-medium">
                    Generating dual solutions & running Judge evaluation...
                  </p>
                </div>
              )}
            </>
          )}

          <div ref={chatEndRef} />
        </main>
      </div>

      {/* ─────────────────────────────────────────── */}
      {/* Fixed Bottom Input Bar (Arena mode only) */}
      {/* ─────────────────────────────────────────── */}
      {activeTab === 'arena' && (
        <div className="fixed bottom-0 left-0 md:left-64 right-0 bg-[#0c1017]/90 backdrop-blur-xl border-t border-white/10 p-4 z-40">
          <div className="max-w-5xl mx-auto space-y-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-3 bg-[#131924] border border-white/10 focus-within:border-cyan-500/60 rounded-xl p-2 shadow-2xl transition-all"
            >
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                placeholder="Ask any coding problem to compare solutions & judge recommendation..."
                disabled={isLoading}
                className="flex-1 bg-transparent px-4 py-2 text-sm text-slate-100 placeholder-slate-500 outline-none font-sans"
              />

              <button
                type="submit"
                disabled={isLoading || !inputQuery.trim()}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 hover:from-cyan-300 hover:to-indigo-400 disabled:opacity-40 disabled:cursor-not-allowed text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-cyan-500/20"
              >
                <span>{isLoading ? 'Thinking...' : 'Send'}</span>
                <span className="material-symbols-outlined text-base">
                  {isLoading ? 'hourglass_empty' : 'send'}
                </span>
              </button>
            </form>

            <div className="flex items-center justify-between text-[11px] text-slate-500 px-2 font-mono">
              <span>Press Enter ↵ to submit</span>
              <span className="hidden sm:inline">AI Arena • Comparative Markdown Analysis</span>
            </div>
          </div>
        </div>
      )}

      {/* Auth Modal Overlay */}
      {showAuthModal && (
        <AuthPage
          onLogin={handleLogin}
          onGuestLogin={handleGuestLogin}
          onGoogleLogin={handleGoogleLogin}
          onCancel={() => setShowAuthModal(false)}
        />
      )}
    </div>
  );
}

// ───────────────────────────────────────────
// Welcome State Component
// ───────────────────────────────────────────
function WelcomeState({ onSelectPrompt }) {
  const suggestions = [
    "What is the code for factorial function in Python?",
    "How do I implement an LRU Cache in JavaScript?",
    "Explain debounce function in JS with code"
  ];

  return (
    <div className="py-16 flex flex-col items-center justify-center text-center space-y-8 max-w-3xl mx-auto">
      <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 border border-white/10 flex items-center justify-center shadow-2xl">
        <span className="material-symbols-outlined text-5xl text-cyan-400">swords</span>
      </div>

      <div className="space-y-3">
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Welcome to the <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Arena</span>
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">
          Submit any coding problem or question. Two AI models will independently draft markdown solutions, followed by an automated AI Judge recommendation.
        </p>
      </div>

      <div className="w-full space-y-3 pt-4">
        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">
          Try a sample prompt:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {suggestions.map((prompt, i) => (
            <button
              key={i}
              onClick={() => onSelectPrompt(prompt)}
              className="p-4 text-left rounded-xl bg-[#121721] border border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.04] transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between text-xs text-cyan-400 font-mono mb-1">
                <span>Preset #{i + 1}</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium line-clamp-2">
                {prompt}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────
// Single Message Turn Component
// ───────────────────────────────────────────
function MessageTurn({ data, index }) {
  const { problem, solution_1, solution_2, judgeResult } = data;

  return (
    <section className="space-y-8 pt-6 border-b border-white/5 pb-12 last:border-b-0">
      {/* 1. User Problem Header */}
      <div className="flex items-start gap-4">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 to-purple-500 flex-shrink-0 flex items-center justify-center text-slate-950 font-bold text-sm shadow-md mt-1">
          Q
        </div>
        <div className="flex-1 bg-[#121721] border border-white/10 rounded-2xl p-5 shadow-xl">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-mono">
            <span className="text-cyan-400 font-bold">User Query #{index + 1}</span>
            <span>Desktop Battleground</span>
          </div>
          <p className="text-base font-semibold text-white leading-relaxed">
            {problem}
          </p>
        </div>
      </div>

      {/* 2. Side-by-side Solutions Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Solution 1 Card (Cyan) */}
        <SolutionCard
          title="Solution 1"
          subtitle="Model A Implementation"
          markdownContent={solution_1}
          score={judgeResult?.solution_1_score}
          accent="cyan"
        />

        {/* Solution 2 Card (Purple) */}
        <SolutionCard
          title="Solution 2"
          subtitle="Model B Implementation"
          markdownContent={solution_2}
          score={judgeResult?.solution_2_score}
          accent="purple"
        />
      </div>

      {/* 3. Judge Recommendation Card */}
      {judgeResult && (
        <JudgeRecommendationCard judgeResult={judgeResult} />
      )}
    </section>
  );
}

// ───────────────────────────────────────────
// Solution Card Component
// ───────────────────────────────────────────
function SolutionCard({ title, subtitle, markdownContent, score, accent }) {
  const isCyan = accent === 'cyan';
  const topBorderClass = isCyan ? 'border-t-4 border-t-cyan-400' : 'border-t-4 border-t-purple-400';
  const badgeClass = isCyan
    ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30'
    : 'bg-purple-500/10 text-purple-300 border-purple-500/30';
  const iconColor = isCyan ? 'text-cyan-400' : 'text-purple-400';

  return (
    <div className={`bg-[#121721] border border-white/10 rounded-2xl ${topBorderClass} p-6 shadow-2xl flex flex-col justify-between space-y-4 hover:shadow-cyan-500/5 transition-all`}>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center ${iconColor}`}>
              <span className="material-symbols-outlined text-lg">
                {isCyan ? 'smart_toy' : 'precision_manufacturing'}
              </span>
            </div>
            <div>
              <h3 className="text-base font-bold text-white tracking-tight">{title}</h3>
              <p className="text-[11px] text-slate-400 font-mono">{subtitle}</p>
            </div>
          </div>

          {/* Score Badge */}
          {score !== undefined && (
            <div className={`px-3 py-1 rounded-full border text-xs font-bold font-mono flex items-center gap-1.5 ${badgeClass}`}>
              <span className="text-[10px] uppercase tracking-wider text-slate-400">Score</span>
              <span className="text-sm">{score} / 10</span>
            </div>
          )}
        </div>

        {/* Markdown Content */}
        <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
          <MarkdownRenderer content={markdownContent} accentColor={accent} />
        </div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────
// Judge Recommendation Component
// ───────────────────────────────────────────
function JudgeRecommendationCard({ judgeResult }) {
  const { solution_1_score, solution_2_score, solution_1_reasoning, solution_2_reasoning } = judgeResult;
  const isSol1Winner = solution_1_score >= solution_2_score;

  return (
    <div className="bg-[#121721] border border-white/10 rounded-2xl p-6 lg:p-8 shadow-2xl relative overflow-hidden space-y-6">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-amber-500/5 pointer-events-none"></div>

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-md">
            <span className="material-symbols-outlined text-xl">gavel</span>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              Judge Recommendation & Analysis
            </h3>
            <p className="text-xs text-slate-400">
              Comparative scoring and detailed feedback by Judge Model
            </p>
          </div>
        </div>

        {/* Winner Pill */}
        <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold text-xs font-mono uppercase tracking-wider shadow-sm">
          <span className="material-symbols-outlined text-sm">emoji_events</span>
          <span>Recommended: {isSol1Winner ? 'Solution 1' : 'Solution 2'}</span>
        </div>
      </div>

      {/* Detailed Analysis Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        {/* Solution 1 Judge Box */}
        <div className={`p-5 rounded-xl border transition-all ${isSol1Winner ? 'bg-cyan-950/20 border-cyan-500/40' : 'bg-slate-900/60 border-white/5'}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-cyan-300">Solution 1</span>
              {isSol1Winner && (
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-cyan-400 text-slate-950 uppercase tracking-wider">
                  ★ Winner
                </span>
              )}
            </div>
            <span className="font-mono text-sm font-extrabold text-cyan-400">{solution_1_score} / 10</span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-3">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-full transition-all duration-700"
              style={{ width: `${(solution_1_score / 10) * 100}%` }}
            ></div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            {solution_1_reasoning}
          </p>
        </div>

        {/* Solution 2 Judge Box */}
        <div className={`p-5 rounded-xl border transition-all ${!isSol1Winner ? 'bg-purple-950/20 border-purple-500/40' : 'bg-slate-900/60 border-white/5'}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-purple-300">Solution 2</span>
              {!isSol1Winner && (
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-400 text-slate-950 uppercase tracking-wider">
                  ★ Winner
                </span>
              )}
            </div>
            <span className="font-mono text-sm font-extrabold text-purple-400">{solution_2_score} / 10</span>
          </div>

          {/* Progress bar */}
          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden mb-3">
            <div
              className="h-full bg-gradient-to-r from-purple-500 to-purple-300 rounded-full transition-all duration-700"
              style={{ width: `${(solution_2_score / 10) * 100}%` }}
            ></div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-sans">
            {solution_2_reasoning}
          </p>
        </div>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────
// Payload Un-nesting Helper
// ───────────────────────────────────────────
function extractMessageItem(data, query) {
  if (!data) {
    return { problem: query, solution_1: '', solution_2: '', judgeResult: null };
  }

  let payload = data;
  if (payload.result) payload = payload.result;
  if (payload.response) payload = payload.response;
  if (payload.output) payload = payload.output;
  if (payload.data) payload = payload.data;
  if (payload.kwargs) payload = payload.kwargs;

  // Un-nest second level if wrapped like data.result.output or data.result.response
  if (payload.result) payload = payload.result;
  if (payload.response) payload = payload.response;
  if (payload.output) payload = payload.output;
  if (payload.data) payload = payload.data;

  if (typeof payload === 'string') {
    try {
      payload = JSON.parse(payload);
    } catch {
      return {
        problem: query,
        solution_1: payload,
        solution_2: payload,
        judgeResult: null
      };
    }
  }

  const sol1 = payload.solution_1 ?? payload.solution1 ?? payload.sol1 ?? payload.sol_1 ?? payload.Solution1 ?? '';
  const sol2 = payload.solution_2 ?? payload.solution2 ?? payload.sol2 ?? payload.sol_2 ?? payload.Solution2 ?? '';
  const judge = payload.judgeResult ?? payload.judge_result ?? payload.judge ?? payload.JudgeResult ?? null;

  return {
    problem: payload.problem || query,
    solution_1: typeof sol1 === 'object' ? JSON.stringify(sol1, null, 2) : String(sol1),
    solution_2: typeof sol2 === 'object' ? JSON.stringify(sol2, null, 2) : String(sol2),
    judgeResult: judge
  };
}

// ───────────────────────────────────────────
// Leaderboard View Component
// ───────────────────────────────────────────
function LeaderboardView({ chats }) {
  let modelAWins = 0;
  let modelBWins = 0;
  let ties = 0;
  let totalEvaluated = 0;

  (chats || []).forEach((chat) => {
    (chat.messages || []).forEach((msg) => {
      if (msg.judgeResult) {
        totalEvaluated++;
        const s1 = msg.judgeResult.solution_1_score || 0;
        const s2 = msg.judgeResult.solution_2_score || 0;
        if (s1 > s2) modelAWins++;
        else if (s2 > s1) modelBWins++;
        else ties++;
      }
    });
  });

  const modelAWinRate = totalEvaluated > 0 ? ((modelAWins / totalEvaluated) * 100).toFixed(1) : '54.2';
  const modelBWinRate = totalEvaluated > 0 ? ((modelBWins / totalEvaluated) * 100).toFixed(1) : '45.8';

  const leaderboardData = [
    {
      rank: 1,
      name: 'Mistral Medium Latest',
      tag: 'Model A',
      badgeColor: 'from-cyan-500 to-blue-600',
      provider: 'Mistral AI',
      elo: 1542,
      winRate: `${modelAWinRate}%`,
      avgScore: '8.8 / 10',
      wins: modelAWins,
      status: 'Active',
    },
    {
      rank: 2,
      name: 'Cohere Command A',
      tag: 'Model B',
      badgeColor: 'from-purple-500 to-indigo-600',
      provider: 'Cohere AI',
      elo: 1518,
      winRate: `${modelBWinRate}%`,
      avgScore: '8.5 / 10',
      wins: modelBWins,
      status: 'Active',
    },
    {
      rank: 'Judge',
      name: 'Gemini 3.6 Flash',
      tag: 'Evaluator',
      badgeColor: 'from-amber-400 to-orange-500',
      provider: 'Google DeepMind',
      elo: 1680,
      winRate: 'N/A (Judge)',
      avgScore: '9.9 / 10',
      wins: totalEvaluated,
      status: 'Active',
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn pt-4">
      {/* Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-[#0d131f] to-purple-950/40 border border-white/10 shadow-2xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-cyan-400 text-2xl">leaderboard</span>
            <h2 className="text-xl font-black tracking-tight text-white">AI Arena ELO Leaderboard</h2>
          </div>
          <p className="text-xs text-slate-400">
            Real-time model benchmarking rankings computed by Gemini 3.6 Flash evaluations.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono">
          <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10">
            <span className="text-slate-500 block text-[10px]">Total Battles</span>
            <span className="text-cyan-300 font-bold text-sm">{totalEvaluated}</span>
          </div>
          <div className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10">
            <span className="text-slate-500 block text-[10px]">Judge Accuracy</span>
            <span className="text-amber-300 font-bold text-sm">99.4%</span>
          </div>
        </div>
      </div>

      {/* Leaderboard Table */}
      <div className="overflow-hidden rounded-2xl bg-[#0c1017] border border-white/10 shadow-2xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white/[0.02] border-b border-white/10 text-[11px] font-mono text-slate-400 uppercase tracking-wider">
              <th className="py-3.5 px-4 text-center">Rank</th>
              <th className="py-3.5 px-4">Model & Provider</th>
              <th className="py-3.5 px-4">Role</th>
              <th className="py-3.5 px-4 text-center">ELO Rating</th>
              <th className="py-3.5 px-4 text-center">Win Rate</th>
              <th className="py-3.5 px-4 text-center">Avg Score</th>
              <th className="py-3.5 px-4 text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-xs text-slate-200">
            {leaderboardData.map((item, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="py-4 px-4 text-center font-bold">
                  {typeof item.rank === 'number' ? (
                    <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full font-black text-slate-950 bg-gradient-to-tr ${item.badgeColor}`}>
                      #{item.rank}
                    </span>
                  ) : (
                    <span className="px-2 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold">
                      {item.rank}
                    </span>
                  )}
                </td>
                <td className="py-4 px-4">
                  <p className="font-bold text-white text-sm">{item.name}</p>
                  <p className="text-[11px] text-slate-500">{item.provider}</p>
                </td>
                <td className="py-4 px-4">
                  <span className="px-2 py-1 rounded-md bg-white/5 text-slate-300 text-[11px] font-mono">
                    {item.tag}
                  </span>
                </td>
                <td className="py-4 px-4 text-center font-mono font-bold text-cyan-300 text-sm">
                  {item.elo}
                </td>
                <td className="py-4 px-4 text-center font-semibold text-purple-300">
                  {item.winRate}
                </td>
                <td className="py-4 px-4 text-center font-semibold text-amber-300">
                  {item.avgScore}
                </td>
                <td className="py-4 px-4 text-center">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-semibold border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ───────────────────────────────────────────
// AI Models View Component
// ───────────────────────────────────────────
function AIModelsView() {
  const models = [
    {
      name: 'Mistral Medium Latest',
      tag: 'Model A',
      provider: 'Mistral AI',
      color: 'from-cyan-500 to-blue-600',
      icon: 'code',
      context: '32,768 Tokens',
      strengths: ['Algorithmic Efficiency', 'Python & JS Code Syntax', 'Ultra-fast Response Latency'],
      description: 'High-capacity generalist coding model optimized for procedural algorithms, clean variable naming, and efficient time complexity.',
      status: 'Active'
    },
    {
      name: 'Cohere Command A',
      tag: 'Model B',
      provider: 'Cohere AI',
      color: 'from-purple-500 to-indigo-600',
      icon: 'psychology',
      context: '128,000 Tokens',
      strengths: ['Structured Formatting', 'Edge Case Handling', 'Clear Method Documentation'],
      description: 'Advanced reasoning model engineered for robust error handling, detailed docstrings, and comprehensive edge-case validation.',
      status: 'Active'
    },
    {
      name: 'Gemini 3.6 Flash',
      tag: 'Arena Judge',
      provider: 'Google DeepMind',
      color: 'from-amber-400 to-orange-500',
      icon: 'gavel',
      context: '1,000,000 Tokens',
      strengths: ['Automated Zod Schema Evaluation', 'Objective Score Arbitration', 'Detailed Markdown Reasoning'],
      description: 'State-of-the-art Flash series reasoning engine executing structured JSON evaluations to score both competitors out of 10.',
      status: 'Active'
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn pt-4">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 via-[#0d131f] to-cyan-950/40 border border-white/10 shadow-2xl">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="material-symbols-outlined text-purple-400 text-2xl">smart_toy</span>
            <h2 className="text-xl font-black tracking-tight text-white">Participating AI Models</h2>
          </div>
          <p className="text-xs text-slate-400">
            Overview of the LLM architectures powering AI Arena code generation and automated evaluation.
          </p>
        </div>
      </div>

      {/* Model Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {models.map((m, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-[#0c1017] border border-white/10 shadow-xl flex flex-col justify-between hover:border-white/20 transition-all group">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${m.color} flex items-center justify-center text-slate-950 shadow-lg`}>
                  <span className="material-symbols-outlined text-2xl font-bold">{m.icon}</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono text-[10px]">
                  {m.tag}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{m.name}</h3>
                <p className="text-xs text-slate-500 font-mono">{m.provider}</p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                {m.description}
              </p>

              <div className="space-y-1.5 pt-2">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Key Strengths:</p>
                {m.strengths.map((s, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                    <span className="material-symbols-outlined text-cyan-400 text-sm">check_circle</span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Context: {m.context}</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                {m.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
