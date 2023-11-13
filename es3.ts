import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/es-SQL");

const setupDB = async () => {
  await db.none(`
    CREATE TABLE IF NOT EXISTS books (
        book_id INTEGER PRIMARY KEY,
        title TEXT NOT NULL,
        author TEXT NOT NULL,
        genre TEXT NOT NULL,
        published_year INTEGER,
        isbn INTEGER,
        price FLOAT,
        rating FLOAT,
        stock_count INTEGER
    );`);
  await db.none(
    `INSERT INTO books VALUES ('${1}','A Journey to the Center','Jules Verne','Adventure','${1864}', '123456789','${12.99}','${4.5}','${10}','Verne Publishing','${350}')`
  );
  await db.none(
    `INSERT INTO books VALUES ('${2}','War And Peace','Lev Tolstoy','Historical','${1869}','123456790','${14.99}','${4.8}','${5}','Tolstoy Prints','${1200}')`
  );
  await db.none(
    `INSERT INTO books VALUES ('${3}','Whispers of the Wind','Amelia Blackburn','Romance','${1982}','${123456791}','${9.99}','${4.2}','${20}','BlackBourn House','${275}')`
  );
  await db.none(
    `INSERT INTO books VALUES ('${4}','The Galactic Odyssey','Orion Starfield','Science Fiction','${2005}','${123456792}','${19.99}','${4.9}','${15}','Nebula Press',${450})`
  );
};

setupDB();
