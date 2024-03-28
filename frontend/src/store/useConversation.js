import { create } from 'zustand'



const useCnversation = create((set) => ({
    selectConversatin: null,
    setselectedConversation: (selectConversatin) => set({ selectConversatin }),
    messages: [],
    setMessages: (messages) => set({ messages }),

}));

export default useCnversation