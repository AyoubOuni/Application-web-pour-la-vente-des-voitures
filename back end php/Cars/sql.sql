   create TABLE car(
                      Id Varchar(50)  PRIMARY KEY,
                        Marque VARCHAR(30) NOT NULL,
                        Modele VARCHAR(30) NOT NULL,
    					Annee INT(4) Unsigned NOT NULL,
    					price VARCHAR(15) NOT NULL,
                        Energie VARCHAR(70) NOT NULL,
                        Boite VARCHAR(30)  NOT NULL,
    					Puissance integer(4) NOT NULL,
   						Nombre_porte integer(3),
   						nombre_vue int(11) default 0,
                        url VARCHAR(200) ,
                        DateInscription TIMESTAMP);