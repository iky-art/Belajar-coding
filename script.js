// HAMBURGER TOGGLE
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('navToggle');
    const menu = document.getElementById('navMenu');

    if (toggle && menu) {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            menu.classList.toggle('show');
        });

        // Tutup menu kalau klik link
        menu.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                toggle.classList.remove('active');
                menu.classList.remove('show');
            });
        });
    }

    // Active link sesuai halaman
    const current = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(function(link) {
        if (link.getAttribute('href') === current) {
            link.classList.add('active');
        }
    });
});

// FUNGSI JAWABAN
function tampilkanJawaban(id) {
    const el = document.getElementById(id);
    if (el) {
        if (el.style.display === 'none' || el.style.display === '') {
            el.style.display = 'block';
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            el.style.display = 'none';
        }
    }
}

// FUNGSI BAB 5
function ubahTeks() {
    const el = document.getElementById('demoJS');
    if (el) {
        el.innerHTML = 'Teks berhasil diubah!';
        el.style.background = '#e8f8f0';
        el.style.borderColor = '#00b894';
    }
}

function resetTeks() {
    const el = document.getElementById('demoJS');
    if (el) {
        el.innerHTML = 'Teks ini bakal berubah';
        el.style.background = '#f0f0f5';
        el.style.borderColor = '#ddd';
    }
}

function hitung() {
    const el = document.getElementById('hasilHitung');
    if (el) {
        const a = 10, b = 5;
        el.innerHTML = 'Hasil: ' + a + ' + ' + b + ' = ' + (a + b);
        el.style.color = '#8be9fd';
    }
}

// CONSOLE
console.log('Belajar RPL dari Nol');
console.log('10 Bab siap dipelajari');
