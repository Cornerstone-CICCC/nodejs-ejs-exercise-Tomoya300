"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const exRouter = (0, express_1.Router)();
exRouter.get('/', (req, res) => {
    console.log('someone visiting the page');
    res.status(200).render('index', {
        title: 'Homepage',
        welcomeMessage: 'Welcome to my awesome homepage!',
        showYear: true
    });
});
exRouter.get('/about', (req, res) => {
    res.status(200).render('about', {
        title: 'About'
    });
});
exRouter.get('/contact', (req, res) => {
    res.status(200).render('contact', {
        title: 'Contact',
        contacts: ['contactus@example.com', '123-456-7890', 'Vancouver, Canada']
    });
});
exports.default = exRouter;
