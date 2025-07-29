const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
    return password.length >= 6; // Example: minimum length of 6 characters
};

const paginate = (array, page, pageSize) => {
    return array.slice((page - 1) * pageSize, page * pageSize);
};

module.exports = {
    validateEmail,
    validatePassword,
    paginate,
};