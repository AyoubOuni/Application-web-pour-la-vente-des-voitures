   create TABLE user(
                      Id Varchar(50)  PRIMARY KEY,
                        Nom VARCHAR(30) NOT NULL,
                        Prenom VARCHAR(30) NOT NULL,
    					Email VARCHAR(50) NOT NULL,
    					Password VARCHAR(50) NOT NULL,
                        Adresse VARCHAR(70) NOT NULL,
                        Cin integer(8) NOT NULL,
    					tel integer(8) NOT NULL,
   						Datenissance Date,
   						Sexe VarChar(40),
                        url VARCHAR(100) ,
                        DateInscription TIMESTAMP,
                        UNIQUE(Email,Cin));