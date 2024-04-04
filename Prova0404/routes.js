import express from 'express';
import sql from 'mssql';
import { sqlConfig } from './server.js';

const pool = new sql.ConnectionPool(sqlConfig)
await pool.connect();
export const routes = express.Router()

routes.get('/', async (req, res)=>{
    try{
        const { recordset } = await pool.query`select * from agendamentos`
        return res.status(200).json(recordset)
    }
    catch(error){
        return res.status(500).json('Falha')
    }
})

routes.post('/agendamento/novo', async (req, res)=>{
    try{
        const { locall, dataa, hora, motivo } = req.body
        await pool.query`insert into agendamentos values(${locall}, ${dataa}, ${hora}, ${motivo} )`
        return res.status(201).json('Ok!')
    }
    catch(error){
        return res.status(501).json('Falha')
    }
})

routes.delete('/agendamento/excluir/:id', async (req, res)=>{
    try{
        const { id } = req.params
        await pool.query`delete from agendamentos where id = ${id}`
        return res.status(201).json('Ok!')
    }
    catch(error){
        console.log(error)
        return res.status(501).json('Falha');
    }
})

export default routes