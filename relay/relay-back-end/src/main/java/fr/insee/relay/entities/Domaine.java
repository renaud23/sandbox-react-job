package fr.insee.relay.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.google.common.base.Objects;

@Entity
@Table(name = "domaines")
public class Domaine {

	@Id
	@Column(name = "id")
	private Long id;

	@Column(name = "description")
	private String description;

	@Override
	public boolean equals(Object object) {
		if (object instanceof Domaine) {
			Domaine other = (Domaine) object;
			return Objects.equal(this.id, other.id);
		}
		return false;
	}

	@Override
	public String toString() {
		return String.format("Domaine : %d - %s", id, description);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
