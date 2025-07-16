document.addEventListener('DOMContentLoaded', function() {
    
    // ====== Fungsionalitas Animasi 'Fade In' untuk Card ======
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    // ====== Fungsionalitas Modal Gambar Sertifikat (KODE BARU) ======
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const certificateImages = document.querySelectorAll(".certificate-image img");
    const closeModalSpan = document.querySelector(".close-modal");

    certificateImages.forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        }
    });

    closeModalSpan.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});