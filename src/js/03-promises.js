// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }
// підключення та імпорт бібліотек
import { Notify } from 'notiflix/build/notiflix-notify-aio';

          import Notiflix from 'notiflix';

          const form = document.querySelector('.form');
          
          form.addEventListener('submit', (event) => {
            event.preventDefault();

            const delay = Number(form.elements.delay.value);
            const step = Number(form.elements.step.value);
            const amount = Number(form.elements.amount.value);
          
            if (delay <= 0 || step < 0 || amount < 0) {
              return Notiflix.Report.warning(
                'Opsss....🧟‍♂️',
                'The number must be greater than 0',
                'Try again'
              );
            }
          
            for (let i = 0; i < amount; i++) {
              createPromise(i, delay + step * i)
                .then(({ position, delay }) => {
                  Notiflix.Notify.success(
                    `✅ Fulfilled promise ${position} in ${delay}ms`
                  );
                })
                .catch(({ position, delay }) => {
                  Notiflix.Notify.failure(
                    `❌ Rejected promise ${position} in ${delay}ms`
                  );
                });
            }
          });
          
          function createPromise(position, delay) {
            return new Promise((res, rej) => {
              const shouldResolve = Math.random() > 0.3;
          
              setTimeout(() => {
                if (shouldResolve) {
                  // Fulfill
                  res({ position, delay });
                } else {
                  // Reject
                  rej({ position, delay });
                }
              }, delay);
            });
          }