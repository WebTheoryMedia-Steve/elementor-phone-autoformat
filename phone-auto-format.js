document.addEventListener('DOMContentLoaded', function () {
    var phoneField = document.querySelector('input[type="tel"]');
    
    if (phoneField) {
        // Auto-format the phone number as the user types (000-000-0000 format)
        phoneField.addEventListener('input', function (e) {
            var input = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters
            var formattedInput = '';

            if (input.length > 0) {
                formattedInput = input.substring(0, 3); // First 3 digits
            }
            if (input.length >= 4) {
                formattedInput += '-' + input.substring(3, 6); // Next 3 digits
            }
            if (input.length >= 7) {
                formattedInput += '-' + input.substring(6, 10); // Last 4 digits
            }

            e.target.value = formattedInput; // Set the formatted value back into the input field
        });

        // Set a valid pattern attribute for the phone number field (only digits and dashes allowed)
        phoneField.setAttribute('pattern', '^\\d{3}-\\d{3}-\\d{4}$');
        phoneField.setAttribute('title', 'Phone number must be in the format 000-000-0000');
    }
});
