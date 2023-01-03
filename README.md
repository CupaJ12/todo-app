# Project Name

#SQL:

CREATE TABLE "tasks" (
	"id" SERIAL PRIMARY KEY,
	"description" VARCHAR(200) NOT NULL, 
	"completed" BOOLEAN DEFAULT FALSE,
	"published" TIMESTAMP DEFAULT NOW(),
);



## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
