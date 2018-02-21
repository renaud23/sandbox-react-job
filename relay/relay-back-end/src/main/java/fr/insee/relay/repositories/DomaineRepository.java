package fr.insee.relay.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.insee.relay.entities.Domaine;

public interface DomaineRepository extends JpaRepository<Domaine, Long> {}
