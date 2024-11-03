import express, { Request, Response, Router } from 'express'


const router: Router = express.Router()

// Network endpoints
router.get('/networks', (req:Request, res:Response) => { listNetworks(req,res) })
router.post('/network', (req:Request, res:Response) => { createNetwork(req,res) })
router.post('/network/:id/start', (req:Request, res:Response) => { startNetwork(req,res) })
router.post('/network/:id/stop', (req:Request, res:Response) => { stopNetwork(req,res) })
router.delete('/network/:id', (req:Request, res:Response) => { deleteNetwork(req,res) })

//Node endpoints
router.post('node/:id', (req:Request, res:Response) => { addNode(req,res) })
router.delete('node/:id', (req:Request, res:Response) => { deleteNode(req,res) })

export default router