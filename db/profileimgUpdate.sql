UPDATE users
SET profileimage = $1
WHERE email = $2;
