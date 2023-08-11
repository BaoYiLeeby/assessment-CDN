using CDN_WebApplication1.UserModel;
//using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
//using System.Reflection.Metadata.Ecma335;

namespace CDN_WebApplication1.Controllers
{
    [Route("api/people")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly PeopleContext _peopleContext;

        public PeopleController(PeopleContext peopleContext)
        {
            _peopleContext = peopleContext;
        }

        // GET api/people
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            if (_peopleContext.Users == null)
            {
                return NotFound();
            }
            return await _peopleContext.Users.ToListAsync();
        }

        // GET api/people/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<IEnumerable<User>>> GetUser(int id)
        {
            if (_peopleContext.Users == null)
            {
                return NotFound();
            }
            var user = await _peopleContext.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }
            return await _peopleContext.Users.ToListAsync();
            //return user;
        }

        // POST: api/people
        [HttpPost]
        public async Task<ActionResult<User>> PostMovie(User user)
        {
            _peopleContext.Users.Add(user);
            await _peopleContext.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        // PUT: api/people/1
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUser(int id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _peopleContext.Entry(user).State = EntityState.Modified;

            try
            {
                await _peopleContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        private bool UserExists(long id)
        {
            return (_peopleContext.Users?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        // DELETE: api/people/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            if (_peopleContext.Users == null)
            {
                return NotFound();
            }

            var user = await _peopleContext.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _peopleContext.Users.Remove(user);
            await _peopleContext.SaveChangesAsync();

            return NoContent();
        }
    }
}
