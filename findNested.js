db = connect("localhost/films")

use films

db.film.find({"year":{$gt:2000}},{"title":1,_id:0,"year":1}).sort({"title":1})