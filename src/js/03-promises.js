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


const refs = {
    form: document.querySelector('.form'),
    delay: document.querySelector('[name="delay"]'),
    step: document.querySelector('[name="step"]'),
    amount: document.querySelector('[name="amount"]'),
  }

  refs.form.addEventListener('submit', onFormSubmit);

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          // Fulfill
          resolve({ position, delay });
        } else {
          // Reject
          reject({ position, delay });
        }
      }, delay);
    });
  }


    function onFormSubmit(event) {
        event.preventDefault();
      
        let delay = Number(refs.delay.value);
        let step = Number(refs.step.value);
        let amount = Number(refs.amount.value);

if (delay <=0 || step < 0 || amount < 0) {
  return Notiflix.Report.warning(
    'Opsss....🧟‍♂️',
    'The number must be greater than 0',
    'Try again'
  );
}
        for (let i = 1; i <= amount; i += 1) {
              let promiseDelay = delay + step * i;
              createPromise(i, promiseDelay)
                    .then(({ position, delay }) => {
                      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
                    })
                    .catch(({ position, delay }) => {
                      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
                    });
                }
              }

