import express from 'express';
let router = express.Router();

/* GET the movie controller */
import {DisplayMovieList, DisplayMovieByID, AddMovie, updateMovie, DeleteMovie } from '../Controllers/movie';


router.get('/',function(req, res, next)
{
   res.render('index', {title: 'Express' });
});




router.get('/list', function(req, res, next)
{
  DisplayMovieList(req, res, next);
});

router.get('/find/:id', function(req, res, next){
       DisplayMovieByID(req, res, next);
});

router.post('/add', function(req, res, next){
  AddMovie(req, res, next);
})


router.put('/update/:id', function(req, res, next){
  updateMovie(req, res, next);
})

router.delete('/delete/:id', function(req, res, next)
{
  DeleteMovie(req, res, next);
})

export default router;
