using MovieLibrary.Cors;
using MovieLibrary.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace MovieLibrary.Controllers
{
    //[EnableCors("*", "*", "*")]
    public class ValuesController : ApiController
    {
        public ApplicationDbContext db = new ApplicationDbContext();
        // GET api/values
        public IHttpActionResult Get()
        {
            var movies = db.Movies.ToList();
            return Ok(movies);
        }

        // GET api/values/5
        public IHttpActionResult Get(int id)
        {
            var movie = db.Movies.Find(id);
            return Ok(movie);
        }

        // POST api/values
        public IHttpActionResult Post([FromBody] Movie movie)
        {
            db.Movies.Add(movie);
            db.SaveChanges();
            //var updatedMovies = db.Movies.ToList();
            return Ok();
        }

        // PUT api/values/5
        public IHttpActionResult Put(int id, [FromBody]Movie updatedMovie)
        {
            var movieToUpdate = db.Movies.Find(id);
            movieToUpdate.Title = updatedMovie.Title;
            movieToUpdate.Genre = updatedMovie.Genre;
            movieToUpdate.DirectorName = updatedMovie.DirectorName;
            return Ok();
        }

        // DELETE api/values/5
        public IHttpActionResult Delete(int id)
        {
            var movieToDelete = db.Movies.Find(id);
            db.Movies.Remove(movieToDelete);
            return Ok();
        }
    }
}
