import chatModel from "../model/chat.model.js";
export async function getUserChats(req, res) {
    try {
        const userId = req.user.id;
        const chats = await chatModel
            .find({ user: userId })
            .sort({ updatedAt: -1 });
        return res.status(200).json({
            success: true,
            chats,
        });
    }
    catch (err) {
        console.error("getUserChats Error:", err);
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}
export async function createOrUpdateChat(req, res) {
    try {
        const userId = req.user.id;
        const { chatId, title, messageItem } = req.body;
        if (!messageItem || !messageItem.problem) {
            return res.status(400).json({
                success: false,
                message: "messageItem with problem text is required",
            });
        }
        let chat;
        if (chatId) {
            chat = await chatModel.findOne({ _id: chatId, user: userId });
        }
        if (chat) {
            chat.messages.push(messageItem);
            if (title && (chat.title === "New Chat" || !chat.title)) {
                chat.title = title;
            }
            await chat.save();
        }
        else {
            chat = await chatModel.create({
                user: userId,
                title: title || messageItem.problem || "New Chat",
                messages: [messageItem],
            });
        }
        return res.status(201).json({
            success: true,
            chat,
        });
    }
    catch (err) {
        console.error("createOrUpdateChat Error:", err);
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}
export async function deleteChat(req, res) {
    try {
        const userId = req.user.id;
        const { id } = req.params;
        const deleted = await chatModel.findOneAndDelete({ _id: id, user: userId });
        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Chat session not found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Chat session deleted successfully",
        });
    }
    catch (err) {
        console.error("deleteChat Error:", err);
        return res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}
//# sourceMappingURL=chat.controller.js.map