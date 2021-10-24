CREATE TABLE gallery ( "id" SERIAL PRIMARY KEY, "path" VARCHAR(80) NOT NULL, "description" VARCHAR(80), "likes" INT );

INSERT INTO "gallery" ("path", "description", "likes") 
VALUES 
('images/mississippi.jpeg', 'Photo of the Mississippi river I took on a bike trip earilier this year.', 0),
('images/bike_bike.jpeg', 'Photo of my bike taken at one of my favorite bridges in Saint Paul.', 0),
('images/la_familia.jpeg', 'A photo of La Sagrada Familia I took while on a trip to spain in 2019.', 0),
('images/gradu.jpeg', 'A photo of my parents and I at my graduation.', 0),
('images/cute_dog.jpg', 'Photo of my dog wearing a tie during christmas time.', 0);