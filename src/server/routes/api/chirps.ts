import * as express from 'express';
import * as Chirps from '../../utilities/chirpstore'

const router = express.Router();

router.get('/:id?', (req, res, next) => {
    let id = req.params.id;
    if(id) {
        res.send(Chirps.GetChirp(id))
    } else {
        res.send(Chirps.GetChirps())
    }
});

router.post('/', (req, res, next) => {
    let newChirp = req.body;
    Chirps.CreateChirp(newChirp);
    res.send('Ding ding!')
});

router.delete('/:id', (req, res) => {
    let chirpId = req.params.id
    Chirps.DeleteChirp(chirpId);
    res.send(`Chirp ${chirpId} has been deleted!`)
});

router.put('/:id', (req, res) => {
    let chirpId = req.params.id
    Chirps.UpdateChirp(chirpId, req.body) 
        res.send(`Chirp ${chirpId} has been updated!`)
});

export default router;