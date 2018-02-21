package fr.insee.relay.repositories;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import fr.insee.relay.entities.VariableModele;

public interface VariableModeleRepository extends JpaRepository<VariableModele, Long> {

	@Query("select v from VariableModele v where v.templateOperationnel.id = ?1")
	Set<VariableModele> variableDuTemplateOperationnel(Long templateId);
}
