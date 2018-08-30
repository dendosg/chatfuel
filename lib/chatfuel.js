const chatfuel = {
    sendText({ text }) {
        return { text }
    },
    sendImage({ url }) {
        return this._sendAttachment({ type: 'image', payload: { url } })
    },
    sendVideo({ url }) {
        return this._sendAttachment({ type: 'video', payload: { url } })
    },
    sendAudio({ url }) {
        return this._sendAttachment({ type: 'audio', payload: { url } })
    },
    sendFile({ url }) {
        return this._sendAttachment({ type: 'file', payload: { url } })
    },
    sendGalleries({ elements }) {
        return this._sendAttachment({
            type: 'template', payload: { template_type: 'generic', image_aspect_ratio: 'square', elements }
        })
    },
    sendLists({ elements }) {
        return this._sendAttachment({
            type: 'template', payload: { template_type: 'list', top_element_style: 'compact', elements }
        })
    },
    sendReceipts() { },
    createElement({ title, image_url, subtitle, buttons }) {
        return { title, image_url, subtitle, buttons }
    },
    createButtonToBlock({ title, block_names, set_attributes }) {
        return { type: 'show_block', block_names, title, set_attributes }
    },
    createButtonToURL({ url, title }) {
        return { type: 'web_url', url, title }
    },
    createPostBackButton({ url, title }) {
        return { type: 'json_plugin_url', url, title }
    },
    createCallButton({ phone_number, title }) {
        return { type: 'phone_number', phone_number, title }
    },
    createShareButton() {
        return { type: 'element_share' }
    },
    createQuickReply({ text, quick_replies }) {
        return { text, quick_replies }
    },
    createQuickReplyButton({ title, block_names }) {
        return { title, block_names }
    },
    _sendAttachment({ type, payload }) {
        return { attachment: { type, payload } }
    }
}
module.exports = chatfuel
