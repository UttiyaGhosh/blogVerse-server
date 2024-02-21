async function validateCategoryData(req, res, next) {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    next();
}

module.exports = { validateCategoryData };