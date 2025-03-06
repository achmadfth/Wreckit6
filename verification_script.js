document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("verificationForm");
  const resendLink = document.getElementById("resendCode");

  // Simulasi verifikasi kode (ganti dengan logika backend)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const code = document.getElementById("code").value;

    if (code.length === 6 && /^\d+$/.test(code)) {
      alert("Verifikasi berhasil! Akun Anda telah aktif.");
      window.location.href = "log.html";
    } else {
      alert("Kode tidak valid! Harap masukkan 6 digit angka.");
    }
  });

  // Simulasi kirim ulang kode
  resendLink.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Kode verifikasi baru telah dikirim ke email Anda!");
  });
});
