package fr.insee.relay.repositories;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import fr.insee.relay.entities.Envoi;

public interface EnvoiRepository extends JpaRepository<Envoi, Long> {

	@Query("select e from Envoi e, TemplateOperationnel t where t.operation.id=e.operation.id and t.idepCreation = ?1")
	Set<Envoi> envoisSurTemplatesCrees(String idep);

	@Query("select e from Envoi e, TemplateOperationnel t where t.operation.id=e.operation.id and t.idepDerniereModif = ?1")
	Set<Envoi> envoisSurTemplatesModifies(String idep);

	@Query("select e from Envoi e, TemplateOperationnel t where t.operation.id=e.operation.id and t.idepDerniereModif = ?1 and t.idepCreation = ?2")
	Set<Envoi> envoisSurTemplatesCreesModifiesPar(String idepCreation, String idDerniereModif);

	@Query("select e from Envoi e where e.operation.id = ?1")
	Set<Envoi> envoiDeOperation(Long idOperation);
}
