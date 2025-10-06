// 1. Kap rrugët që nuk ekzistojnë (404 Not Found)
const notFound = (req, res, next) => {
    const error = new Error(`Nuk u Gjet - ${req.originalUrl}`);
    res.status(404);
    next(error); // Kalon te errorHandler me status 404
};

// 2. Trajton të gjitha gabimet e tjera (Gabimet e Serverit)
const errorHandler = (err, req, res, next) => {
    // Nëse statusi është 200, atëherë e bëjmë 500 (Gabim Serveri)
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);

    res.json({
        message: err.message,
        // Në modalitetin 'development', shfaqim Stack Trace; në 'production' jo
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};

export { notFound, errorHandler };