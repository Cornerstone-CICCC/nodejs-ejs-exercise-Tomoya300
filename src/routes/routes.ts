import { Router, Request, Response } from 'express'

const exRouter = Router()

exRouter.get('/', (req: Request, res: Response) => {
    console.log('someone visiting the page')
    res.status(200).render('index', {
        title: 'Homepage',
        welcomeMessage: 'Welcome to my awesome homepage!',
        showYear: true
    })
})

exRouter.get('/about', (req: Request, res: Response) => {
    res.status(200).render('about', {
        title: 'About'
    })
})

exRouter.get('/contact', (req: Request, res: Response) => {
    res.status(200).render('contact', {
        title: 'Contact',
        contacts: ['contactus@example.com', '123-456-7890', 'Vancouver, Canada']
    })
})

export default exRouter