package fr.insee.relay.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.insee.relay.entities.ArchiveTemplateMail;

public interface ArchiveTemplateMailRepository extends JpaRepository<ArchiveTemplateMail, Long> {

}
