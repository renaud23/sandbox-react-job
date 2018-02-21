package fr.insee.relay.repositories;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import fr.insee.relay.entities.Operation;

public interface OperationRepository extends JpaRepository<Operation, Long> {

	@Query("select u.operations from Utilisateur u where u.idep = ?1")
	Set<Operation> operationsUtilisateur(String idep);

}
