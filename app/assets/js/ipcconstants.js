// 퐁허브용 Azure 앱 등록의 '애플리케이션(클라이언트) ID'.
// Mojang 의 마인크래프트 API 사용 승인을 받은 앱이어야 로그인이 됩니다.
// SEE https://github.com/dscalzi/HeliosLauncher/blob/master/docs/MicrosoftAuth.md
exports.AZURE_CLIENT_ID = '0ee052f4-b8b9-4ab4-8bff-4b857817b56a'


// Opcodes
exports.MSFT_OPCODE = {
    OPEN_LOGIN: 'MSFT_AUTH_OPEN_LOGIN',
    OPEN_LOGOUT: 'MSFT_AUTH_OPEN_LOGOUT',
    REPLY_LOGIN: 'MSFT_AUTH_REPLY_LOGIN',
    REPLY_LOGOUT: 'MSFT_AUTH_REPLY_LOGOUT'
}
// Reply types for REPLY opcode.
exports.MSFT_REPLY_TYPE = {
    SUCCESS: 'MSFT_AUTH_REPLY_SUCCESS',
    ERROR: 'MSFT_AUTH_REPLY_ERROR'
}
// Error types for ERROR reply.
exports.MSFT_ERROR = {
    ALREADY_OPEN: 'MSFT_AUTH_ERR_ALREADY_OPEN',
    NOT_FINISHED: 'MSFT_AUTH_ERR_NOT_FINISHED'
}

exports.SHELL_OPCODE = {
    TRASH_ITEM: 'TRASH_ITEM'
}