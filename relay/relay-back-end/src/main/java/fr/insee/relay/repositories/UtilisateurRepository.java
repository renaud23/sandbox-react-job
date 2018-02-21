package fr.insee.relay.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import fr.insee.relay.entities.Role;
import fr.insee.relay.entities.Utilisateur;

public interface UtilisateurRepository extends JpaRepository<Utilisateur, String> {

	Utilisateur findByIdep(String idep);

	List<Utilisateur> findByRole(Role role);

	@Query("select u from Utilisateur u left join fetch u.operations where u.id = ?1")
	Utilisateur utilisateurAvecOperations(String idep);

	@Query("select u from Utilisateur u left join fetch u.domaines where u.id = ?1")
	Utilisateur utilisateurAvecDomaines(String idep);

}
