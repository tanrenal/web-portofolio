document.addEventListener('DOMContentLoaded', function() {
    
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            // Jika elemen masuk ke viewport, tambahkan kelas 'visible'
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Pemicu saat 10% elemen terlihat
    });

    // Amati setiap elemen 'card'
    cards.forEach(card => {
        observer.observe(card);
    });

});

// ====== Fungsionalitas Modal Gambar Sertifikat ======

// Dapatkan elemen-elemen yang dibutuhkan
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const certificateImages = document.querySelectorAll(".certificate-image img");
const closeModalSpan = document.querySelector(".close-modal");

// Loop semua gambar sertifikat dan tambahkan event listener
certificateImages.forEach(img => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
});

// Fungsi untuk menutup modal saat tombol (x) di-klik
closeModalSpan.onclick = function() {
    modal.style.display = "none";
}

// Fungsi untuk menutup modal saat area di luar gambar di-klik
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}