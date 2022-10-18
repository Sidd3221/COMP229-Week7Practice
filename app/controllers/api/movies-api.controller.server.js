import movies from '../../models/movies.js';
import movieModels from '../../models/movies.js';

export function GetList(req, res, next) {
    movieModels.find((err, moviesCollection) =>{
        if(err){
            console.error(err);
            res.end(err);
        }
        res.json({success: true, msg: 'Success', movies: moviesCollection, user: req.user});
    })
}

export function Get(req, res, next){
    let id = req.params.id;

    movieModels.findById(id, (err, movie) => {
        if(err){
            console.error(err);
            res.end(err);
        }
        res.json({success: true, msg: 'Success', movie, user: req.user});
    });
}

export function Add(req, res, next){
    let newMovie = new movieModels({
        ...req.body
    });

    movieModels.create(newMovie, (err, movie) => {
        if(err){
            console.error(err);
            res.end(err);
        }
        res.json({success: true, msg: 'Success', newMovie})
    })
}

export function Edit(req, res, next){
    let id  = req.params.id;

    let updatedMovie = new movieModels({
        "_id": id,
        ...req.body
    });

    movieModels.updateOne({_id: id}, updatedMovie, (err) =>{
        if(err){
            console.error(err);
            res.end(err);
        }
        res.json({success: true, msg: 'Success', updatedMovie});
    })
}

export function Delete(req, res, next){
    let id = req.params.id;

    movieModels.remove({_id: id}, (err) =>{
        if(err){
            console.error(err);
            res.end(err);
        }
        res.json({success: true, msg: 'Success',});
    })
}