document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    const companyName = 'MAS HUNTER';
    const encodedCompanyName = btoa(companyName);
    const encodedYear = btoa(currentYear.toString());
    const copyrightText = `&copy;2024- ${atob(encodedYear)} ${atob(encodedCompanyName)}. All rights reserved.`;

    document.getElementById('copyright').innerHTML = copyrightText;
});
