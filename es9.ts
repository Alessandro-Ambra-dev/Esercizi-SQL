import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/titanic");

const setupDB = async () => {
  // FEMALE PASSENGERS OVER 30 AND SURIVED
  await db.none(`SELECT * FROM tested WHERE c5="female" AND c6 >30 AND c2= 1`);

  // avg age of  dead man
  await db.none(
    `SELECT AVG(C6) AS [Avg_Age] FROM tested WHERE c5="male" AND c2= 0`
  );

  // PRICE BETWENN 20 AND 75 AND PORT= C
  await db.none(
    `SELECT * FROM tested  WHERE c10 BETWEEN 20 AND 50 AND c12= "C"`
  );

  //total survivors in 1st class
  await db.none(`SELECT SUM(c2)FROM tested WHERE c2= 1 AND c3= 1`);

  //passengers from port c who paid more than 75$
  await db.none(`SELECT * FROM tested WHERE c12= "C" AND c10 >75`);
};

setupDB();
