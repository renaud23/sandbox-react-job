package fr.insee.relay.entities;

import javax.persistence.AttributeConverter;

public class EtatConverter implements AttributeConverter<Etat, Integer> {

    @Override
    public Integer convertToDatabaseColumn(Etat etat) {
        switch (etat) {
        case NON_TRAITE:
            return 1;
        case EN_COURS:
            return 2;
        case TRAITE:
            return 3;
        case EN_ERREUR:
            return 3;
        }
        return null;
    }

    @Override
    public Etat convertToEntityAttribute(Integer dbData) {
        switch (dbData) {
        case 1:
            return Etat.NON_TRAITE;
        case 2:
            return Etat.EN_COURS;
        case 3:
            return Etat.TRAITE;
        case 4:
            return Etat.EN_ERREUR;
        }
        return null;
    }
}
