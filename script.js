// ============================================
// TOGGLE NAVBAR MOBILE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
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
        demo.style.background = '#c6f6d5';
        demo.style.borderColor = '#48bb78';
    }
}

function resetTeks() {
    const demo = document.getElementById('demoJS');
    if (demo) {
        demo.innerHTML = 'Teks ini akan berubah saat tombol ditekan';
        demo.style.background = '#edf2f7';
        demo.style.borderColor = '#4fc3f7';
    }
}

function hitung() {
    const hasil = document.getElementById('hasilHitung');
    if (hasil) {
        let a = 10;
        let b = 5;
        let total = a + b;
        hasil.innerHTML = `✅ Hasil: ${a} + ${b} = ${total}`;
        hasil.style.color = '#48bb78';
    }
}

// ============================================
// SCROLL ANIMASI
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const babSections = document.querySelectorAll('.bab');
    babSections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });
});

// ============================================
// CONSOLE WELCOME
// ============================================
console.log('🚀 Selamat belajar pemrograman dari nol!');
console.log('📚 10 Bab siap untuk dipelajari');
console.log('💻 Jangan lupa praktik langsung!');
console.log('📖 Tekan tombol "Lihat Jawaban" untuk melihat solusi');
