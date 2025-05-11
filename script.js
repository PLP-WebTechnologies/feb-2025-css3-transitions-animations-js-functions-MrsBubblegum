 // Load saved preferences on page load
        window.onload = () => {
            const theme = localStorage.getItem('theme') || 'light';
            const fontSize = localStorage.getItem('fontSize') || 'medium';

            applyTheme(theme);
            applyFontSize(fontSize);

            // Set dropdown value to match
            document.getElementById('fontSize').value = fontSize;
        };

        function toggleTheme() {
            const currentTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            applyTheme(currentTheme);
            localStorage.setItem('theme', currentTheme);
        }

        function applyTheme(theme) {
            if (theme === 'dark') {
                document.body.classList.add('dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
            }
        }

        function changeFontSize(size) {
            applyFontSize(size);
            localStorage.setItem('fontSize', size);
        }

        function applyFontSize(size) {
            document.body.classList.remove('small-font', 'medium-font', 'large-font');
            document.body.classList.add(`${size}-font`);
        }

        function animateImage() {
            const img = document.getElementById('logo');
            img.classList.remove('spin');
            void img.offsetWidth; // Trigger reflow
            img.classList.add('spin');
        }