
// NetCheck v2 export extension — adds free-form data input support
(function() {
  'use strict';

  // Read free-form input on load
  window._freeFormData = '';
  const freeInput = document.getElementById('free-form-input');
  if (freeInput) {
    freeInput.addEventListener('input', function() {
      window._freeFormData = this.value.trim();
    });
  }

  // Override CSV export to include free-form notes
  const originalExportCSV = window.exportCSV;
  window.exportCSV = function() {
    const btn = document.getElementById('btn-csv');
    const originalText = btn ? btn.innerHTML : '';
    if (btn) {
      btn.innerHTML = '⏳ Preparing CSV...';
      btn.disabled = true;
    }

    try {
      const data = window._netcheckData || {};
      if (window._freeFormData) {
        data['free_form_notes'] = { label: 'Free Form Notes (v2 input)', value: window._freeFormData };
      }

      if (originalExportCSV) {
        const saved = window._netcheckData;
        window._netcheckData = data;
        originalExportCSV();
        window._netcheckData = saved;
      } else {
        let csv = 'Category,Value\n';
        for (const key in data) {
          const row = data[key];
          const val = (row.value || '').replace(/"/g, '""');
          csv += '"' + (row.label || key) + '","' + val + '"\n';
        }
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'netcheck-v2-' + new Date().toISOString().slice(0,10) + '.csv';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
          a.remove();
          URL.revokeObjectURL(url);
        }, 2000);
      }

      if (btn) btn.innerHTML = '✅ CSV downloaded!';
    } catch (error) {
      if (btn) btn.innerHTML = '❌ Export failed';
      alert('CSV export failed: ' + error.message);
    } finally {
      setTimeout(function() {
        if (btn) {
          btn.innerHTML = originalText;
          btn.disabled = false;
        }
      }, 2500);
    }
  };

  // Override PDF export to include free-form notes
  const originalExportPDF = window.exportPDF;
  window.exportPDF = function() {
    if (window._freeFormData && window._netcheckData) {
      const tempKey = 'free_form_notes';
      window._netcheckData[tempKey] = {
        label: 'Free Form Notes (v2 input)',
        value: window._freeFormData
      };
    }
    if (originalExportPDF) {
      originalExportPDF();
    }
  };
})();
