package fr.insee.relay.resolver;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;

import fr.insee.relay.entities.Utilisateur;
import fr.insee.relay.repositories.UtilisateurRepository;

@Component
public class UtilisateurQuery implements GraphQLQueryResolver {

	@Autowired
	private UtilisateurRepository utilisateurRepository;

	public Utilisateur trouverUtilisateur(String idep) {
		return utilisateurRepository.findOne(idep);
	}

	public Utilisateur trouverUtilisateurAvecDomaines(String idep) {
		return utilisateurRepository.utilisateurAvecDomaines(idep);
	}

}
