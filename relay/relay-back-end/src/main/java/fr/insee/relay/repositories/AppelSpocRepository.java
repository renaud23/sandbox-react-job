package fr.insee.relay.repositories;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import fr.insee.relay.entities.AppelSpoc;

public interface AppelSpocRepository extends JpaRepository<AppelSpoc, Long> {

	@Query("select a from AppelSpoc a where a.envoi.id = ?1")
	Set<AppelSpoc> findByEnvoi(Long envoiId);
}
