document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Validación de email
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa un email válido');
            return;
        }

        // Validación de campos vacíos
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        
        if (!name || !message) {
            alert('Por favor, completa todos los campos');
            return;
        }

        // Mostrar modal
        const modal = new bootstrap.Modal(document.getElementById('successModal'));
        modal.show();
        
        // Resetear formulario
        form.reset();
    });

    // Smooth scroll para los enlaces del navbar
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});