create TABLE commande(
                        Id_commande VarChar(50)  Not NULL,
                         PRIMARY KEY (Id_commande),
    FOREIGN KEY (Id_car) REFERENCES car(Id_car),
    FOREIGN KEY (Id_user) REFERENCES utilisateur(Id_car),
                        DateInscription TIMESTAMP
                        );