# 20 Jan 2022

## current state:

database table scripts wroking. database seeded. the getall route is accessible and called the select statmeent which returns an array of buddysearch objects.

## still to do:

-   edit package.json to include the master run script, so i can run all the database scripts together, in the correct order for the foreign keys:

```
"db-create-all-tables": "npm run db-create-users-table && npm run db-create-gardens-table && npm run db-create-emojis-table",
```

-   write the POST SQL statement (to insert one record into the buddy search table - ASSUME the user is already set up) - model

-   write the POST route (to insert one user)- route

-   deploy to heroku (eek!)
