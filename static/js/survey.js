document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const submitButtons = form.querySelectorAll('button[type="submit"]');
      submitButtons.forEach((button) => {
        button.disabled = true;
        button.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Opening Survey...';
      });

      form.classList.add('animate-fade-out');
      setTimeout(() => form.submit(), 220);
    });
  });

  const cards = document.querySelectorAll('.survey-card');
  cards.forEach((card, index) => {
    card.style.setProperty('--card-delay', `${index * 80}ms`);
    card.classList.add('is-ready');
  });
});
