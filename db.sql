CREATE TABLE restaurants (
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    location VARCHAR(50) NOT NULL,
    price_range INT NOT NULL check(price_range >=1 and price_range <=5)
);

INSERT INTO restaurants(name, location, price_range)
VALUES ('Makedoniko', 'Zografou', 3);
INSERT INTO restaurants(name, location, price_range)
VALUES ('Paradosiako', 'Zografou', 2);
INSERT INTO restaurants(name, location, price_range)
VALUES ('Alliotiko', 'Zografou', 2);