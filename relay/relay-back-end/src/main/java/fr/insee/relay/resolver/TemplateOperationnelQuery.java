package fr.insee.relay.resolver;

import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;

import fr.insee.relay.entities.TemplateOperationnel;
import fr.insee.relay.repositories.TemplateOperationnelRepository;

@Component
public class TemplateOperationnelQuery implements GraphQLQueryResolver {

	@Autowired
	private TemplateOperationnelRepository templateOperationnelRepository;

	public Set<TemplateOperationnel> templatesOperationnelsUtilisateur(String idep) {
		return Stream.concat(templateOperationnelRepository.templatesUtilisateur(idep).stream(), templateOperationnelRepository.templatesModifiePar(idep).stream()).collect(Collectors.toSet());
	}
}
