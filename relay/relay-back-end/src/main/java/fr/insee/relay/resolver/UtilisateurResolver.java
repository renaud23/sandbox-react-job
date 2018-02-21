package fr.insee.relay.resolver;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.coxautodev.graphql.tools.GraphQLResolver;

import fr.insee.relay.entities.Domaine;
import fr.insee.relay.entities.Utilisateur;
import fr.insee.relay.repositories.UtilisateurRepository;

@Component
public class UtilisateurResolver implements GraphQLResolver<Utilisateur> {

	@Autowired
	private UtilisateurRepository utilisateurRepository;

	public Set<Domaine> getDomaines(Utilisateur utilisateur) {
		return utilisateurRepository.utilisateurAvecDomaines(utilisateur.getIdep()).getDomaines();
	}

}
