console.log('Service Worker Works');
self.addEventListener('push', (e) => {
  console.log('Notification Received');
  const data = e.data.json();
  const promiseChain = self.registration.showNotification(data.title, {
    body: data.message,
    icon:
      'https://res.cloudinary.com/la-puntada/image/upload/v1598177894/otras/la-puntada_p80ogq.ico',
  });

  e.waitUntil(promiseChain);
});

/* self.addEventListener('push', (e) => {
  const data = e.data.json();
  console.log('Notification Received');
  self.registration.showNotification(data.title, {
    body: data.message,
    icon:
      'https://res.cloudinary.com/la-puntada/image/upload/v1598177894/otras/la-puntada_p80ogq.ico',
  });
}); */
