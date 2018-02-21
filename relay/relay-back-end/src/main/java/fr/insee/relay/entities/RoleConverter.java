package fr.insee.relay.entities;

import javax.persistence.AttributeConverter;

public class RoleConverter implements AttributeConverter<Role, String> {

    @Override
    public String convertToDatabaseColumn(Role role) {
        switch (role) {
        case ADMINISTRATEUR:
            return "admin";
        case GESTIONNAIRE_DOMAINES:
            return "gdom";
        case GESTIONNAIRE_OPERATIONS:
            return "gope";
        }
        return null;
    }

    @Override
    public Role convertToEntityAttribute(String dbData) {
        switch (dbData) {
        case "admin":
            return Role.ADMINISTRATEUR;
        case "gdom":
            return Role.GESTIONNAIRE_DOMAINES;
        case "gope":
            return Role.GESTIONNAIRE_OPERATIONS;
        }
        return null;
    }
}
