// Скрипт, который проверяет возможность открыть чат с пользователем.
// Для этого пользователь должен быть:
// -Другом
// - Онлайн
// - Без режима не беспокоить

const isOnline = true;
const isFriend = true;
const isDnd = false;

const canOpenChat = isOnline && isFriend && !isDnd;

console.log(`Можно открыть чат?`, canOpenChat);
