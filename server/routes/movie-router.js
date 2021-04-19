const moviesRouter=require('express').Router()
const movieCtrl = require('../controllers/movie-ctrl')

moviesRouter.get('/all',movieCtrl.getAllMovies)

moviesRouter.post('/saveMovie',movieCtrl.saveMovie)

moviesRouter.get('/movie/:id',movieCtrl.getMovieById)

moviesRouter.delete('/movie/:id',movieCtrl.deleteMovieById)

moviesRouter.put('/movie/:id',movieCtrl.updateMovie)

module.exports= moviesRouter;
