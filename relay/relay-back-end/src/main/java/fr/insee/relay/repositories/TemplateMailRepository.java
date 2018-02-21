package fr.insee.relay.repositories;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import fr.insee.relay.entities.TemplateMail;

public interface TemplateMailRepository extends JpaRepository<TemplateMail, Long> {

	@Query("select t from TemplateMail t where t.templateModele.domaine.id = ?1")
	Set<TemplateMail> templatesDuDomaine(Long domaineId);

	@Query("select t.templateMail from TemplateOperationnel t where t.operation.id = ?1")
	Set<TemplateMail> templatesDeOperation(Long operationId);
}
