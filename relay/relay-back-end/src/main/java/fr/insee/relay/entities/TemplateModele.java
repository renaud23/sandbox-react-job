package fr.insee.relay.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.google.common.base.Objects;

@Entity
@Table(name = "template_modele")
public class TemplateModele {

	@Id
	@Column(name = "id")
	private Long id;

	@Column(name = "idep_creation")
	private String idepCreation;

	@Column(name = "idep_derniere_modif")
	private String idepDerniereModif;

	@Column(name = "date_creation")
	private Date dateCreation;

	@Column(name = "date_derniere_modif")
	private Date dateDerniereModif;

	@Column(name = "description")
	private String description;

	@Column(name = "commentaire")
	private String commentaire;

	@ManyToOne
	@JoinColumn(name = "id_domaine")
	private Domaine domaine;

	@Override
	public boolean equals(Object object) {
		if (object instanceof TemplateModele) {
			TemplateModele other = (TemplateModele) object;
			return Objects.equal(this.id, other.id);
		}
		return false;
	}

	@Override
	public String toString() {
		return String.format("TemplateModele : %d - %s", id, description);
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getIdepCreation() {
		return idepCreation;
	}

	public void setIdepCreation(String idepCreation) {
		this.idepCreation = idepCreation;
	}

	public String getIdepDerniereModif() {
		return idepDerniereModif;
	}

	public void setIdepDerniereModif(String idepDerniereModif) {
		this.idepDerniereModif = idepDerniereModif;
	}

	public Date getDateCreation() {
		return dateCreation;
	}

	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}

	public Date getDateDerniereModif() {
		return dateDerniereModif;
	}

	public void setDateDerniereModif(Date dateDerniereModif) {
		this.dateDerniereModif = dateDerniereModif;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCommentaire() {
		return commentaire;
	}

	public void setCommentaire(String commentaire) {
		this.commentaire = commentaire;
	}

	public Domaine getDomaine() {
		return domaine;
	}

	public void setDomaine(Domaine domaine) {
		this.domaine = domaine;
	}
}
