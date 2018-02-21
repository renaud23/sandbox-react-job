package fr.insee.relay.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.google.common.base.Objects;

@Entity
@Table(name = "operations")
public class Operation {

	@Id
	@Column(name = "id")
	private Long id;

	@Column(name = "description")
	private String description;

	@ManyToOne
	@JoinColumn(name = "id_domaine")
	private Domaine domaine;

	// private Set<TemplateOperationnel> operations;

	@Override
	public boolean equals(Object object) {
		if (object instanceof Operation) {
			Operation other = (Operation) object;
			return Objects.equal(this.id, other.id);
		}
		return false;
	}

	@Override
	public String toString() {
		return String.format("Operation : %d - %s", id, description);
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

	public Domaine getDomaine() {
		return domaine;
	}

	public void setDomaine(Domaine domaine) {
		this.domaine = domaine;
	}
}
