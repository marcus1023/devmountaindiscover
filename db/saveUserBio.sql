UPDATE users
SET userbio = $1
WHERE email = $2;
