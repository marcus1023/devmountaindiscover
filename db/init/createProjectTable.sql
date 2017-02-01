create table if not exists project(
  id serial primary key,
  userid references user.id on delete cascade,
  ...other junk
)
