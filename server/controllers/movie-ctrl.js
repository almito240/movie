
 const movieModel=require('../models/movie-model');


async function getAllMovies(req, res){

      await movieModel.find({},( err, results)=>{
          console.log(err);
            if(err){
                
                res.status(400).json({success:false,error:err})
            };
            if(!results.length){
                res.status(404).json({success:false,message:"No movies available"})
            }
            console.log('results:', JSON.stringify(results));
            res.status(200).json({success:true, data:results})
        })
}

async function saveMovie(req, res){
const newMovie=req.body.movie;
    await movieModel.insertMany(newMovie,err=>{

        if (err) throw err

        res.status(200).json({success:true,newMovie:newMovie,message:"movie is save"})
        
    })
}

async function getMovieById(req, res){
   await movieModel.findById(req.params.id,(err, movieItem)=>{
        if (err) throw err;
        res.status(200).json({success:true,data:movieItem})
    
})
}

async function deleteMovieById(req, res){
   await movieModel.findByIdAndRemove(req.params.id, (err, doc)=>{
        if (err) throw err;
        res.status(200).json({success:true,data:doc})
})
}

async function updateMovie(req, res){
   await movieModel.findByIdAndUpdate(req.params.id, req.body.movie ,(err, doc)=>{
        if (err) throw err;
        res.status(300).json({success:true,data:doc,message:'update good'})

})
}


module.exports = {getAllMovies,saveMovie,getMovieById,deleteMovieById,updateMovie};