const ipBtn = document.getElementById('copyIpBtn');

if (ipBtn) {
  ipBtn.addEventListener('click', async () => {
    const ip = 'ZentraSmp-8hgk.aternos.me';

    try {
      await navigator.clipboard.writeText(ip);
      const oldText = ipBtn.innerHTML;
      ipBtn.innerHTML = '<span>IP kopyalandı!</span><span class="copy-icon">✓</span>';

      setTimeout(() => {
        ipBtn.innerHTML = oldText;
      }, 1200);
    } catch (error) {
      alert('IP Adresi: ' + ip);
    }
  });
}
