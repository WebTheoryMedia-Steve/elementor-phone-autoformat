document.addEventListener('DOMContentLoaded', function () {
    var phoneField = document.querySelector('input[type="tel"]');
    
    if (phoneField) {
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

        // Add pattern validation for phone numbers
        phoneField.setAttribute('pattern', '^[0-9\\(\\)\\-\\+\\s]*$');
        phoneField.setAttribute('title', 'Phone number must be in the format 000-000-0000');
    }
});
