// Скрипт проверки подписки позьзователя при доступе к контенту.
// Есть три типа подписки: free, pro и vip.
// Получить доступ могут только пользователи pro и vip.

const sub = 'pro';

const canAccessContent = sub === 'pro' || sub === 'vip';

// true || false ==> true

// Если позьзователь pro или vip, тогда есть доступ.

console.log(`Есть доступ к контенту?`, canAccessContent);
