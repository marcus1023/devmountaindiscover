UPDATE users
SET githubuser = $1, gitrepos = $2
WHERE email = $3;
