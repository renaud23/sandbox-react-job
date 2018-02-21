package fr.insee.relay.entities;

import java.util.Arrays;
import java.util.stream.Collectors;

import javax.persistence.AttributeConverter;

public class TagsConverter implements AttributeConverter<String[], String> {

    @Override
    public String convertToDatabaseColumn(String[] tags) {
        return Arrays.stream(tags)
            .map(String::trim)
            .collect(Collectors.joining(", "));
    }

    @Override
    public String[] convertToEntityAttribute(String dbData) {
        if(dbData == null) {
            return null;
        }
        return Arrays.stream(dbData.split(","))
            .map(String::trim)
            .toArray(String[]::new);
    }
}
