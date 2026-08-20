// ============================================
// TOGGLE NAVBAR MOBILE - HAMBURGER KE X
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            // Toggle class active untuk hamburger -> X
            this.classList.toggle('active');
            // Toggle class show untuk menu
            navMenu.classList.toggle('show');
        });

        // Tutup menu saat klik link di mobile
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('show');
            });
        });
    }

    // ============================================
    // ACTIVE LINK HIGHLIGHT
    // ============================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(function(link) {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

// ============================================
// FUNGSI TAMPILKAN JAWABAN
// ============================================
function tampilkanJawaban(id) {
    const jawaban = document.getElementById(id);
    if (jawaban) {
        if (jawaban.style.display === 'none' || jawaban.style.display === '') {
            jawaban.style.display = 'block';
            jawaban.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            jawaban.style.display = 'none';
        }
    }
}

// ============================================
// FUNGSI UNTUK BAB 5 (JavaScript Interaktif)
// ============================================
function ubahTeks() {
    const demo = document.getElementById('demoJS');
    if (demo) {
        demo.innerHTML = '✅ Teks berhasil diubah menggunakan JavaScript!';
        demo.style.background = '#e8f8f0';
        demo.style.borderColor = '#00b894';
        demo.style.color = '#1a1a2e';
    }
}

function resetTeks() {
    const demo = document.getElementById('demoJS');
    if (demo) {
        demo.innerHTML = 'Teks ini akan berubah saat tombol ditekan';
        demo.style.background = '#f8f9fd';
        demo.style.borderColor = '#6c5ce7';
        demo.style.color = '#4a4a6a';
    }
}

function hitung() {
    const hasil = document.getElementById('hasilHitung');
    if (hasil) {
        const a = 10;
        const b = 5;
        const total = a + b;
        hasil.innerHTML = `Hasil: ${a} + ${b} = ${total}`;
        hasil.style.color = '#00b894';
    }
}

// ============================================
// SCROLL ANIMASI
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const babSections = document.querySelectorAll('.bab');
    babSections.forEach(function(section, index) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(24px)';
        section.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';

        setTimeout(function() {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 120 + (index * 100));
    });
});

// ============================================
// CONSOLE WELCOME
// ============================================
console.log('Belajar Pemrograman Dari Nol');
console.log('10 Bab siap dipelajari');
console.log('Selamat belajar!');
