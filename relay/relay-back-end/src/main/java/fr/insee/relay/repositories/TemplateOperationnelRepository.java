package fr.insee.relay.repositories;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import fr.insee.relay.entities.TemplateOperationnel;

public interface TemplateOperationnelRepository extends JpaRepository<TemplateOperationnel, Long> {

	@Query("select t from TemplateOperationnel t where t.operation.id = ?1")
	Set<TemplateOperationnel> templatesDeOperation(Long operationId);

	@Query("select t from TemplateOperationnel t where t.idepCreation = ?1")
	Set<TemplateOperationnel> templatesUtilisateur(String idep);

	@Query("select t from TemplateOperationnel t where t.idepDerniereModif = ?1")
	Set<TemplateOperationnel> templatesModifiePar(String idep);

	@Query("select t from TemplateOperationnel t where t.idepDerniereModif = ?1 and t.idepDerniereModif = ?2")
	Set<TemplateOperationnel> templatesCreeParModifiePar(String idepCreation, String idDerniereModif);

}
