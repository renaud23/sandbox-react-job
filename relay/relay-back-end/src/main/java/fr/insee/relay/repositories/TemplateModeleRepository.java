package fr.insee.relay.repositories;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import fr.insee.relay.entities.TemplateModele;

public interface TemplateModeleRepository extends JpaRepository<TemplateModele, Long> {

	@Query("select t from TemplateModele t where t.domaine.id = ?1")
	Set<TemplateModele> templatesDuDomaine(Long domaineId);

	@Query("select t from TemplateModele t where t.idepCreation = ?1")
	Set<TemplateModele> templatesUtilisateur(String idep);

	@Query("select t from TemplateModele t where t.idepDerniereModif = ?1")
	Set<TemplateModele> templatesModifiePar(String idep);

	@Query("select t from TemplateModele t where t.idepDerniereModif = ?1 and t.idepDerniereModif = ?2")
	Set<TemplateModele> templatesCreeParModifiePar(String idepCreation, String idDerniereModif);
}
