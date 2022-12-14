create TABLE admin(
                        Id VarChar(50)  PRIMARY KEY,
                        Username VARCHAR(255) NOT NULL UNIQUE,
                        Nom VARCHAR(30) NOT NULL,
                        Prenom VARCHAR(30) NOT NULL,
    					Email VARCHAR(50) NOT NULL,
                        Adresse VARCHAR(70) NOT NULL,
                        Cin integer(8) NOT NULL,
                        Password VARCHAR(30) NOT NULL,
    					tel integer(8) NOT NULL,
   						Datenissance Date,
   						Sexe VarChar(40),
                        DateInscription TIMESTAMP,
                        UNIQUE(Email,Cin));